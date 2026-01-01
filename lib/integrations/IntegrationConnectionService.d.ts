/**
 * Integration Connection Service
 *
 * Shared service for ALL apps to read integration connections
 * All apps use this service to check connection status
 */
import { Firestore, Unsubscribe } from 'firebase/firestore';
/**
 * Connection Status
 */
export interface ConnectionStatus {
    connected: boolean;
    provider: string;
    accountEmail?: string;
    accountName?: string;
    connectedAt?: any;
    expiresAt?: any;
    scopes?: string[];
}
/**
 * Integration Connection Service
 *
 * Provides methods for ALL apps to:
 * - Check if an integration is connected
 * - Subscribe to connection changes
 * - Get connection details
 */
export declare class IntegrationConnectionService {
    /**
     * Get connection status for a provider
     * Used by ALL apps to check if integration is connected
     */
    static getConnectionStatus(db: Firestore, organizationId: string, provider: 'google' | 'box' | 'dropbox' | 'slack' | string): Promise<ConnectionStatus>;
    /**
     * Subscribe to connection changes
     * Real-time updates when connection status changes
     * Returns unsubscribe function
     */
    static subscribeToConnection(db: Firestore, organizationId: string, provider: 'google' | 'box' | 'dropbox' | 'slack' | string, callback: (status: ConnectionStatus) => void): Unsubscribe;
    /**
     * Redirect to Licensing Website for OAuth
     * Used by ALL apps except Licensing Website
     */
    static redirectToOAuthFlow(provider: 'google' | 'box' | 'dropbox' | 'slack' | string, returnUrl: string): void;
    /**
     * Get all connection statuses for an organization
     */
    static getAllConnectionStatuses(db: Firestore, organizationId: string): Promise<Record<string, ConnectionStatus>>;
}
