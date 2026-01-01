/**
 * Integration Services Export
 *
 * Exports all integration-related services and hooks
 */
export { IntegrationConnectionService } from './IntegrationConnectionService';
export { useIntegrationConnections } from './hooks/useIntegrationConnections';
// Compatibility adapter for migrating from old OAuthFlowManager
export { OAuthFlowManagerAdapter, oauthFlowManager } from './OAuthFlowManagerAdapter';
