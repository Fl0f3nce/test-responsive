/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-helper.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation helper functions and global constants/variables
 */
/* -------------------------------------------------------------------------- */

// --- All variables must be declared before use ---
"use strict";


// *************************************************************
// *** Global constants for JavaScript Module Navigation API ***
// *************************************************************
// --- iELM-Navigation API and iELP-Navigation API Content Types ---
var gConstModuleNavigationAPIXMLContentType = "application/vnd.ielm.nav+xml";
var gConstPortalNavigationAPIXMLContentType = "application/vnd.ielp.nav+xml";
// -----------------------------------------------------------------

// --- iELM-Navigation HTML head meta names ---
var gConstModuleNavigationHTMLHeadMetaNamePackage = "package";
var gConstModuleNavigationHTMLHeadMetaNamePageID = "page_id";
var gConstModuleNavigationHTMLHeadMetaNameModuleContentXMLFile = "module_content_xml_file";
var gConstModuleNavigationHTMLHeadMetaNamePortalContextPath = "portal_context_path";
var gConstModuleNavigationHTMLHeadMetaNameModuleNavigationContextPath = "module_navigation_context_path";
var gConstModuleNavigationHTMLHeadMetaNamePortalNavigationContextPath = "portal_navigation_context_path";
var gConstModuleNavigationHTMLHeadMetaNameShowSideMenuSeparators = "show_side_menu_separators";
var gConstModuleNavigationHTMLHeadMetaNameShowSideMenuSeparatorsValueTrue = "true";
// --------------------------------------------

// --- iELM-Navigation module content XML file elements ---
var gConstModuleNavigationModuleContentXMLFileElementContext = "context";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributeBreadcrumb = "breadcrumb";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributeHidden = "hidden";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributeMenuText = "menutext";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage = "package";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributePageID = "page_id";
var gConstModuleNavigationModuleContentXMLFileElementContextAttributePath = "path";
var gConstModuleNavigationModuleContentXMLFileElementSeparator = "separator";
// --------------------------------------------------------

// --- iELP-Navigation JavaScript Fallback data ---
var gConstPortalNavigationJavaScriptFallbackPortalRootText = "Startseite";
var gConstPortalNavigationJavaScriptFallbackPortalFooter = [{site: "impressum.jsp", text: "Impressum"}, {site: "about.jsp", text: "Info"}];
// ------------------------------------------------

// --- iELM-Navigation API modules resources URIs ---
var gConstModuleNavigationAPIModulesBaseURI = "/api/v1/modules/";
var gConstModuleNavigationAPIModulesSubURIMenuEntries = "/menu/entries";
var gConstModuleNavigationAPIModulesSubURIMenuEntriesSeparators = "/menu/entries?separators=true";
var gConstModuleNavigationAPIModulesSubURIMenuEntriesListIndex = "/menu/entries/list?index=";
var gConstModuleNavigationAPIModulesSubURIMenuEntriesSize = "/menu/entries/size";
// --------------------------------------------------

// --- iELM-Navigation API portal modules resources URIs ---
var gConstModuleNavigationAPIPortalModulesBaseURI = "/api/v1/portalmodules/";
var gConstModuleNavigationAPIPortalModulesSubURIBreadcrumb = "/breadcrumb/";
var gConstModuleNavigationAPIPortalModulesSubURIBreadcrumbTree = "?tree=true";
// ---------------------------------------------------------

// --- iELP-Navigation API portal contexts resources URIs ---
var gConstPortalNavigationAPIPortalContextsBaseURI = "/api/v1/portalcontexts/";
var gConstPortalNavigationAPIPortalContextsSubURIPortalFooter = "portalfooter";
// ----------------------------------------------------------

// --- iELM-Navigation API and iELP-Navigation API root elements ---
var gConstModuleNavigationAPIRootElement = "ielm-nav";
var gConstPortalNavigationAPIRootElement = "ielp-nav";
//// ---------------------------------------------------------------

// --- iELM-Navigation API modules resources elements ---
var gConstModuleNavigationAPIModulesElementMenu = "menu";
var gConstModuleNavigationAPIModulesElementMenuAttributeEntries = "entries";
var gConstModuleNavigationAPIModulesElementMenuEntry = "entry";
var gConstModuleNavigationAPIModulesElementMenuEntryAttributeID = "id";
var gConstModuleNavigationAPIModulesElementMenuEntryAttributeLink = "link";
var gConstModuleNavigationAPIModulesElementMenuEntryAttributeName = "name";
var gConstModuleNavigationAPIModulesElementMenuSeparator = "separator";
// ------------------------------------------------------

