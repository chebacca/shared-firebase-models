/**
 * 🔥 APP ROLE DEFINITION MODEL
 * 
 * Defines app role values (both system defaults and organization custom)
 * for the hybrid dynamic app role system.
 * 
 * System Defaults: organizationId = null, isSystemDefault = true
 * Organization Custom: organizationId = string, isSystemDefault = false
 */

export type AppName = 'dashboard' | 'clipShowPro' | 'callSheet' | 'cuesheet' | 'addressBook' | 'bridge' | 'cns' | 'iwm' | 'licensing' | 'mobileCompanion' | 'workflow' | 'timecard';

export interface AppRoleDefinition {
  id: string;
  organizationId: string | null; // null = system default, string = organization custom
  appName: AppName;
  roleValue: string; // e.g., "ADMIN" (system) or "VFX_SUPERVISOR" (custom)
  displayName: string; // User-friendly display name
  description?: string;
  permissions?: string[]; // Optional: permissions associated with this role value
  hierarchy?: number; // Optional: hierarchy level for this role value (0-100)
  equivalentEnum?: string; // Optional: maps to system default enum (e.g., "VFX_SUPERVISOR" → "EDITOR") so apps checking enum values work correctly
  isSystemDefault: boolean; // true for system defaults, false for custom
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string; // null for system defaults, userId for custom roles
}

/**
 * Helper function to check if a role value is a system default
 */
export function isSystemDefaultRoleValue(roleValue: string, appName: AppName): boolean {
  // System defaults are the enum values from role-types.ts
  // This will be checked against the enum at runtime
  return false; // Will be implemented with enum checking
}

/**
 * App role value validation
 */
export function validateAppRoleValue(roleValue: string): { valid: boolean; error?: string } {
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

