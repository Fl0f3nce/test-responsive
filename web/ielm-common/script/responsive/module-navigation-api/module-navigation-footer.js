/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-footer.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation footer functions
 */
/* -------------------------------------------------------------------------- */

/**
 * Creates the Module Navigation footer within the specified element
 *
 * @param {String} element - Name of the target element [optional]
 */
function createModuleNavigationFooter(element)
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  createRestModuleNavigationFooter(element);
} //end createModuleNavigationFooter(element)


/**
 * --- JavaScript-Version ---
 * Creates the Module Navigation footer (based on the iELP-Navigation JavaScript
 * Fallback data) within the specified element
 *
 * @param {String} element - Name of the target element [optional]
 */
function createJavaScriptModuleNavigationFooter(element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationFooter;
  }

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // ***************************************
    // *** Create Module Navigation footer ***
    // ***************************************
    // *** Set footer entries to JavaScript Fallback Portal footer data ***
    var footer_entries = gConstPortalNavigationJavaScriptFallbackPortalFooter;
    // *** Create Module Navigation footer (based on selected footer entries) within the specified element ***
    processCreateJavaScriptModuleNavigationFooter(footer_entries, element);
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationFooter);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationFooterJavaScriptError);
    // *************************************
  }
} //end createJavaScriptModuleNavigationFooter(element)


/**
 * --- Rest-Version ---
 * Creates the Module Navigation footer (based on iELP-Navigation API) within
 * the specified element. Uses the JavaScript-Version as fallback solution
 *
 * @param {String} element - Name of the target element [optional]
 */
function createRestModuleNavigationFooter(element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Variable for iELP-Navigation API URI ***
  var portal_navigation_api_uri;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationFooter;
  }

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Use portal navigation context path, portal contexts base URI and sub URI for portal footer ***
    portal_navigation_api_uri = gModuleNavigationPortalNavigationContextPath
            + gConstPortalNavigationAPIPortalContextsBaseURI
            + gConstPortalNavigationAPIPortalContextsSubURIPortalFooter;

    // *** Use AJAX-GET-Request to read XML data from iELP-Navigation API XML response ***
    $.ajax({
      type: "GET",
      url: portal_navigation_api_uri,
      dataType: "xml",
      accepts: {
        xml: gConstPortalNavigationAPIXMLContentType
      },
      success: function (xml)
      {
        // *** Get node (portalfooter) from iELP-Navigation API XML response ***
        var node = $(xml).find(gConstPortalNavigationAPIPortalContextsElementPortalFooter);
        // ***************************************
        // *** Create Module Navigation footer ***
        // ***************************************
        // *** Create Module Navigation footer (based on selected node) within the specified element ***
        processCreateRestModuleNavigationFooter(node, element);
      },
      error: function ()
      {
        // *** iELP-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        createJavaScriptModuleNavigationFooter(element);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationFooter);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationFooterRestError);
    // *************************************
  }
} //end createRestModuleNavigationFooter(element)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation footer (based on selected footer entries) within
 * the specified element
 *
 * @param {Object} footer_entries - The object that represents the footer entries
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationFooter(footer_entries, element)
{
  // *** Variable for total number of footer entries ***
  var total_footer_entries = 0;
  // *** Counter variable for analysed footer entries ***
  var analysed_footer_entries = 0;

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationFooter;
  }

  // *** Check for valid footer entries ***
  if (footer_entries !== undefined && footer_entries.length > 0)
  {
    // *** Footer entries are valid ***
    // *** Set total number of footer entries ***
    total_footer_entries = footer_entries.length;

    // *** Iterate over every footer entry of the footer entries ***
    $.each(footer_entries, function (index, footer_entry)
    {
      // *** Use AJAX-HEAD-Request to check if portal context path and site of current footer entry is reachable ***
      $.ajax({
        type: "HEAD",
        url: (gModuleNavigationPortalContextPath + footer_entry.site),
        success: function ()
        {
          // *** Portal context path and site of current footer entry is reachable ***
          // *** Change valid status of current footer entry to true ***
          footer_entries[index].valid = true;
        },
        error: function ()
        {
          // *** Portal context path and site of current footer entry is not reachable ***
          // *** Change valid status of current footer entry to false ***
          footer_entries[index].valid = false;
        },
        complete: function ()
        {
          // *** Increase counter variable for analysed footer entries ***
          analysed_footer_entries++;
          // *** Check if all footer entries have been analysed ***
          if (analysed_footer_entries === total_footer_entries)
          {
            // *********************************************
            // *** All footer entries have been analysed ***
            // *********************************************
            // *** Create Module Navigation footer entries within the specified element ***
            processCreateJavaScriptModuleNavigationFooterEntries(footer_entries, element);
          }
        }
      });
    });
  } else
  {
    // *** Footer entries are invalid ***
    // *** Create error message in target element ***
    $(element).append(gConstHTMLErrorCodeModuleNavigationFooter);
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationFooterJavaScriptError);
    // *************************************
  }
} //end processCreateJavaScriptModuleNavigationFooter(footer_entries, element)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation footer entries (based on selected footer entries)
 * within the specified element
 *
 * @param {Object} footer_entries - The object that represents the footer entries
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationFooterEntries(footer_entries, element)
{
  // *** Variable for Module Navigation footer ***
  var footer = "";

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationFooter;
  }

  // *** Check for valid footer entries ***
  if (footer_entries !== undefined && footer_entries.length > 0)
  {
    // *** Footer entries are valid ***
    // ************************************************
    // *** Create Module Navigation footer elements ***
    // ************************************************
    // *** Iterate over every footer entry of the footer entries ***
    $.each(footer_entries, function (index, footer_entry)
    {
      // *** Get path for footer entry based on portal context path (iELP context path) ***
      var footer_entry_path = (gModuleNavigationPortalContextPath + footer_entry.site);
      // *** Get text for footer entry ***
      var footer_entry_text = footer_entry.text;
      // *** Get valid status for footer entry ***
      var footer_entry_valid = footer_entry.valid;
      // *** Check for valid footer entry ***
      if (footer_entry_path !== undefined && footer_entry_path !== ""
              && footer_entry_text !== undefined && footer_entry_text !== ""
              && footer_entry_valid !== undefined && footer_entry_valid === true)
      {
        // *** Footer entry is valid ***
        // *** Check if Module Navigation footer exists and is not empty ***
        if (footer !== undefined && footer !== "")
        {
          // *** Module Navigation footer exists and is not empty ***
          // *** Create footer entry separator in Module Navigation footer ***
          footer = footer + gConstHTMLSeparatorCodeModuleNavigationFooter;
        }
        // *** Create footer entry in Module Navigation footer ***
        footer = footer + "<a href=\"" + footer_entry_path + "\" target=\"" + gConstModuleNavigationFooterHyperlinkTarget + "\">" + footer_entry_text + "</a>";
      }
    });

    // *** Check for valid Module Navigation footer ***
    if (footer !== undefined && footer !== "")
    {
      // *** Module Navigation footer is valid ***
      // *** Create Module Navigation footer in target element ***
      $(element).append(footer);
      // *** Write console log error entry ***
      console.log(gConstConsoleLogModuleNavigationFooterJavaScriptOK);
      // *************************************
    } else
    {
      // *** Module Navigation footer is invalid ***
      // *** Create error message in target element ***
      $(element).append(gConstHTMLErrorCodeModuleNavigationFooter);
      // *** Write console log error entry ***
      console.log(gConstConsoleLogModuleNavigationFooterJavaScriptError);
      // *************************************
    }
  }
} //end processCreateJavaScriptModuleNavigationFooterEntries(footer_entries, element)


