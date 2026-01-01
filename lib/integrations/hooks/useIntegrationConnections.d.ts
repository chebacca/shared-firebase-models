/**
 * useIntegrationConnections Hook
 *
 * Shared React hook for ALL apps to:
 * - Get connection status for all providers
 * - Subscribe to real-time connection updates
 * - Initiate OAuth flows
 */
import { ConnectionStatus } from '../IntegrationConnectionService';
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
export declare function useIntegrationConnections(organizationId: string | null | undefined): UseIntegrationConnectionsResult;
