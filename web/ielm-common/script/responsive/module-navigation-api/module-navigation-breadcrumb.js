/* !!DO_NOT_EDIT!! */
/*
 *    Document   : module-navigation-breadcrumb.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    *****************************************************
 *    *** JavaScript Module Navigation API (Responsive) ***
 *    *****************************************************
 *    Module Navigation breadcrumb functions
 */
/* -------------------------------------------------------------------------- */

/**
 * Creates the Module Navigation breadcrumb within the specified element
 *
 * @param {String} element - Name of the target element [optional]
 */
function createModuleNavigationBreadcrumb(element)
{
  // *** The Rest-Version calls the JavaScript-Version if an error occurs ***
  createRestModuleNavigationBreadcrumb(element);
} //end createModuleNavigationBreadcrumb(element)


/**
 * Creates the Module Navigation breadcrumb hyperlink function for breadcrumb
 * option entries within the specified element
 *
 * @param {String} element - Name of the target element [optional]
 */
function createModuleNavigationBreadcrumbHyperlinkFunction(element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Create hyperlink function for breadcrumb option entries ***
  $(element).change(function ()
  {
    document.location.href = $(this).val();
  });
} //end createModuleNavigationBreadcrumbHyperlinkFunction(element)


/**
 * --- JavaScript-Version ---
 * Creates the Module Navigation breadcrumb (based on the iELM-Navigation module
 * content XML file and on iELP-Navigation JavaScript Fallback data) within the
 * specified element
 *
 * @param {String} element - Name of the target element [optional]
 */
function createJavaScriptModuleNavigationBreadcrumb(element)
{
  // *** Initialize global variables with the current HTML head metadata ***
  initGlobalVariables();

  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
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
        // *******************************************
        // *** Create Module Navigation breadcrumb ***
        // *******************************************
        // *** Create Module Navigation breadcrumb (based on selected node) within the specified element ***
        processCreateJavaScriptModuleNavigationBreadcrumb(node, element);
      },
      error: function ()
      {
        // *** iELM-Navigation module content XML file is invalid ***
        // *** Do not create Module Navigation breadcrumb ***
        // *** Write console log error entry ***
        console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptError);
        // *************************************
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Do not create Module Navigation breadcrumb ***
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptError);
    // *************************************
  }
} //end createJavaScriptModuleNavigationBreadcrumb(element)


/**
 * --- Rest-Version ---
 * Creates the Module Navigation breadcrumb (based on iELM-Navigation API)
 * within the specified element. Uses the JavaScript-Version as fallback
 * solution
 *
 * @param {String} element - Name of the target element [optional]
 */
function createRestModuleNavigationBreadcrumb(element)
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
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Check for valid global variables ***
  // *** This check is performed every time to ensure that the function is called from within the iELP ***
  if (validGlobalVariables())
  {
    // *** Global variables are valid ***
    // *** Use module navigation context path, portal modules base URI and sub URI for breadcrumb tree ***
    module_navigation_api_uri = gModuleNavigationModuleNavigationContextPath
            + gConstModuleNavigationAPIPortalModulesBaseURI
            + gModuleNavigationModulePackage
            + gConstModuleNavigationAPIPortalModulesSubURIBreadcrumb
            + gModuleNavigationModulePageID
            + gConstModuleNavigationAPIPortalModulesSubURIBreadcrumbTree;

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
        // *** Get node (ielm-nav) from iELM-Navigation API XML response ***
        var node = $(xml).find(gConstModuleNavigationAPIRootElement);
        // *******************************************
        // *** Create Module Navigation breadcrumb ***
        // *******************************************
        // *** Create Module Navigation breadcrumb (based on selected node) within the specified element ***
        processCreateRestModuleNavigationBreadcrumb(node, element);
      },
      error: function ()
      {
        // *** iELM-Navigation API XML response is invalid ***
        // *** Try the JavaScript-Version ***
        createJavaScriptModuleNavigationBreadcrumb(element);
      }
    });
  } else
  {
    // *** Global variables are invalid ***
    // *** Do not create Module Navigation breadcrumb ***
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationBreadcrumbRestError);
    // *************************************
  }
} //end createRestModuleNavigationBreadcrumb(element)


