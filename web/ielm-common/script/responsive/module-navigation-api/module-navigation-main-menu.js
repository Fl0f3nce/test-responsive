/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-main-menu.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation main menu functions
 */
/* -------------------------------------------------------------------------- */

/**
 * Creates the Module Navigation main menu within the specified element
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createModuleNavigationMainMenu(index, element)
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  createRestModuleNavigationMainMenu(index, element);
} //end createModuleNavigationMainMenu(index, element)


/**
 * --- JavaScript-Version ---
 * Creates the Module Navigation main menu (based on the iELM-Navigation module
 * content XML file) within the specified element
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createJavaScriptModuleNavigationMainMenu(index, element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationMainMenu;
  }

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Use AJAX-GET-Request to read XML data from iELM-Navigation module content XML file ***
    $.ajax({
      type: "GET",
      url: gModuleNavigationModuleContentXMLFile,
      dataType: "xml",
      success: function (xml)
      {
        // *** Get node (first context node) from iELM-Navigation module content XML file ***
        var node = $(xml).find(gConstModuleNavigationModuleContentXMLFileElementContext
                + "[" + gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage
                + "='" + gModuleNavigationModulePackage
                + "']").first();
        // ******************************************
        // *** Create Module Navigation main menu ***
        // ******************************************
        // *** Create Module Navigation main menu (based on selected node) within the specified element ***
        processCreateJavaScriptModuleNavigationMainMenu(node, index, element);
      },
      error: function ()
      {
        // *** iELM-Navigation module content XML file is invalid ***
        // *** Create error message in target element ***
        $(element).append(gConstHTMLErrorCodeModuleNavigationMainMenu);
        // *** Write console log error entry ***
        console.log(gConstConsoleLogModuleNavigationMainMenuJavaScriptError);
        // *************************************
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationMainMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationMainMenuJavaScriptError);
    // *************************************
  }
} //end createJavaScriptModuleNavigationMainMenu(index, element)


/**
 * --- Rest-Version ---
 * Creates the Module Navigation main menu (based on iELM-Navigation API) within
 * the specified element. Uses the JavaScript-Version as fallback solution
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createRestModuleNavigationMainMenu(index, element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for iELM-Navigation API URI ***
  var module_navigation_api_uri;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationMainMenu;
  }

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Check for valid index ***
    if (index === undefined)
    {
      // *** Index is invalid ***
      // *** Use module navigation context path, modules base URI and sub URI for menu entries ***
      module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
              + gConstModuleNavigationAPIModulesBaseURI
              + gModuleNavigationModulePackage
              + gConstModuleNavigationAPIModulesSubURIMenuEntries;
    } else
    {
      // *** Index is valid ***
      // *** Use module navigation context path, modules base URI and sub URI for menu entries list index ***
      module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
              + gConstModuleNavigationAPIModulesBaseURI
              + gModuleNavigationModulePackage
              + gConstModuleNavigationAPIModulesSubURIMenuEntriesListIndex
              + index;
    }

    // *** Use AJAX-GET-Request to read XML data from iELM-Navigation API XML response ***
    $.ajax({
      type: "GET",
      url: module_navigation_api_uri,
      dataType: "xml",
      accepts: {
        xml: gConstModuleNavigationAPIXMLContentType
      },
      success: function (xml)
      {
        // *** Get node (menu) from iELM-Navigation API XML response ***
        var node = $(xml).find(gConstModuleNavigationAPIModulesElementMenu);
        // ******************************************
        // *** Create Module Navigation main menu ***
        // ******************************************
        // *** Create Module Navigation main menu (based on selected node) within the specified element ***
        processCreateRestModuleNavigationMainMenu(node, index, element);
      },
      error: function ()
      {
        // *** iELM-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        createJavaScriptModuleNavigationMainMenu(index, element);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationMainMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationMainMenuRestError);
    // *************************************
  }
} //end createRestModuleNavigationMainMenu(index, element)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation main menu (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationMainMenu(node, index, element)
{
  // *** Counter variable for current menu entry ***
  var current_menu_entry = 0;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationMainMenu;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every context node within the node ***
    var context_nodes = node.find(gConstModuleNavigationModuleContentXMLFileElementContext);
    context_nodes.each(function ()
    {
      // *** Get complete path for menu entry ***
      var menu_entry_path = getCompletePath($(this));
      // *** Get text for menu entry ***
      var menu_entry_text = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributeMenuText);
      // *** Check for valid menu entry ***
      if (menu_entry_path !== undefined && menu_entry_path !== ""
              && menu_entry_text !== undefined && menu_entry_text !== "")
      {
        // *** Menu entry is valid ***
        // *** Create menu entry if index is either undefined or equals counter variable for current menu entry ***
        if (index === undefined || index === current_menu_entry)
        {
          // *** Create menu entry in target element ***
          $(element).append("<a href=\"" + menu_entry_path + "\">" + menu_entry_text + "</a>");
        }
      }
      // *** Increase counter variable for current menu entry ***
      current_menu_entry++;
    });
    // *** Write console log entry ***
    console.log(gConstConsoleLogModuleNavigationMainMenuJavaScriptOK);
    // *******************************
  } else
  {
    // *** Node is invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationMainMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationMainMenuJavaScriptError);
    // *************************************
  }
} //end processCreateJavaScriptModuleNavigationMainMenu(node, index, element)


/**
 * --- Rest-Version ---
 * Creates Module Navigation main menu (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function processCreateRestModuleNavigationMainMenu(node, index, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationMainMenu;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every entry node within the node ***
    var entry_nodes = node.find(gConstModuleNavigationAPIModulesElementMenuEntry);
    entry_nodes.each(function ()
    {
      // *** Get path for menu entry ***
      var menu_entry_path = $(this).attr(gConstModuleNavigationAPIModulesElementMenuEntryAttributeLink);
      // *** Get text for menu entry ***
      var menu_entry_text = $(this).attr(gConstModuleNavigationAPIModulesElementMenuEntryAttributeName);
      // *** Check for valid menu entry ***
      if (menu_entry_path !== undefined && menu_entry_path !== ""
              && menu_entry_text !== undefined && menu_entry_text !== "")
      {
        // *** Menu entry is valid ***
        // *** Create menu entry in target element ***
        $(element).append("<a href=\"" + menu_entry_path + "\">" + menu_entry_text + "</a>");
      }
    });
    // *** Write console log entry ***
    console.log(gConstConsoleLogModuleNavigationMainMenuRestOK);
    // *******************************
  } else
  {
    // *** Node is invalid ***
    // *** Try the JavaScript-Version ***
    createJavaScriptModuleNavigationMainMenu(index, element);
  }
} //end processCreateRestModuleNavigationMainMenu(node, index, element)


/* -------------------------------------------------------------------------- */
