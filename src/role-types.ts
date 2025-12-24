/**
 * 🔥 UNIFIED ROLE TYPE DEFINITIONS
 * Two-tier role system:
 * - Tier 1: Licensing Website Roles (Organizational) - OWNER, ADMIN, MEMBER, ACCOUNTING
 * - Tier 2: App-Specific Roles (Functional) - licensing specialist, editor, producer, writer, etc.
 */

// Tier 1: Licensing Website Roles (Organizational)
// These roles control access to the licensing website and organization account management
export enum LicensingRole {
  OWNER = 'OWNER',           // Organization owner, full access
  ADMIN = 'ADMIN',           // Organization admin, management access
  MEMBER = 'MEMBER',         // Regular organization member
  ACCOUNTING = 'ACCOUNTING'  // Financial data access only
}

// Tier 2: Dashboard App Roles (Functional)
// These roles determine what users can do within the Dashboard application
export enum DashboardRole {
  // Administrative
  ADMIN = 'ADMIN',
  EXEC = 'EXEC',
  MANAGER = 'MANAGER',
  POST_COORDINATOR = 'POST_COORDINATOR',
  
  // Production
  PRODUCER = 'PRODUCER',
  ASSOCIATE_PRODUCER = 'ASSOCIATE_PRODUCER',
  POST_PRODUCER = 'POST_PRODUCER',
  LINE_PRODUCER = 'LINE_PRODUCER',
  
  // Creative
  DIRECTOR = 'DIRECTOR',
  EDITOR = 'EDITOR',
  ASSISTANT_EDITOR = 'ASSISTANT_EDITOR',
  WRITER = 'WRITER',
  
  // Specialized
  LICENSING_SPECIALIST = 'LICENSING_SPECIALIST',
  MEDIA_MANAGER = 'MEDIA_MANAGER',
  
  // Support
  PRODUCTION_ASSISTANT = 'PRODUCTION_ASSISTANT',
  VIEWER = 'VIEWER',
  
  // NEW: Audio Roles
  AUDIO_POST = 'AUDIO_POST',
  AUDIO_PRODUCTION = 'AUDIO_PRODUCTION',
  AUDIO_MIXER = 'AUDIO_MIXER',
  SOUND_ENGINEER = 'SOUND_ENGINEER',
  
  // NEW: Visual Roles
  COLORIST = 'COLORIST',
  GFX_ARTIST = 'GFX_ARTIST',
  CAMERA_OPERATOR = 'CAMERA_OPERATOR',
  
  // NEW: Technical Roles
  QC_SPECIALIST = 'QC_SPECIALIST',
  DIT = 'DIT',
  
  // NEW: Coordination Roles
  LOCATION_MANAGER = 'LOCATION_MANAGER',
  PRODUCTION_MANAGER = 'PRODUCTION_MANAGER',
  POST_SUPERVISOR = 'POST_SUPERVISOR',
  
  // NEW: Support Roles
  POST_PA = 'POST_PA',
  GUEST = 'GUEST'
}

// Tier 2: Clip Show Pro Roles (Functional)
// These roles determine what users can do within Clip Show Pro
export enum ClipShowProRole {
  PRODUCER = 'PRODUCER',
  SUPERVISING_PRODUCER = 'SUPERVISING_PRODUCER',
  SERIES_PRODUCER = 'SERIES_PRODUCER',
  ASSOCIATE_PRODUCER = 'ASSOCIATE_PRODUCER',
  DIRECTOR = 'DIRECTOR',
  WRITER = 'WRITER',
  EDITOR = 'EDITOR',
  ASSISTANT_EDITOR = 'ASSISTANT_EDITOR',
  ASSEMBLY_EDITOR = 'ASSEMBLY_EDITOR',
  LICENSING_SPECIALIST = 'LICENSING_SPECIALIST',
  CLEARANCE_COORDINATOR = 'CLEARANCE_COORDINATOR',
  RESEARCHER = 'RESEARCHER',
  POST_PRODUCER = 'POST_PRODUCER',
  LINE_PRODUCER = 'LINE_PRODUCER',
  PRODUCTION_ASSISTANT = 'PRODUCTION_ASSISTANT',
  MEDIA_MANAGER = 'MEDIA_MANAGER'
}

// Tier 2: Call Sheet Roles (Functional)
// These roles determine what users can do within the Call Sheet application
export enum CallSheetRole {
  ADMIN = 'ADMIN',
  PRODUCER = 'PRODUCER',
  COORDINATOR = 'COORDINATOR',
  MEMBER = 'MEMBER'
}

// Tier 2: Cuesheet Roles (Functional)
// These roles determine what users can do within the Cuesheet application
// Uses same role structure as Clip Show Pro
export enum CuesheetRole {
  PRODUCER = 'PRODUCER',
  SUPERVISING_PRODUCER = 'SUPERVISING_PRODUCER',
  SERIES_PRODUCER = 'SERIES_PRODUCER',
  ASSOCIATE_PRODUCER = 'ASSOCIATE_PRODUCER',
  DIRECTOR = 'DIRECTOR',
  WRITER = 'WRITER',
  EDITOR = 'EDITOR',
  ASSISTANT_EDITOR = 'ASSISTANT_EDITOR',
  ASSEMBLY_EDITOR = 'ASSEMBLY_EDITOR',
  LICENSING_SPECIALIST = 'LICENSING_SPECIALIST',
  CLEARANCE_COORDINATOR = 'CLEARANCE_COORDINATOR',
  RESEARCHER = 'RESEARCHER',
  POST_PRODUCER = 'POST_PRODUCER',
  LINE_PRODUCER = 'LINE_PRODUCER',
  PRODUCTION_ASSISTANT = 'PRODUCTION_ASSISTANT',
  MEDIA_MANAGER = 'MEDIA_MANAGER',
  ADMIN = 'ADMIN',
  VIEWER = 'VIEWER'
}