/**
 * --- Rest-Version ---
 * Creates Module Navigation footer (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {String} element - Name of the target element [optional]
 */
function processCreateRestModuleNavigationFooter(node, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationFooter;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every entry node within the node ***
    var entry_nodes = node.find(gConstPortalNavigationAPIPortalContextsElementPortalFooterEntry);
    entry_nodes.each(function (index)
    {
      // *** Get path for footer entry ***
      var footer_entry_path = $(this).attr(gConstPortalNavigationAPIPortalContextsElementPortalFooterEntryAttributeLink);
      // *** Get text for footer entry ***
      var footer_entry_text = $(this).attr(gConstPortalNavigationAPIPortalContextsElementPortalFooterEntryAttributeName);
      // *** Check for valid footer entry ***
      if (footer_entry_path !== undefined && footer_entry_path !== ""
              && footer_entry_text !== undefined && footer_entry_text !== "")
      {
        // *** Footer entry is valid ***
        // *** Create footer entry in target element ***
        $(element).append("<a href=\"" + footer_entry_path + "\" target=\"" + gConstModuleNavigationFooterHyperlinkTarget + "\">" + footer_entry_text + "</a>");
        // *** Create footer entry separator if entry node is not last entry node ***
        if (entry_nodes.eq(index + 1).length)
        {
          // *** Create footer entry separator in target element ***
          $(element).append(gConstHTMLSeparatorCodeModuleNavigationFooter);
        }
      }
    });
    // *** Write console log entry ***
    console.log(gConstConsoleLogModuleNavigationFooterRestOK);
    // *******************************
  } else
  {
    // *** Node is invalid ***
    // *** Try the JavaScript-Version ***
    createJavaScriptModuleNavigationFooter(element);
  }
} //end processCreateRestModuleNavigationFooter(node, element)


/* -------------------------------------------------------------------------- */