/**
 * Returns the complete breadcrumb of a selected node from within the
 * iELM-Navigation module content XML file
 *
 * @param {Object} node - The object that represents the node
 * @return {String}
 */
function getCompleteBreadcrumb(node)
{
  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Get complete path for breadcrumb ***
    var breadcrumb_path = getCompletePath(node);
    // *** Get text for breadcrumb ***
    var breadcrumb_text = node.attr(gConstModuleNavigationModuleContentXMLFileElementContextAttributeBreadcrumb);
    // *** Check for valid breadcrumb ***
    if (breadcrumb_path !== undefined && breadcrumb_path !== ""
            && breadcrumb_text !== undefined && breadcrumb_text !== "")
    {
      // *** Breadcrumb is valid ***
      // *** Create breadcrumb result for the operation ***
      var result = "<option value=\"" + breadcrumb_path + "\" selected>" + breadcrumb_text + "</option>";
      // *** Check if parent node exists ***
      if (node.parent() !== undefined && node.parent().length > 0)
      {
        // *** Parent node exists ***
        // *** Create complete breadcrumb for parent result ***
        var parent_result = getCompleteBreadcrumb(node.parent());
        // *** Check if parent result is valid ***
        if (parent_result !== undefined && parent_result !== "")
        {
          // *** Parent result is valid ***
          // *** Create new breadcrumb result with parent breadcrumb result ***
          result = parent_result + result;
        }
      }
      // *** Return breadcrumb result of the operation ***
      return result;
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
} //end getCompleteBreadcrumb(node)


/**
 * --- JavaScript-Version ---
 * Creates Module Navigation breadcrumb (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {String} element - Name of the target element [optional]
 */
function processCreateJavaScriptModuleNavigationBreadcrumb(node, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Get complete breadcrumb for current section context node ***
    var breadcrumb = getCompleteBreadcrumb(node);
    // *** Check for valid breadcrumb ***
    if (breadcrumb !== undefined && breadcrumb !== "")
    {
      // *** Breadcrumb is valid ***
      // *******************************************
      // *** iELP-Navigation JavaScript Fallback ***
      // *******************************************
      // *** Check for valid JavaScript Fallback Portal root data ***
      if (gConstPortalNavigationJavaScriptFallbackPortalRootText !== undefined
              && gConstPortalNavigationJavaScriptFallbackPortalRootText !== "")
      {
        // *** JavaScript Fallback Portal root data is valid ***
        // *** Use AJAX-HEAD-Request to check if URI of Portal root data is reachable ***
        $.ajax({
          type: "HEAD",
          url: gModuleNavigationPortalContextPath,
          success: function ()
          {
            // *** URI of Portal root data is reachable ***
            // *** Create Portal breadcrumb ***
            var portal_breadcrumb = "<option value=\"" + gModuleNavigationPortalContextPath + "\" selected>" + gConstPortalNavigationJavaScriptFallbackPortalRootText + "</option>";
            // *** Create Portal breadcrumb in target element ***
            $(element).append(portal_breadcrumb);
            // *** Create breadcrumb in target element ***
            $(element).append(breadcrumb);
            // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
            createModuleNavigationBreadcrumbHyperlinkFunction(element);
            // *** Write console log entry ***
            console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptPortalOK);
            // *******************************
          },
          error: function ()
          {
            // *** URI of Portal root data is not reachable ***
            // *** Create breadcrumb in target element ***
            $(element).append(breadcrumb);
            // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
            createModuleNavigationBreadcrumbHyperlinkFunction(element);
            // *** Write console log entry ***
            console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptOK);
            // *******************************
          }
        });
      } else
      {
        // *** JavaScript Fallback Portal root data is invalid ***
        // *** Create breadcrumb in target element ***
        $(element).append(breadcrumb);
        // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
        createModuleNavigationBreadcrumbHyperlinkFunction(element);
        // *** Write console log entry ***
        console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptOK);
        // *******************************
      }
    } else
    {
      // *** Breadcrumb is invalid ***
      // *** Do not create Module Navigation breadcrumb ***
      // *** Write console log error entry ***
      console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptError);
      // *************************************
    }
  } else
  {
    // *** Node is invalid ***
    // *** Do not create Module Navigation breadcrumb ***
    // *** Write console log error entry ***
    console.log(gConstConsoleLogModuleNavigationBreadcrumbJavaScriptError);
    // *************************************
  }
} //end processCreateJavaScriptModuleNavigationBreadcrumb(node, element)