// --- iELM-Navigation API portal modules resources elements ---
var gConstModuleNavigationAPIPortalModulesElementBreadcrumb = "breadcrumb";
var gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeLink = "link";
var gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeName = "name";
var gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeParentBreadcrumbLink = "parent_breadcrumb_link";
// -------------------------------------------------------------

// --- iELP-Navigation API portal contexts resources elements ---
var gConstPortalNavigationAPIPortalContextsElementPortalFooter = "portalfooter";
var gConstPortalNavigationAPIPortalContextsElementPortalFooterEntry = "entry";
var gConstPortalNavigationAPIPortalContextsElementPortalFooterEntryAttributeLink = "link";
var gConstPortalNavigationAPIPortalContextsElementPortalFooterEntryAttributeName = "name";
// --------------------------------------------------------------

// --- JavaScript Module Navigation API: Breadcrumb ---
var gConstConsoleLogModuleNavigationBreadcrumbJavaScriptError = "Error: Module Navigation breadcrumb (JavaScript-Version) could not be created!";
var gConstConsoleLogModuleNavigationBreadcrumbJavaScriptOK = "Module Navigation breadcrumb (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationBreadcrumbJavaScriptPortalOK = "Module Navigation breadcrumb with iELP access (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationBreadcrumbRestError = "Error: Module Navigation breadcrumb (Rest-Version) could not be created!";
var gConstConsoleLogModuleNavigationBreadcrumbRestOK = "Module Navigation breadcrumb (Rest-Version) created.";
var gConstConsoleLogModuleNavigationBreadcrumbRestPortalOK = "Module Navigation breadcrumb (Rest-Version) with iELP access (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationBreadcrumbStructureRestOKStart = "Module Navigation breadcrumb structure (";
var gConstConsoleLogModuleNavigationBreadcrumbStructureRestOKEnd = ") (Rest-Version) created.";
var gConstDefaultTargetElementModuleNavigationBreadcrumb = "#__breadcrumb";
// ----------------------------------------------------

// --- JavaScript Module Navigation API: Footer ---
var gConstConsoleLogModuleNavigationFooterJavaScriptError = "Error: Module Navigation footer (JavaScript-Version) could not be created!";
var gConstConsoleLogModuleNavigationFooterJavaScriptOK = "Module Navigation footer (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationFooterRestError = "Error: Module Navigation footer (Rest-Version) could not be created!";
var gConstConsoleLogModuleNavigationFooterRestOK = "Module Navigation footer (Rest-Version) created.";
var gConstDefaultTargetElementModuleNavigationFooter = "footer";
var gConstHTMLSeparatorCodeModuleNavigationFooter = "<span style=\"text-decoration: none; color: #FFFFFF; letter-spacing: 0.1em; font-size: 16px; line-height: 40px;\">&nbsp;&nbsp;|&nbsp;&nbsp;</span>";
var gConstHTMLErrorCodeModuleNavigationFooter = "<span style=\"text-decoration: none; color: #FFFFFF; letter-spacing: 0.1em; font-size: 16px; line-height: 40px;\">[&nbsp;&nbsp;Lokaler iELM-Modus&nbsp;&nbsp;]</span>";
var gConstModuleNavigationFooterHyperlinkTarget = "_blank";
// ------------------------------------------------

// --- JavaScript Module Navigation API: Main menu ---
var gConstConsoleLogModuleNavigationMainMenuJavaScriptError = "Error: Module Navigation main menu (JavaScript-Version) could not be created!";
var gConstConsoleLogModuleNavigationMainMenuJavaScriptOK = "Module Navigation main menu (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationMainMenuRestError = "Error: Module Navigation main menu (Rest-Version) could not be created!";
var gConstConsoleLogModuleNavigationMainMenuRestOK = "Module Navigation main menu (Rest-Version) created.";
var gConstDefaultTargetElementModuleNavigationMainMenu = ".__navi";
var gConstHTMLErrorCodeModuleNavigationMainMenu = "<h3 style=\"text-align: center;\">Keine Unterpunkte vorhanden</h3>";
// ---------------------------------------------------

// --- JavaScript Module Navigation API: Menu entries ---
var gConstConsoleLogModuleNavigationMenuEntriesJavaScriptAsyncOK = "Module Navigation menu entries (JavaScript-Version/async) read: ";
var gConstConsoleLogModuleNavigationMenuEntriesJavaScriptSyncOK = "Module Navigation menu entries (JavaScript-Version/sync) read: ";
var gConstConsoleLogModuleNavigationMenuEntriesRestAsyncOK = "Module Navigation menu entries (Rest-Version/async) read: ";
var gConstConsoleLogModuleNavigationMenuEntriesRestSyncOK = "Module Navigation menu entries (Rest-Version/sync) read: ";
// ------------------------------------------------------

// --- JavaScript Module Navigation API: Side menu ---
var gConstConsoleLogModuleNavigationSideMenuJavaScriptError = "Error: Module Navigation side menu (JavaScript-Version) could not be created!";
var gConstConsoleLogModuleNavigationSideMenuJavaScriptOK = "Module Navigation side menu (JavaScript-Version) created.";
var gConstConsoleLogModuleNavigationSideMenuRestError = "Error: Module Navigation side menu (Rest-Version) could not be created!";
var gConstConsoleLogModuleNavigationSideMenuRestOK = "Module Navigation side menu (Rest-Version) created.";
var gConstDefaultCheckTargetElementModuleNavigationSideMenu = "._ielm_navi";
var gConstDefaultTargetElementModuleNavigationSideMenu = "._ielm_navi ul";
var gConstHTMLClassActiveCodeModuleNavigationSideMenu = " class=\"_active\"";
var gConstHTMLClassSeparatorCodeModuleNavigationSideMenu = " class=\"_separator\"";
var gConstHTMLErrorCodeModuleNavigationSideMenu = "<li style=\"text-align: center;\">Keine Unterpunkte vorhanden</li>";
// ---------------------------------------------------


// *************************************************************
// *** Global variables for JavaScript Module Navigation API ***
// *************************************************************
// --- Module package and module page ID (section ID) ---
var gModuleNavigationModulePackage;
var gModuleNavigationModulePageID;
// ------------------------------------------------------

// --- Module content XML file ---
var gModuleNavigationModuleContentXMLFile;
// -------------------------------

// --- Context paths ---
// --- Portal context path (iELP context path) ---
var gModuleNavigationPortalContextPath;
// --- Module navigation context path (iELM-Navigation API context path) ---
var gModuleNavigationModuleNavigationContextPath;
// --- Portal navigation context path (iELP-Navigation API context path) ---
var gModuleNavigationPortalNavigationContextPath;
// ---------------------

// --- Show side menu separators setting ---
var gModuleNavigationShowSideMenuSeparators;
// -----------------------------------------


/**
 * Returns the complete path of a selected node from within the iELM-Navigation
 * module content XML file
 *
 * @param {Object} node - The object that represents the node
 * @return {String}
 */
function getCompletePath(node)
{
  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Check for valid path attribute ***
    if (node.attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePath) !== undefined)
    {
      // *** Path attribute is valid ***
      // *** Check if node path is on top level ***
      if (node.attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePath).charAt(0) === "/")
      {
        // *** Node path is on top level ***
        // *** Return path of current node ***
        return node.attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePath);
      } else
      {
        // *** Node path is not on top level ***
        // *** Return recursive path of parent node and path of current node ***
        return getCompletePath(node.parent()) + node.attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePath);
      }
    } else
    {
      // *** Path attribute is invalid ***
      // *** Return empty String ***
      return "";
    }
  } else
  {
    // *** Node is invalid ***
    // *** Return empty String ***
    return "";
  }
} //end getCompletePath(node)


