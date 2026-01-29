/**
 * Integration Connection Service
 *
 * Shared service for ALL apps to read integration connections
 * All apps use this service to check connection status
 */
import { doc, getDoc, getDocFromServer, onSnapshot } from 'firebase/firestore';
/**
 * Integration Connection Service
 *
 * Provides methods for ALL apps to:
 * - Check if an integration is connected
 * - Subscribe to connection changes
 * - Get connection details
 */
export class IntegrationConnectionService {
    /**
     * Get connection status for a provider
     * Used by ALL apps to check if integration is connected
     */
    static async getConnectionStatus(db, organizationId, provider) {
        const ref = doc(db, 'organizations', organizationId, 'cloudIntegrations', provider);
        // Try server fetch first, fallback to cache
        const snapshot = await getDocFromServer(ref).catch(() => getDoc(ref));
        if (!snapshot.exists()) {
            return { connected: false, provider };
        }
        const data = snapshot.data();
        return {
            connected: data.isActive !== false && !!data.accessToken,
            provider,
            accountEmail: data.accountEmail,
            accountName: data.accountName,
            connectedAt: data.connectedAt,
            expiresAt: data.tokenExpiresAt,
            scopes: data.scopes
        };
    }
    /**
     * Subscribe to connection changes
     * Real-time updates when connection status changes
     * Returns unsubscribe function
     */
    static subscribeToConnection(db, organizationId, provider, callback) {
        const ref = doc(db, 'organizations', organizationId, 'cloudIntegrations', provider);
        return onSnapshot(ref, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                callback({
                    connected: data.isActive !== false && !!data.accessToken,
                    provider,
                    accountEmail: data.accountEmail,
                    accountName: data.accountName,
                    connectedAt: data.connectedAt,
                    expiresAt: data.tokenExpiresAt,
                    scopes: data.scopes
                });
            }
            else {
                callback({ connected: false, provider });
            }
        });
    }
    /**
     * Redirect to Licensing Website for OAuth
     * Used by ALL apps except Licensing Website
     */
    static redirectToOAuthFlow(provider, returnUrl) {
        const isDev = window.location.hostname === 'localhost';
        const licensingUrl = isDev
            ? 'http://localhost:4001'
            : 'https://backbone-logic.web.app';
        const params = new URLSearchParams({
            provider,
            returnUrl: encodeURIComponent(returnUrl)
        });
        // 🔧 FIX: If the returnUrl is a Hub URL (contains #/appId), extract appId and add as hubAppId 
        // This allows Licensing Website's OAuthFlowManager to correctly route back to the Hub
        if (returnUrl.includes('#/')) {
            const hashParts = returnUrl.split('#/');
            if (hashParts.length > 1) {
                const hubAppId = hashParts[1].split('?')[0]; // Get appId before any query params
                if (hubAppId) {
                    params.append('hubAppId', hubAppId);
                    console.log(`✅ [IntegrationConnectionService] Propagating hubAppId: ${hubAppId}`);
                }
            }
        }
        const targetUrl = `${licensingUrl}/dashboard/integrations?${params}`;
        // Safety: don't redirect if we're already at the target
        if (window.location.href === targetUrl) {
            console.warn('[IntegrationConnectionService] Already at target OAuth flow URL');
            return;
        }
        window.location.href = targetUrl;
    }
    /**
     * Get all connection statuses for an organization
     */
    static async getAllConnectionStatuses(db, organizationId) {
        const providers = ['google', 'box', 'dropbox', 'slack'];
        const statuses = {};
        await Promise.all(providers.map(async (provider) => {
            statuses[provider] = await this.getConnectionStatus(db, organizationId, provider);
        }));
        return statuses;
    }
}
