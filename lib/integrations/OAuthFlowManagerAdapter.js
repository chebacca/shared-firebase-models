/**
 * OAuth Flow Manager Adapter
 *
 * Compatibility layer for apps migrating from old OAuthFlowManager
 * to new unified OAuth system
 *
 * This provides a drop-in replacement for OAuthFlowManager
 * while apps are being migrated
 */
import { IntegrationConnectionService } from './IntegrationConnectionService';
import { getFirestore } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';
/**
 * Adapter that mimics old OAuthFlowManager interface
 * but uses new unified system under the hood
 */
export class OAuthFlowManagerAdapter {
    constructor() {
        this.functions = null;
        this.statusCache = new Map();
        this.CACHE_TTL = 30000; // 30 seconds
    }
    getFunctions() {
        if (!this.functions) {
            this.functions = getFunctions();
        }
        return this.functions;
    }
    /**
     * Get integration status (compatible with old OAuthFlowManager)
     */
    async getIntegrationStatus(provider) {
        // Check cache first
        const cacheKey = `status_${provider}`;
        const cached = this.statusCache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
            return this.formatStatus(cached.status);
        }
        try {
            // Get organization ID from auth
            const { getAuth } = await import('firebase/auth');
            const auth = getAuth();
            if (!auth.currentUser) {
                return { connected: false };
            }
            // Get organization ID (you may need to adjust this based on your auth structure)
            const organizationId = auth.currentUser.organizationId ||
                auth.currentUser.claims?.organizationId;
            if (!organizationId) {
                return { connected: false };
            }
            // Use new unified service
            const db = getFirestore();
            const status = await IntegrationConnectionService.getConnectionStatus(db, organizationId, provider === 'apple_connect' ? 'apple' : provider);
            // Cache result
            this.statusCache.set(cacheKey, { status, timestamp: Date.now() });
            return this.formatStatus(status);
        }
        catch (error) {
            console.error(`Error getting ${provider} status:`, error);
            return { connected: false };
        }
    }
    /**
     * Format status to match old interface
     */
    formatStatus(status) {
        return {
            connected: status.connected,
            accountEmail: status.accountEmail,
            accountName: status.accountName,
            expiresAt: status.expiresAt?.toDate?.()?.toISOString() ||
                (status.expiresAt ? new Date(status.expiresAt).toISOString() : undefined),
            connectionMethod: 'oauth'
        };
    }
    /**
     * Initiate OAuth flow (compatible with old interface)
     */
    async initiateOAuth(provider, options) {
        try {
            const { getAuth } = await import('firebase/auth');
            const auth = getAuth();
            if (!auth.currentUser) {
                throw new Error('User must be authenticated');
            }
            const organizationId = auth.currentUser.organizationId ||
                auth.currentUser.claims?.organizationId;
            if (!organizationId) {
                throw new Error('Organization ID not found');
            }
            // Use new unified function
            const functions = this.getFunctions();
            const initiateOAuth = httpsCallable(functions, 'initiateOAuth');
            const result = await initiateOAuth({
                provider: provider === 'apple_connect' ? 'apple' : provider,
                organizationId
            });
            return result.data;
        }
        catch (error) {
            console.error(`Error initiating ${provider} OAuth:`, error);
            throw error;
        }
    }
    /**
     * Clear status cache
     */
    clearStatusCache(provider) {
        if (provider) {
            this.statusCache.delete(`status_${provider}`);
        }
        else {
            this.statusCache.clear();
        }
    }
    /**
     * Check if has document (for Box reactivation)
     */
    async hasBoxDocument() {
        const status = await this.getIntegrationStatus('box');
        return status.connected;
    }
}
// Export singleton instance (compatible with old pattern)
export const oauthFlowManager = new OAuthFlowManagerAdapter();
