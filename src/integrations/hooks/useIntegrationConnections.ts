/**
 * useIntegrationConnections Hook
 * 
 * Shared React hook for ALL apps to:
 * - Get connection status for all providers
 * - Subscribe to real-time connection updates
 * - Initiate OAuth flows
 */

import { useState, useEffect, useCallback } from 'react';
import { getFirestore } from 'firebase/firestore';
import { 
  IntegrationConnectionService, 
  ConnectionStatus 
} from '../IntegrationConnectionService';

/**
 * Hook return type
 */
export interface UseIntegrationConnectionsResult {
  connections: Record<string, ConnectionStatus>;
  loading: boolean;
  connectProvider: (provider: string) => void;
  disconnectProvider: (provider: string) => Promise<void>;
}

/**
 * useIntegrationConnections Hook
 * 
 * Usage in any app:
 * ```tsx
 * const { connections, loading, connectProvider } = useIntegrationConnections(organizationId);
 * 
 * // Check if Google Drive is connected
 * if (connections.google.connected) {
 *   // Use Google Drive
 * } else {
 *   // Show connect button
 *   <Button onClick={() => connectProvider('google')}>Connect Google Drive</Button>
 * }
 * ```
 */
export function useIntegrationConnections(
  organizationId: string | null | undefined
): UseIntegrationConnectionsResult {
  const [connections, setConnections] = useState<Record<string, ConnectionStatus>>({
    google: { connected: false, provider: 'google' },
    box: { connected: false, provider: 'box' },
    dropbox: { connected: false, provider: 'dropbox' },
    slack: { connected: false, provider: 'slack' }
  });
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  
  useEffect(() => {
    if (!organizationId) {
      setLoading(false);
      return;
    }
    
    const providers = ['google', 'box', 'dropbox', 'slack'] as const;
    const unsubscribes: Array<() => void> = [];
    
    providers.forEach(provider => {
      const unsub = IntegrationConnectionService.subscribeToConnection(
        db,
        organizationId,
        provider,
        (status) => {
          setConnections(prev => ({ ...prev, [provider]: status }));
          setLoading(false);
        }
      );
      unsubscribes.push(unsub);
    });
    
    return () => unsubscribes.forEach(unsub => unsub());
  }, [organizationId, db]);
  
  const connectProvider = useCallback((provider: string) => {
    const currentUrl = window.location.href;
    IntegrationConnectionService.redirectToOAuthFlow(
      provider as any,
      currentUrl
    );
  }, []);
  
  const disconnectProvider = useCallback(async (provider: string) => {
    // Call Firebase Function to revoke connection
    const { getFunctions, httpsCallable } = await import('firebase/functions');
    const functions = getFunctions();
    const revokeConnection = httpsCallable(functions, 'revokeOAuthConnection');
    
    try {
      await revokeConnection({ 
        provider, 
        organizationId 
      });
    } catch (error) {
      console.error('Failed to disconnect provider:', error);
      throw error;
    }
  }, [organizationId]);
  
  return { connections, loading, connectProvider, disconnectProvider };
}

