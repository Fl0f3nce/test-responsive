/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-menu-entries.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation menu entries functions
 */
/* -------------------------------------------------------------------------- */

/**
 * Returns the number of Module Navigation menu entries using a synchronous
 * AJAX call (deprecated)
 *
 * @return {Number}
 */
function getModuleNavigationMenuEntries()
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  return getRestModuleNavigationMenuEntries();
} //end getModuleNavigationMenuEntries()


/**
 * Passes the number of Module Navigation menu entries to a callback function
 * using an asynchronous AJAX call
 *
 * @param {function} callback - Callback function to pass the result to
 */
function getModuleNavigationMenuEntriesAsync(callback)
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  getRestModuleNavigationMenuEntriesAsync(callback);
} //end getModuleNavigationMenuEntriesAsync(callback)


/**
 * --- JavaScript-Version ---
 * Returns the number of Module Navigation menu entries (based on the
 * iELM-Navigation module content XML file) using a synchronous AJAX call
 * (deprecated)
 *
 * @return {Number}
 */
function getJavaScriptModuleNavigationMenuEntries()
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for number of Module Navigation menu entries ***
  var menu_entries = 0;

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
      async: false,
      success: function (xml)
      {
        // *** Get node (first context node) from iELM-Navigation module content XML file ***
        var node = $(xml).find(gConstModuleNavigationModuleContentXMLFileElementContext
                + "[" + gConstModuleNavigationModuleContentXMLFileElementContextAttributePackage
                + "='" + gModuleNavigationModulePackage
                + "']").first();
        // *** Check for valid node ***
        if (node !== undefined && node.length > 0)
        {
          // *** Node is valid ***
          // ****************************************************
          // *** Set number of Module Navigation menu entries ***
          // ****************************************************
          menu_entries = node.find(gConstModuleNavigationModuleContentXMLFileElementContext).length;
          // *** Write console log entry ***
          console.log(gConstConsoleLogModuleNavigationMenuEntriesJavaScriptSyncOK + menu_entries);
          // *******************************
        }
      }
    });
  }
  // *** Return number of Module Navigation menu entries ***
  return menu_entries;
} //end getJavaScriptModuleNavigationMenuEntries()


/**
 * --- JavaScript-Version ---
 * Passes the number of Module Navigation menu entries (based on the
 * iELM-Navigation module content XML file) to a callback function using an
 * asynchronous AJAX call
 *
 * @param {function} callback - Callback function to pass the result to
 */
function getJavaScriptModuleNavigationMenuEntriesAsync(callback)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for number of Module Navigation menu entries ***
  var menu_entries = 0;

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
        // *** Check for valid node ***
        if (node !== undefined && node.length > 0)
        {
          // *** Node is valid ***
          // ****************************************************
          // *** Set number of Module Navigation menu entries ***
          // ****************************************************
          menu_entries = node.find(gConstModuleNavigationModuleContentXMLFileElementContext).length;
          // *** Write console log entry ***
          console.log(gConstConsoleLogModuleNavigationMenuEntriesJavaScriptAsyncOK + menu_entries);
          // *******************************
          // *** Pass number of Module Navigation menu entries to callback function ***
          callback(menu_entries);
        } else
        {
          // *** Node is invalid ***
          // *** Pass number of Module Navigation menu entries to callback function ***
          callback(menu_entries);
        }
      },
      error: function ()
      {
        // *** iELM-Navigation module content XML file is invalid ***
        // *** Pass number of Module Navigation menu entries to callback function ***
        callback(menu_entries);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Pass number of Module Navigation menu entries to callback function ***
    callback(menu_entries);
  }
} //end getJavaScriptModuleNavigationMenuEntriesAsync(callback)


/**
 * --- Rest-Version ---
 * Returns the number of Module Navigation menu entries (based on
 * iELM-Navigation API) using a synchronous AJAX call (deprecated). Uses the
 * JavaScript-Version as fallback solution
 *
 * @return {Number}
 */