/**
 * --- Rest-Version ---
 * Creates Module Navigation breadcrumb (based on selected node) within the
 * specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {String} element - Name of the target element [optional]
 */
function processCreateRestModuleNavigationBreadcrumb(node, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Get parent breadcrumb link of first breadcrumb node ***
    var parent_breadcrumb_link = node.find(gConstModuleNavigationAPIPortalModulesElementBreadcrumb).first().attr(gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeParentBreadcrumbLink);
    // *** Check parent breadcrumb link: A valid parent breadcrumb link indicates that the Module Navigation structure is incomplete ***
    // *** An incomplete Module Navigation structure would require iELP-Navigation API breadcrumb data to be loaded separately ***
    if (parent_breadcrumb_link !== undefined && parent_breadcrumb_link !== "")
    {
      // *************************************************
      // *** Module Navigation structure is incomplete ***
      // *************************************************
      // *** Load iELP-Navigation API breadcrumb data ***
      // *** Use AJAX-GET-Request to read XML data from iELP-Navigation API XML response ***
      $.ajax({
        type: "GET",
        url: parent_breadcrumb_link,
        dataType: "xml",
        accepts: {
          xml: gConstPortalNavigationAPIXMLContentType
        },
        success: function (ielp_nav_xml)
        {
          // *** Get ielp nav node (ielp-nav) from iELP-Navigation API XML response ***
          var ielp_nav_node = $(ielp_nav_xml).find(gConstPortalNavigationAPIRootElement);
          // *** Check for valid ielp nav node ***
          if (ielp_nav_node !== undefined && ielp_nav_node.length > 0)
          {
            // *** ielp nav node is valid ***
            // *** Create Module Navigation breadcrumb structure (based on selected ielp nav node) within the specified element
            processCreateRestModuleNavigationBreadcrumbStructure(ielp_nav_node, element, "iELP-Navigation API");
            // *** Create Module Navigation breadcrumb structure (based on selected node) within the specified element
            processCreateRestModuleNavigationBreadcrumbStructure(node, element, "iELM-Navigation API");
            // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
            createModuleNavigationBreadcrumbHyperlinkFunction(element);
          } else
          {
            // *** ielp nav node is invalid ***
            // *** Create Module Navigation breadcrumb with iELP-Navigation JavaScript Fallback (based on selected node) within the specified element ***
            processCreateRestModuleNavigationBreadcrumbWithPortalJavaScriptFallback(node, element);
          }
        },
        error: function ()
        {
          // *** iELP-Navigation API XML response is invalid ***
          // *** Create Module Navigation breadcrumb with iELP-Navigation JavaScript Fallback (based on selected node) within the specified element ***
          processCreateRestModuleNavigationBreadcrumbWithPortalJavaScriptFallback(node, element);
        }
      });
    } else
    {
      // ***********************************************
      // *** Module Navigation structure is complete ***
      // ***********************************************
      // *** Create Module Navigation breadcrumb structure (based on selected node) within the specified element
      processCreateRestModuleNavigationBreadcrumbStructure(node, element);
      // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
      createModuleNavigationBreadcrumbHyperlinkFunction(element);
      // *** Write console log entry ***
      console.log(gConstConsoleLogModuleNavigationBreadcrumbRestOK);
      // *******************************
    }
  } else
  {
    // *** Node is invalid ***
    // *** Try the JavaScript-Version ***
    createJavaScriptModuleNavigationBreadcrumb(element);
  }
} //end processCreateRestModuleNavigationBreadcrumb(node, element)


/**
 * --- Rest-Version ---
 * Creates Module Navigation breadcrumb structure (based on selected node)
 * within the specified element. The optional source parameter is only used for
 * logging
 *
 * @param {Object} node - The object that represents the node
 * @param {String} element - Name of the target element [optional]
 * @param {String} source - Name of the source [optional]
 */
