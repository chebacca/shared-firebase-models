/**
 * 🔥 UNIFIED USER DATA MODEL
 * Single source of truth for user data across all applications
 */

export type UserRole = 'SUPERADMIN' | 'ADMIN' | 'TEAM_MEMBER' | 'USER' | 'ACCOUNTING' | 'ENTERPRISE_ADMIN' | 'OWNER';

export interface RoleMapping {
  licensingRole: string;
  availableDashboardRoles: string[];
  selectedDashboardRole: string;
  templateRole?: string;
}

export interface ProjectAssignment {
  baseRole: string;
  permissions: string[];
  assignedAt: number;
}

export interface UnifiedUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationId: string;
  isTeamMember: boolean;
  isOrganizationOwner: boolean;
  licenseType?: 'BASIC' | 'PRO' | 'ENTERPRISE';
  firebaseUid: string;
  projectAccess?: string[];
  permissions?: string[];

  // Hierarchy System Integration
  teamMemberRole?: string;           // From licensing website (owner, admin, member, viewer)
  dashboardRole?: string;            // Converted dashboard role (ADMIN, EDITOR, etc.)
  teamMemberHierarchy?: number;      // Hierarchy level from team role (10-100)
  dashboardHierarchy?: number;       // Hierarchy level from dashboard role (10-100)
  effectiveHierarchy?: number;       // Max of team and dashboard hierarchy
  roleMapping?: RoleMapping;
  projectAssignments?: Record<string, ProjectAssignment>;

  // Subscription Add-ons
  subscriptionAddOns?: {
    clipShowPro?: boolean;
    callSheetPro?: boolean;
    edlConverter?: boolean;
  };

  // App-specific role overrides
  // Key: app name (clipShowPro, dashboard, etc.), Value: role name
  appRoles?: Record<string, string>;

  // Application-specific flags
  isEDLConverter?: boolean;
  isCallSheetUser?: boolean;
  isStandaloneUser?: boolean;

  // Metadata
  createdAt?: Date;
  updatedAt?: Date;
  lastLoginAt?: Date;
}

export interface AuthState {
  user: UnifiedUser | null;
  firebaseUser: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: UnifiedUser;
  error?: string;
  firebaseCustomToken?: string;
}

/**
 * 🔥 UNIFIED ORGANIZATION MODEL
 */
export interface Organization {
  id: string;
  name: string;
  type: 'enterprise' | 'small_business' | 'individual';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  updatedAt: Date;
  settings?: {
    allowCollaboration: boolean;
    maxTeamMembers: number;
    features: string[];
  };
}

/**
 * 🔥 UNIFIED PROJECT MODEL
 */
export interface Project {
  id: string;
  name: string;
  description?: string;
  type: 'ENTERPRISE' | 'DEVELOPMENT' | 'PRODUCTION' | 'TESTING';
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  organizationId: string;
  createdBy: string;
  ownerId: string;
  budget?: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  phase: 'PLANNING' | 'DEVELOPMENT' | 'TESTING' | 'PRODUCTION' | 'MAINTENANCE';
  teamMemberCount: number;
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    extendedStatus: string;
    statusUpdatedAt: string;
  };
  isArchived: boolean;
  isActive: boolean;
  maxCollaborators: number;
  settings: {
    allowCollaboration: boolean;
    autoEnableCollaboration: boolean;
    realTimeEnabled: boolean;
    maxCollaborators: number;
  };
  allowCollaboration: boolean;
  collaborationEnabled: boolean;
  lastActivityAt: string;
  realTimeEnabled: boolean;
  lastAccessedAt: string;
}

/**
 * 🔥 UNIFIED TEAM MEMBER MODEL
 */
export interface TeamMember {
  id: string;
  userId: string;
  email: string;
  name: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
  organizationId: string;
  hierarchy: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  permissions?: string[];
  projectAssignments?: Record<string, ProjectAssignment>;

  // App-specific role overrides
  appRoles?: Record<string, string>;
}

/**
 * 🔥 UNIFIED LICENSE MODEL
 */
export interface License {
  id: string;
  userId: string;
  organizationId: string;
  licenseType: 'BASIC' | 'PRO' | 'ENTERPRISE';
  status: 'ACTIVE' | 'EXPIRED' | 'SUSPENDED' | 'CANCELLED';
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  features: string[];
  limits: {
    maxProjects: number;
    maxTeamMembers: number;
    maxStorage: number;
  };
}

/**
 * 🔥 UNIFIED SUBSCRIPTION MODEL
 */
export interface Subscription {
  id: string;
  userId: string;
  organizationId: string;
  planId: string;
  status: 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'UNPAID';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
  addOns?: {
    clipShowPro?: {
      active: boolean;
      activatedAt: Date;
      expiresAt?: Date;
    };
    callSheetPro?: {
      active: boolean;
      activatedAt: Date;
      expiresAt?: Date;
    };
    edlConverter?: {
      active: boolean;
      activatedAt: Date;
      expiresAt?: Date;
    };
  };
}
