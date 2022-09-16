/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-side-menu.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation side menu functions
 */
/* -------------------------------------------------------------------------- */

/**
 * Creates the Module Navigation side menu within the specified element
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createModuleNavigationSideMenu(index, element)
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  createRestModuleNavigationSideMenu(index, element);
} //end createModuleNavigationSideMenu(index, element)


/**
 * --- JavaScript-Version ---
 * Creates the Module Navigation side menu (based on the iELM-Navigation module
 * content XML file) within the specified element and highlights the active
 * section
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createJavaScriptModuleNavigationSideMenu(index, element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationSideMenu;
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
        // *** Get node (current section context node) from iELM-Navigation module content XML file ***
        var node = $(xml).find(gConstModuleNavigationModuleContentXMLFileElementContext
                + "[" + gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage
                + "='" + gModuleNavigationModulePackage
                + "'][" + gConstModuleNavigationModuleContentXMLFileElementContextAttributePageID
                + "='" + gModuleNavigationModulePageID
                + "']");
        // *** Check if module section has been selected (parent node of node is a context node) ***
        if (node !== undefined && node.length > 0
                && node.parent() !== undefined && node.parent().length > 0
                && node.parent().prop("nodeName") === gConstModuleNavigationModuleContentXMLFileElementContext)
        {
          // *** Module section has been selected (parent node of node is a context node) ***
          // ******************************************
          // *** Create Module Navigation side menu ***
          // ******************************************
          // *** Create Module Navigation side menu for module section (based on selected node) within the specified element ***
          processCreateJavaScriptModuleNavigationSideMenuForModuleSection(node, index, element);
        } else
        {
          // *** Module root has been selected ***
          // ******************************************
          // *** Create Module Navigation side menu ***
          // ******************************************
          // *** Create Module Navigation side menu for module root (based on selected node) within the specified element ***
          processCreateJavaScriptModuleNavigationSideMenuForModuleRoot(node, index, element);
        }
      },
      error: function ()
      {
        // *** iELM-Navigation module content XML file is invalid ***
        // *** Create error message in target element ***
        $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
        // *** Write console log error entry ***
        console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptError);
        // *************************************
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptError);
    // *************************************
  }
} //end createJavaScriptModuleNavigationSideMenu(index, element)


/**
 * --- Rest-Version ---
 * Creates the Module Navigation side menu (based on iELM-Navigation API) within
 * the specified element and highlights the active section. Uses the
 * JavaScript-Version as fallback solution
 *
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function createRestModuleNavigationSideMenu(index, element)
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
    element = gConstDefaultTargetElementModuleNavigationSideMenu;
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
      // *** Check if side menu separators should be shown ***
      if (gModuleNavigationShowSideMenuSeparators)
      {
        // *** Side menu separators should be shown ***
        // *** Use module navigation context path, modules base URI and sub URI for menu entries with separators ***
        module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
                + gConstModuleNavigationAPIModulesBaseURI
                + gModuleNavigationModulePackage
                + gConstModuleNavigationAPIModulesSubURIMenuEntriesSeparators;
      } else
      {
        // *** Side menu separators should not be shown ***
        // *** Use module navigation context path, modules base URI and sub URI for menu entries ***
        module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
                + gConstModuleNavigationAPIModulesBaseURI
                + gModuleNavigationModulePackage
                + gConstModuleNavigationAPIModulesSubURIMenuEntries;
      }
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
        // *** Create Module Navigation side menu ***
        // ******************************************
        // *** Create Module Navigation side menu (based on selected node) within the specified element ***
        processCreateRestModuleNavigationSideMenu(node, index, element);
      },
      error: function ()
      {
        // *** iELM-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        createJavaScriptModuleNavigationSideMenu(index, element);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuRestError);
    // *************************************
  }
} //end createRestModuleNavigationSideMenu(index, element)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation side menu for module root (based on selected node)
 * within the specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationSideMenuForModuleRoot(node, index, element)
{
  // *** Counter variable for current menu entry ***
  var current_menu_entry = 0;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationSideMenu;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every child node within the node ***
    var child_nodes = node.children();
    child_nodes.each(function ()
    {
      // *** Check if current child node is a context element ***
      if ($(this).prop("nodeName") === gConstModuleNavigationModuleContentXMLFileElementContext)
      {
        // *** Current child node is a context element ***
        // *** Get complete path for menu entry ***
        var menu_entry_path = getCompletePath($(this));
        // *** Get text for menu entry ***
        var menu_entry_text = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributeMenuText);
        // *** Get package for menu entry ***
        var menu_entry_package = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage);
        // *** Get page ID for menu entry ***
        var menu_entry_page_id = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePageID);
        // *** Check if current child node should be set as active section ***
        var menu_entry_active = "";
        if (menu_entry_package === gModuleNavigationModulePackage
                && menu_entry_page_id === gModuleNavigationModulePageID)
        {
          menu_entry_active = gConstHTMLClassActiveCodeModuleNavigationSideMenu;
        }
        // *** Check for valid menu entry ***
        if (menu_entry_path !== undefined && menu_entry_path !== ""
                && menu_entry_text !== undefined && menu_entry_text !== "")
        {
          // *** Menu entry is valid ***
          // *** Create menu entry if index is either undefined or equals counter variable for current menu entry ***
          if (index === undefined || index === current_menu_entry)
          {
            // *** Create menu entry in target element ***
            $(element).append("<li" + menu_entry_active + "><a href=\"" + menu_entry_path + "\">" + menu_entry_text + "</a></li>");
          }
        }
        // *** Increase counter variable for current menu entry ***
        current_menu_entry++;
      }
      // *** Check if side menu separators should be shown ***
      if (gModuleNavigationShowSideMenuSeparators)
      {
        // *** Side menu separators should be shown ***
        // *** Check if current child node is a separator element ***
        if ($(this).prop("nodeName") === gConstModuleNavigationModuleContentXMLFileElementSeparator)
        {
          // *** Current child node is a separator element ***
          // *** Create menu separator if index is undefined ***
          if (index === undefined)
          {
            // *** Create menu separator in target element ***
            $(element).append("<li" + gConstHTMLClassSeparatorCodeModuleNavigationSideMenu + "></li>");
          }
        }
      }
    });
    // *** Write console log entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptOK);
    // *******************************
  } else
  {
    // *** Node is invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptError);
    // *************************************
  }
} //end processCreateJavaScriptModuleNavigationSideMenuForModuleRoot(node, index, element)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation side menu for module section (based on selected
 * node) within the specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationSideMenuForModuleSection(node, index, element)
{
  // *** Counter variable for current menu entry ***
  var current_menu_entry = 0;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationSideMenu;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Check if parent node of node is valid ***
    if (node.parent() !== undefined && node.parent().length > 0)
    {
      // *** Parent node of node is valid ***
      // *** Iterate over every child node within the parent node of the node ***
      var child_nodes = node.parent().children();
      child_nodes.each(function ()
      {
        // *** Check if current child node is a context element ***
        if ($(this).prop("nodeName") === gConstModuleNavigationModuleContentXMLFileElementContext)
        {
          // *** Current child node is a context element ***
          // *** Get complete path for menu entry ***
          var menu_entry_path = getCompletePath($(this));
          // *** Get text for menu entry ***
          var menu_entry_text = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributeMenuText);
          // *** Get package for menu entry ***
          var menu_entry_package = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage);
          // *** Get page ID for menu entry ***
          var menu_entry_page_id = $(this).attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributePageID);
          // *** Check if current child node should be set as active section ***
          var menu_entry_active = "";
          if (menu_entry_package === gModuleNavigationModulePackage
                  && menu_entry_page_id === gModuleNavigationModulePageID)
          {
            menu_entry_active = gConstHTMLClassActiveCodeModuleNavigationSideMenu;
          }
          // *** Check for valid menu entry ***
          if (menu_entry_path !== undefined && menu_entry_path !== ""
                  && menu_entry_text !== undefined && menu_entry_text !== "")
          {
            // *** Menu entry is valid ***
            // *** Create menu entry if index is either undefined or equals counter variable for current menu entry ***
            if (index === undefined || index === current_menu_entry)
            {
              // *** Create menu entry in target element ***
              $(element).append("<li" + menu_entry_active + "><a href=\"" + menu_entry_path + "\">" + menu_entry_text + "</a></li>");
            }
          }
          // *** Increase counter variable for current menu entry ***
          current_menu_entry++;
        }
        // *** Check if side menu separators should be shown ***
        if (gModuleNavigationShowSideMenuSeparators)
        {
          // *** Side menu separators should be shown ***
          // *** Check if current child node is a separator element ***
          if ($(this).prop("nodeName") === gConstModuleNavigationModuleContentXMLFileElementSeparator)
          {
            // *** Current child node is a separator element ***
            // *** Create menu separator if index is undefined ***
            if (index === undefined)
            {
              // *** Create menu separator in target element ***
              $(element).append("<li" + gConstHTMLClassSeparatorCodeModuleNavigationSideMenu + "></li>");
            }
          }
        }
      });
      // *** Write console log entry ***
      console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptOK);
      // *******************************
    } else
    {
      // *** Parent node of node is invalid ***
      // *** Create error message in target element ***
      $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
      // *** Write console log error entry ***
      console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptError);
      // *************************************
    }
  } else
  {
    // *** Node is invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationSideMenu);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuJavaScriptError);
    // *************************************
  }
} //end processCreateJavaScriptModuleNavigationSideMenuForModuleSection(node, index, element)


/**
 * --- Rest-Version ---
 * Creates Module Navigation side menu (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {Number} index - Index of menu entry [optional, 0=first]
 * @param {String} element - Name of the target element [optional]
 */
