/* !!DO_NOT_EDIT!! */
/*
 *    Document   : ielp-navigation.js
 *    Date       : 20190405
 *    Author     : Alexander Grober
 *
 *    ***********************************************
 *    *** JavaScript iELP-Navigation (Responsive) ***
 *    ***********************************************
 */
/* -------------------------------------------------------------------------- */

// *** Create JavaScript iELP-Navigation (Responsive) ***
$(document).ready(function ()
{
  // ************************************
  // *** Module Navigation breadcrumb ***
  // ************************************
  // *** Check for valid Module Navigation breadcrumb element ***
  if ($(gConstDefaultTargetElementModuleNavigationBreadcrumb).length)
  {
    // *** Module Navigation breadcrumb element is valid ***
    // *** Create Module Navigation breadcrumb ***
    createModuleNavigationBreadcrumb();
  }

  // ***********************************
  // *** Module Navigation side menu ***
  // ***********************************
  // *** Check for valid Module Navigation side menu element ***
  if ($(gConstDefaultCheckTargetElementModuleNavigationSideMenu).length)
  {
    // *** Module Navigation side menu element is valid ***
    // *** Create Module Navigation side menu ***
    createModuleNavigationSideMenu();
  }

  // ***********************************
  // *** Module Navigation main menu ***
  // ***********************************
  // *** Check for valid Module Navigation main menu element ***
  if ($(gConstDefaultTargetElementModuleNavigationMainMenu).length)
  {
    // *** Module Navigation main menu element is valid ***
    // *** Create Module Navigation main menu ***
    createModuleNavigationMainMenu();
  }

  // ********************************
  // *** Module Navigation footer ***
  // ********************************
  // *** Check for valid Module Navigation footer element ***
  if ($(gConstDefaultTargetElementModuleNavigationFooter).length)
  {
    // *** Module Navigation footer element is valid ***
    // *** Create Module Navigation footer ***
    createModuleNavigationFooter();
  }

  // ***********************************************
  // *** Module Navigation menu entries examples ***
  // ***********************************************
  // *** Passes the number of Module Navigation menu entries to a callback function using an asynchronous AJAX call ***
  /*
   getModuleNavigationMenuEntriesAsync(function (data)
   {
   var section_count = data;
   alert(section_count);
   });
   */

  // *** Returns the number of Module Navigation menu entries using a synchronous AJAX call (deprecated) ***
  // alert(getModuleNavigationMenuEntries());
});