function processCreateRestModuleNavigationBreadcrumbStructure(node, element, source)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *** Iterate over every breadcrumb node within the node ***
    var breadcrumb_nodes = node.find(gConstModuleNavigationAPIPortalModulesElementBreadcrumb);
    breadcrumb_nodes.each(function (index)
    {
      // *** Get path for breadcrumb ***
      var breadcrumb_path = $(this).attr(gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeLink);
      // *** Get text for breadcrumb ***
      var breadcrumb_text = $(this).attr(gConstModuleNavigationAPIPortalModulesElementBreadcrumbAttributeName);
      // *** Check for valid breadcrumb ***
      if (breadcrumb_path !== undefined && breadcrumb_path !== ""
              && breadcrumb_text !== undefined && breadcrumb_text !== "")
      {
        // *** Breadcrumb is valid ***
        // *** Create breadcrumb in target element ***
        $(element).append("<option value=\"" + breadcrumb_path + "\" selected>" + breadcrumb_text + "</option>");
      }
    });

    // *** Check for valid source ***
    if (source !== undefined && source !== "")
    {
      // *** Source is valid ***
      // *** Write console log entry ***
      console.log(gConstConsoleLogModuleNavigationBreadcrumbStructureRestOKStart + source + gConstConsoleLogModuleNavigationBreadcrumbStructureRestOKEnd);
      // *******************************
    }
  }
} //end processCreateRestModuleNavigationBreadcrumbStructure(node, element, source)


/**
 * --- Rest-Version ---
 * Creates Module Navigation breadcrumb with iELP-Navigation JavaScript Fallback
 * (based on selected node) within the specified element
 *
 * @param {Object} node - The object that represents the node
 * @param {String} element - Name of the target element [optional]
 */
function processCreateRestModuleNavigationBreadcrumbWithPortalJavaScriptFallback(node, element)
{
  // *** Check for valid target element ***
  if (element === undefined || element === "")
  {
    // *** Target element is invalid ***
    // *** Use default target element ***
    element = gConstDefaultTargetElementModuleNavigationBreadcrumb;
  }

  // *** Check for valid node ***
  if (node !== undefined && node.length > 0)
  {
    // *** Node is valid ***
    // *******************************************
    // *** iELP-Navigation JavaScript Fallback ***
    // *******************************************
    // *** Check for valid JavaScript Fallback Portal root data ***
    if (gConstPortalNavigationJavaScriptFallbackPortalRootText !== undefined
            && gConstPortalNavigationJavaScriptFallbackPortalRootText !== "")
    {
      // *** JavaScript Fallback Portal root data is valid ***
      // *** Use AJAX-HEAD-Request to check if URI of Portal root data is reachable ***
      $.ajax({
        type: "HEAD",
        url: gModuleNavigationPortalContextPath,
        success: function ()
        {
          // *** URI of Portal root data is reachable ***
          // *** Create Portal breadcrumb ***
          var portal_breadcrumb = "<option value=\"" + gModuleNavigationPortalContextPath + "\" selected>" + gConstPortalNavigationJavaScriptFallbackPortalRootText + "</option>";
          // *** Create Portal breadcrumb in target element ***
          $(element).append(portal_breadcrumb);
          // *** Create Module Navigation breadcrumb structure (based on selected node) within the specified element
          processCreateRestModuleNavigationBreadcrumbStructure(node, element);
          // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
          createModuleNavigationBreadcrumbHyperlinkFunction(element);
          // *** Write console log entry ***
          console.log(gConstConsoleLogModuleNavigationBreadcrumbRestPortalOK);
          // *******************************
        },
        error: function ()
        {
          // *** URI of Portal root data is not reachable ***
          // *** Create Module Navigation breadcrumb structure (based on selected node) within the specified element
          processCreateRestModuleNavigationBreadcrumbStructure(node, element, "iELM-Navigation API");
          // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
          createModuleNavigationBreadcrumbHyperlinkFunction(element);
        }
      });
    } else
    {
      // *** JavaScript Fallback Portal root data is invalid ***
      // *** Create Module Navigation breadcrumb structure (based on selected node) within the specified element
      processCreateRestModuleNavigationBreadcrumbStructure(node, element, "iELM-Navigation API");
      // *** Create the Module Navigation breadcrumb hyperlink function for breadcrumb option entries within the specified element ***
      createModuleNavigationBreadcrumbHyperlinkFunction(element);
    }
  }
} //end processCreateRestModuleNavigationBreadcrumbWithPortalJavaScriptFallback(node, element)


/* -------------------------------------------------------------------------- */