function processCreateRestModuleNavigationSideMenu(node, index, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationSideMenu;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every child node within the node ***
    var child_nodes = node.children();
    child_nodes.each(function ()
    {
      // *** Check if current child node is an entry element ***
      if ($(this).prop("nodeName") === gConstModuleNavigationAPIModulesElementMenuEntry)
      {
        // *** Current child node is an entry element ***
        // *** Get path for menu entry ***
        var menu_entry_path = $(this).attr(gConstModuleNavigationAPIModulesElementMenuEntryAttributeLink);
        // *** Get text for menu entry ***
        var menu_entry_text = $(this).attr(gConstModuleNavigationAPIModulesElementMenuEntryAttributeName);
        // *** Get ID for menu entry ***
        var menu_entry_id = $(this).attr(gConstModuleNavigationAPIModulesElementMenuEntryAttributeID);
        // *** Check if current child node should be set as active section ***
        var menu_entry_active = "";
        if (menu_entry_id === gModuleNavigationModulePageID)
        {
          menu_entry_active = gConstHTMLClassActiveCodeModuleNavigationSideMenu;
        }
        // *** Check for valid menu entry ***
        if (menu_entry_path !== undefined && menu_entry_path !== ""
                && menu_entry_text !== undefined && menu_entry_text !== "")
        {
          // *** Menu entry is valid ***
          // *** Create menu entry in target element ***
          $(element).append("<li" + menu_entry_active + "><a href=\"" + menu_entry_path + "\">" + menu_entry_text + "</a></li>");
        }
      }
      // *** Check if side menu separators should be shown ***
      if (gModuleNavigationShowSideMenuSeparators)
      {
        // *** Side menu separators should be shown ***
        // *** Check if current child node is a separator element ***
        if ($(this).prop("nodeName") === gConstModuleNavigationAPIModulesElementMenuSeparator)
        {
          // *** Current child node is a separator element ***
          // *** Create menu separator in target element ***
          $(element).append("<li" + gConstHTMLClassSeparatorCodeModuleNavigationSideMenu + "></li>");
        }
      }
    });
    // *** Write console log entry ***
    console.log(gConstConsoleLogModuleNavigationSideMenuRestOK);
    // *******************************
  } else
  {
    // *** Node is invalid ***
    // *** Try the JavaScript-Version ***
    createJavaScriptModuleNavigationSideMenu(index, element);
  }
} //end processCreateRestModuleNavigationSideMenu(node, index, element)


/* -------------------------------------------------------------------------- */