/**
 * Initializes the following global variables with the current HTML head
 * metadata:
 *        - module package
 *        - module page ID (section ID)
 *        - module content XML file
 *        - portal context path (iELP context path)
 *        - module navigation context path (iELM-Navigation API context path)
 *        - portal navigation context path (iELP-Navigation API context path)
 *        - show side menu separators setting
 */
function initGlobalVariables()
{
  // *** Get current module package from HTML head metadata ***
  gModuleNavigationModulePackage = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNamePackage + "']").attr("content");
  // *** Get current module page ID (section ID) from HTML head metadata ***
  gModuleNavigationModulePageID = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNamePageID + "']").attr("content");
  // *** Get current module content XML file from HTML head metadata ***
  gModuleNavigationModuleContentXMLFile = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNameModuleContentXMLFile + "']").attr("content");
  // *** Get current portal context path (iELP context path) from HTML head metadata ***
  gModuleNavigationPortalContextPath = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNamePortalContextPath + "']").attr("content");
  // *** Get current module navigation context path (iELM-Navigation API context path) from HTML head metadata ***
  gModuleNavigationModuleNavigationContextPath = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNameModuleNavigationContextPath + "']").attr("content");
  // *** Get current portal navigation context path (iELP-Navigation API context path) from HTML head metadata ***
  gModuleNavigationPortalNavigationContextPath = $("meta[name='" + gConstModuleNavigationHTMLHeadMetaNamePortalNavigationContextPath + "']").attr("content");
  // *** Get current show side menu separators setting from HTML head metadata ***
  gModuleNavigationShowSideMenuSeparators = ($("meta[name='" + gConstModuleNavigationHTMLHeadMetaNameShowSideMenuSeparators + "']").attr("content") === gConstModuleNavigationHTMLHeadMetaNameShowSideMenuSeparatorsValueTrue);

  // *** Check for valid module package ***
  if (gModuleNavigationModulePackage === undefined)
  {
    // *** Module package is invalid ***
    // *** Set empty module package ***
    gModuleNavigationModulePackage = "";
  }

  // *** Check for valid module page ID (section ID) ***
  if (gModuleNavigationModulePageID === undefined)
  {
    // *** Module page ID (section ID) is invalid ***
    // *** Set empty module page ID (section ID) ***
    gModuleNavigationModulePageID = "";
  }

  // *** Check for valid module content XML file ***
  if (gModuleNavigationModuleContentXMLFile === undefined)
  {
    // *** Module content XML file is invalid ***
    // *** Set empty module content XML file ***
    gModuleNavigationModuleContentXMLFile = "";
  }

  // *** Check for valid portal context path (iELP context path) ***
  if (gModuleNavigationPortalContextPath === undefined)
  {
    // *** Portal context path (iELP context path) is invalid ***
    // *** Set empty portal context path (iELP context path) ***
    gModuleNavigationPortalContextPath = "";
  }

  // *** Check for valid module navigation context path (iELM-Navigation API context path) ***
  if (gModuleNavigationModuleNavigationContextPath === undefined)
  {
    // *** Module navigation context path (iELM-Navigation API context path) is invalid ***
    // *** Set empty module navigation context path (iELM-Navigation API context path) ***
    gModuleNavigationModuleNavigationContextPath = "";
  }

  // *** Check for valid portal navigation context path (iELP-Navigation API context path) ***
  if (gModuleNavigationPortalNavigationContextPath === undefined)
  {
    // *** Portal navigation context path (iELP-Navigation API context path) is invalid ***
    // *** Set empty portal navigation context path (iELP-Navigation API context path) ***
    gModuleNavigationPortalNavigationContextPath = "";
  }

  // *** Check for valid show side menu separators setting ***
  if (gModuleNavigationShowSideMenuSeparators === undefined)
  {
    // *** Show side menu separators setting is invalid ***
    // *** Set show side menu separators setting to the default value of true ***
    gModuleNavigationShowSideMenuSeparators = true;
  }
} //end initGlobalVariables()


