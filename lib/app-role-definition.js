/**
 * 🔥 APP ROLE DEFINITION MODEL
 *
 * Defines app role values (both system defaults and organization custom)
 * for the hybrid dynamic app role system.
 *
 * System Defaults: organizationId = null, isSystemDefault = true
 * Organization Custom: organizationId = string, isSystemDefault = false
 */
/**
 * Helper function to check if a role value is a system default
 */
export function isSystemDefaultRoleValue(roleValue, appName) {
    // System defaults are the enum values from role-types.ts
    // This will be checked against the enum at runtime
    return false; // Will be implemented with enum checking
}
/**
 * App role value validation
 */
export function validateAppRoleValue(roleValue) {
    // Must be uppercase with underscores
    const pattern = /^[A-Z][A-Z0-9_]*$/;
    if (!pattern.test(roleValue)) {
        return {
            valid: false,
            error: 'Role value must be uppercase with underscores only (e.g., VFX_SUPERVISOR)'
        };
    }
    // Must be at least 2 characters
    if (roleValue.length < 2) {
        return {
            valid: false,
            error: 'Role value must be at least 2 characters'
        };
    }
    // Must be no more than 50 characters
    if (roleValue.length > 50) {
        return {
            valid: false,
            error: 'Role value must be no more than 50 characters'
        };
    }
    return { valid: true };
}
