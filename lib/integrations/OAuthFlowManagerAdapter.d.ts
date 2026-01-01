/**
 * OAuth Flow Manager Adapter
 *
 * Compatibility layer for apps migrating from old OAuthFlowManager
 * to new unified OAuth system
 *
 * This provides a drop-in replacement for OAuthFlowManager
 * while apps are being migrated
 */
/**
 * Adapter that mimics old OAuthFlowManager interface
 * but uses new unified system under the hood
 */
export declare class OAuthFlowManagerAdapter {
    private functions;
    private statusCache;
    private readonly CACHE_TTL;
    private getFunctions;
    /**
     * Get integration status (compatible with old OAuthFlowManager)
     */
    getIntegrationStatus(provider: 'google' | 'box' | 'dropbox' | 'apple_connect'): Promise<{
        connected: boolean;
        accountEmail?: string;
        accountName?: string;
        expiresAt?: string;
        connectionMethod?: 'oauth' | 'manual';
    }>;
    /**
     * Format status to match old interface
     */
    private formatStatus;
    /**
     * Initiate OAuth flow (compatible with old interface)
     */
    initiateOAuth(provider: 'google' | 'box' | 'dropbox' | 'apple_connect', options?: {
        redirectUri?: string;
        scope?: string;
    }): Promise<{
        authUrl: string;
        state: string;
    }>;
    /**
     * Clear status cache
     */
    clearStatusCache(provider?: 'google' | 'box' | 'dropbox' | 'apple_connect'): void;
    /**
     * Check if has document (for Box reactivation)
     */
    hasBoxDocument(): Promise<boolean>;
}
export declare const oauthFlowManager: OAuthFlowManagerAdapter;