function getRestModuleNavigationMenuEntries()
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for iELM-Navigation API URI ***
  var module_navigation_api_uri;

  // *** Variable for number of Module Navigation menu entries ***
  var menu_entries = 0;

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Use module navigation context path, modules base URI and sub URI for menu entries size ***
    module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
            + gConstModuleNavigationAPIModulesBaseURI
            + gModuleNavigationModulePackage
            + gConstModuleNavigationAPIModulesSubURIMenuEntriesSize;

    // *** Use AJAX-GET-Request to read XML data from iELM-Navigation API XML response ***
    $.ajax({
      type: "GET",
      url: module_navigation_api_uri,
      dataType: "xml",
      accepts: {
        xml: gConstModuleNavigationAPIXMLContentType
      },
      async: false,
      success: function (xml)
      {
        // *** Get node (menu) from iELM-Navigation API XML response ***
        var node = $(xml).find(gConstModuleNavigationAPIModulesElementMenu);
        // *** Check for valid node ***
        if (node !== undefined && node.length > 0)
        {
          // *** Node is valid ***
          // *** Check for valid entries attribute ***
          if (node.attr(gConstModuleNavigationAPIModulesElementMenuAttributeEntries) !== undefined)
          {
            // *** Entries attribute is valid ***
            // ****************************************************
            // *** Set number of Module Navigation menu entries ***
            // ****************************************************
            menu_entries = node.attr(gConstModuleNavigationAPIModulesElementMenuAttributeEntries);
            // *** Write console log entry ***
            console.log(gConstConsoleLogModuleNavigationMenuEntriesRestSyncOK + menu_entries);
            // *******************************
          } else
          {
            // *** Entries attribute is invalid ***
            // *** Try the JavaScript-Version ***
            menu_entries = getJavaScriptModuleNavigationMenuEntries();
          }
        } else
        {
          // *** Node is invalid ***
          // *** Try the JavaScript-Version ***
          menu_entries = getJavaScriptModuleNavigationMenuEntries();
        }
      },
      error: function ()
      {
        // *** iELM-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        menu_entries = getJavaScriptModuleNavigationMenuEntries();
      }
    });
  }
  // *** Return number of Module Navigation menu entries ***
  return menu_entries;
} //end getRestModuleNavigationMenuEntries()


/**
 * --- Rest-Version ---
 * Passes the number of Module Navigation menu entries (based on
 * iELM-Navigation API) to a callback function using an asynchronous AJAX call
 *
 * @param {function} callback - Callback function to pass the result to
 */
function getRestModuleNavigationMenuEntriesAsync(callback)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for iELM-Navigation API URI ***
  var module_navigation_api_uri;

  // *** Variable for number of Module Navigation menu entries ***
  var menu_entries = 0;

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Use module navigation context path, modules base URI and sub URI for menu entries size ***
    module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
            + gConstModuleNavigationAPIModulesBaseURI
            + gModuleNavigationModulePackage
            + gConstModuleNavigationAPIModulesSubURIMenuEntriesSize;

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
        // *** Check for valid node ***
        if (node !== undefined && node.length > 0)
        {
          // *** Node is valid ***
          // *** Check for valid entries attribute ***
          if (node.attr(gConstModuleNavigationAPIModulesElementMenuAttributeEntries) !== undefined)
          {
            // *** Entries attribute is valid ***
            // ****************************************************
            // *** Set number of Module Navigation menu entries ***
            // ****************************************************
            menu_entries = node.attr(gConstModuleNavigationAPIModulesElementMenuAttributeEntries);
            // *** Write console log entry ***
            console.log(gConstConsoleLogModuleNavigationMenuEntriesRestAsyncOK + menu_entries);
            // *******************************
            // *** Pass number of Module Navigation menu entries to callback function ***
            callback(menu_entries);
          } else
          {
            // *** Entries attribute is invalid ***
            // *** Try the JavaScript-Version ***
            getJavaScriptModuleNavigationMenuEntriesAsync(callback);
          }
        } else
        {
          // *** Node is invalid ***
          // *** Try the JavaScript-Version ***
          getJavaScriptModuleNavigationMenuEntriesAsync(callback);
        }
      },
      error: function ()
      {
        // *** iELM-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        getJavaScriptModuleNavigationMenuEntriesAsync(callback);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Pass number of Module Navigation menu entries to callback function ***
    callback(menu_entries);
  }
} //end getRestModuleNavigationMenuEntriesAsync(callback)


/* -------------------------------------------------------------------------- */
