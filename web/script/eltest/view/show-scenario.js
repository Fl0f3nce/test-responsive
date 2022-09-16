/* !!DO_NOT_EDIT!! */
/* 
 * helper functions to copy the values into the view of a scenario
 */

/* -------------------------------------------------------------------------- */
function eltest_show_scenario(scen)
{
  /*
   * to show scenario after calculation
   * @param eltest scenario
   */

  /* infobox: meta information */
  eltest_fill_values_infobox_metainformation(scen);

  /* infobox: parameter */
  eltest_fill_values_infobox_parameter(scen);

  /* set speed options */
  jQuery("#ielm_component_menu_velocity").attr("min", gConstMinValueSimulationSpeed);
  jQuery("#ielm_component_menu_velocity").attr("max", gConstMaxValueSimulationSpeed);
  jQuery("#ielm_component_menu_velocity").attr("placeholder", gSimulationSpeed);                  //display simulationspeed    

  jQuery("#_ielm_common_menu_options").find("input").removeAttr("disabled");  //enable all infoboxes and speed input

  /* show all infoboxes and set check mark in menuitem */
  jQuery("#_ielm_common_infobox_meta").infobox({display: "true"});
  jQuery("#_ielm_common_infobox_parameter").infobox({display: "true"});
  jQuery("#_ielm_results").infobox({display: "true"});
  jQuery("#eltest_table_wrapper").show();  // dummy table


  eltest_set_workflow_view(scen);
  // for more complex content use more sub functions, e.g.
  // eltest_reset_workflow_view();
  // eltest_enable_footer();

  if (gExecutionMode == gConstExecutionModeExcercise)
  {
    eltest_wait_input(scen);
  } else //if(gExecutionMode == gConstExecutionModeSimulation)
  {
    eltest_show_result(scen);
  }

  //enable all buttons in step navigation
  jQuery("._ielm_step_navigation button").each(function (index, object) {
    jQuery(object).attr("disabled", false).removeClass('disabled');
  });

} //end eltest_show_scenario()
/* -------------------------------------------------------------------------- */
