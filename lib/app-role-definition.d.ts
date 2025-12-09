/**
 * 🔥 APP ROLE DEFINITION MODEL
 *
 * Defines app role values (both system defaults and organization custom)
 * for the hybrid dynamic app role system.
 *
 * System Defaults: organizationId = null, isSystemDefault = true
 * Organization Custom: organizationId = string, isSystemDefault = false
 */
export type AppName = 'dashboard' | 'clipShowPro' | 'callSheet' | 'cuesheet';
export interface AppRoleDefinition {
    id: string;
    organizationId: string | null;
    appName: AppName;
    roleValue: string;
    displayName: string;
    description?: string;
    permissions?: string[];
    hierarchy?: number;
    equivalentEnum?: string;
    isSystemDefault: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdBy?: string;
}
/**
 * Helper function to check if a role value is a system default
 */
export declare function isSystemDefaultRoleValue(roleValue: string, appName: AppName): boolean;
/**
 * App role value validation
 */
export declare function validateAppRoleValue(roleValue: string): {
    valid: boolean;
    error?: string;
};