/**
 * Returns true if the following global variables have been successfully
 * initialized with the current HTML head metadata - otherwise false:
 *        - module package
 *        - module page ID (section ID)
 *        - module content XML file
 *        - portal context path (iELP context path)
 *        - module navigation context path (iELM-Navigation API context path)
 *        - portal navigation context path (iELP-Navigation API context path)
 *        - show side menu separators setting
 *
 * @return {boolean}
 */
function validGlobalVariables()
{
  // *** Return result of the operation ***
  return (gModuleNavigationModulePackage !== undefined
          && gModuleNavigationModulePackage !== ""
          && gModuleNavigationModulePageID !== undefined
          && gModuleNavigationModulePageID !== ""
          && gModuleNavigationModuleContentXMLFile !== undefined
          && gModuleNavigationModuleContentXMLFile !== ""
          && gModuleNavigationPortalContextPath !== undefined
          && gModuleNavigationPortalContextPath !== ""
          && gModuleNavigationModuleNavigationContextPath !== undefined
          && gModuleNavigationModuleNavigationContextPath !== ""
          && gModuleNavigationPortalNavigationContextPath !== undefined
          && gModuleNavigationPortalNavigationContextPath !== ""
          && gModuleNavigationShowSideMenuSeparators !== undefined
          && gModuleNavigationShowSideMenuSeparators !== "");
} //end validGlobalVariables()


/* -------------------------------------------------------------------------- */
