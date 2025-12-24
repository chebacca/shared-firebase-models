"use strict";
/**
 * 🔥 UNIFIED ROLE TYPE DEFINITIONS
 * Two-tier role system:
 * - Tier 1: Licensing Website Roles (Organizational) - OWNER, ADMIN, MEMBER, ACCOUNTING
 * - Tier 2: App-Specific Roles (Functional) - licensing specialist, editor, producer, writer, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuesheetRole = exports.CallSheetRole = exports.ClipShowProRole = exports.DashboardRole = exports.LicensingRole = void 0;
// Tier 1: Licensing Website Roles (Organizational)
// These roles control access to the licensing website and organization account management
var LicensingRole;
(function (LicensingRole) {
    LicensingRole["OWNER"] = "OWNER";
    LicensingRole["ADMIN"] = "ADMIN";
    LicensingRole["MEMBER"] = "MEMBER";
    LicensingRole["ACCOUNTING"] = "ACCOUNTING"; // Financial data access only
})(LicensingRole || (exports.LicensingRole = LicensingRole = {}));
// Tier 2: Dashboard App Roles (Functional)
// These roles determine what users can do within the Dashboard application
var DashboardRole;
(function (DashboardRole) {
    // Administrative
    DashboardRole["ADMIN"] = "ADMIN";
    DashboardRole["EXEC"] = "EXEC";
    DashboardRole["MANAGER"] = "MANAGER";
    DashboardRole["POST_COORDINATOR"] = "POST_COORDINATOR";
    // Production
    DashboardRole["PRODUCER"] = "PRODUCER";
    DashboardRole["ASSOCIATE_PRODUCER"] = "ASSOCIATE_PRODUCER";
    DashboardRole["POST_PRODUCER"] = "POST_PRODUCER";
    DashboardRole["LINE_PRODUCER"] = "LINE_PRODUCER";
    // Creative
    DashboardRole["DIRECTOR"] = "DIRECTOR";
    DashboardRole["EDITOR"] = "EDITOR";
    DashboardRole["ASSISTANT_EDITOR"] = "ASSISTANT_EDITOR";
    DashboardRole["WRITER"] = "WRITER";
    // Specialized
    DashboardRole["LICENSING_SPECIALIST"] = "LICENSING_SPECIALIST";
    DashboardRole["MEDIA_MANAGER"] = "MEDIA_MANAGER";
    // Support
    DashboardRole["PRODUCTION_ASSISTANT"] = "PRODUCTION_ASSISTANT";
    DashboardRole["VIEWER"] = "VIEWER";
    // NEW: Audio Roles
    DashboardRole["AUDIO_POST"] = "AUDIO_POST";
    DashboardRole["AUDIO_PRODUCTION"] = "AUDIO_PRODUCTION";
    DashboardRole["AUDIO_MIXER"] = "AUDIO_MIXER";
    DashboardRole["SOUND_ENGINEER"] = "SOUND_ENGINEER";
    // NEW: Visual Roles
    DashboardRole["COLORIST"] = "COLORIST";
    DashboardRole["GFX_ARTIST"] = "GFX_ARTIST";
    DashboardRole["CAMERA_OPERATOR"] = "CAMERA_OPERATOR";
    // NEW: Technical Roles
    DashboardRole["QC_SPECIALIST"] = "QC_SPECIALIST";
    DashboardRole["DIT"] = "DIT";
    // NEW: Coordination Roles
    DashboardRole["LOCATION_MANAGER"] = "LOCATION_MANAGER";
    DashboardRole["PRODUCTION_MANAGER"] = "PRODUCTION_MANAGER";
    DashboardRole["POST_SUPERVISOR"] = "POST_SUPERVISOR";
    // NEW: Support Roles
    DashboardRole["POST_PA"] = "POST_PA";
    DashboardRole["GUEST"] = "GUEST";
})(DashboardRole || (exports.DashboardRole = DashboardRole = {}));
// Tier 2: Clip Show Pro Roles (Functional)
// These roles determine what users can do within Clip Show Pro
var ClipShowProRole;
(function (ClipShowProRole) {
    ClipShowProRole["PRODUCER"] = "PRODUCER";
    ClipShowProRole["SUPERVISING_PRODUCER"] = "SUPERVISING_PRODUCER";
    ClipShowProRole["SERIES_PRODUCER"] = "SERIES_PRODUCER";
    ClipShowProRole["ASSOCIATE_PRODUCER"] = "ASSOCIATE_PRODUCER";
    ClipShowProRole["DIRECTOR"] = "DIRECTOR";
    ClipShowProRole["WRITER"] = "WRITER";
    ClipShowProRole["EDITOR"] = "EDITOR";
    ClipShowProRole["ASSISTANT_EDITOR"] = "ASSISTANT_EDITOR";
    ClipShowProRole["ASSEMBLY_EDITOR"] = "ASSEMBLY_EDITOR";
    ClipShowProRole["LICENSING_SPECIALIST"] = "LICENSING_SPECIALIST";
    ClipShowProRole["CLEARANCE_COORDINATOR"] = "CLEARANCE_COORDINATOR";
    ClipShowProRole["RESEARCHER"] = "RESEARCHER";
    ClipShowProRole["POST_PRODUCER"] = "POST_PRODUCER";
    ClipShowProRole["LINE_PRODUCER"] = "LINE_PRODUCER";
    ClipShowProRole["PRODUCTION_ASSISTANT"] = "PRODUCTION_ASSISTANT";
    ClipShowProRole["MEDIA_MANAGER"] = "MEDIA_MANAGER";
})(ClipShowProRole || (exports.ClipShowProRole = ClipShowProRole = {}));
// Tier 2: Call Sheet Roles (Functional)
// These roles determine what users can do within the Call Sheet application
var CallSheetRole;
(function (CallSheetRole) {
    CallSheetRole["ADMIN"] = "ADMIN";
    CallSheetRole["PRODUCER"] = "PRODUCER";
    CallSheetRole["COORDINATOR"] = "COORDINATOR";
    CallSheetRole["MEMBER"] = "MEMBER";
})(CallSheetRole || (exports.CallSheetRole = CallSheetRole = {}));
// Tier 2: Cuesheet Roles (Functional)
// These roles determine what users can do within the Cuesheet application
// Uses same role structure as Clip Show Pro
var CuesheetRole;
(function (CuesheetRole) {
    CuesheetRole["PRODUCER"] = "PRODUCER";
    CuesheetRole["SUPERVISING_PRODUCER"] = "SUPERVISING_PRODUCER";
    CuesheetRole["SERIES_PRODUCER"] = "SERIES_PRODUCER";
    CuesheetRole["ASSOCIATE_PRODUCER"] = "ASSOCIATE_PRODUCER";
    CuesheetRole["DIRECTOR"] = "DIRECTOR";
    CuesheetRole["WRITER"] = "WRITER";
    CuesheetRole["EDITOR"] = "EDITOR";
    CuesheetRole["ASSISTANT_EDITOR"] = "ASSISTANT_EDITOR";
    CuesheetRole["ASSEMBLY_EDITOR"] = "ASSEMBLY_EDITOR";
    CuesheetRole["LICENSING_SPECIALIST"] = "LICENSING_SPECIALIST";
    CuesheetRole["CLEARANCE_COORDINATOR"] = "CLEARANCE_COORDINATOR";
    CuesheetRole["RESEARCHER"] = "RESEARCHER";
    CuesheetRole["POST_PRODUCER"] = "POST_PRODUCER";
    CuesheetRole["LINE_PRODUCER"] = "LINE_PRODUCER";
    CuesheetRole["PRODUCTION_ASSISTANT"] = "PRODUCTION_ASSISTANT";
    CuesheetRole["MEDIA_MANAGER"] = "MEDIA_MANAGER";
    CuesheetRole["ADMIN"] = "ADMIN";
    CuesheetRole["VIEWER"] = "VIEWER";
})(CuesheetRole || (exports.CuesheetRole = CuesheetRole = {}));
//# sourceMappingURL=role-types.js.map