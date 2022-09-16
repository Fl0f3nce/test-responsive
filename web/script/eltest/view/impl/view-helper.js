/* !!DO_NOT_GENERATE!! */
/* view helper file
 *
 */

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*  wss 20160304
 */
/* -------------------------------------------------------------------------- */
function eltest_set_workflow_view(scen)
{
  /* function to set the Layout for simulation or exercise
   * jQuery().hide(); is the same like jQuery().css( "display", "none" );
   */
  gDebug.appendLogMode(gDebugSimulationAction, "eltest_set_workflow_view() called");

  jQuery("#eltest_init_information").hide();
  // simple content of scenario
  jQuery("#eltest_main_workflow").text("Szenario zu #eltest_menu_scenario_one geladen.");
  jQuery("#eltest_main_workflow").text(scen.getSpecificDesc());

  if (gExecutionMode === gConstExecutionModeSimulation)
  {
    // set_footer() here depending on mode
  } else if (gExecutionMode === gConstExecutionModeExcercise)
  {
    // set_footer() here depending on mode
  }
} // end eltest_set_workflow_view()

/* -------------------------------------------------------------------------- */
function eltest_show_result(scen) {
  // nothing ot in ELtest 
  // for more complex sample code see ELmako.
} // eltest_show_result()

/* -------------------------------------------------------------------------- */
function eltest_wait_input(scen)
{
  /*
   * function to update the view and wait for exercise input 
   */
  // nothing to do in ELtest.
  // for sample code see ELbuddy.
  /*
   elbuddy_reset_workflow_view();
   elbuddy_show_steps(scen, true);
   elbuddy_show_actual_simulation_process_label(scen); 
   elbuddy_show_waitinglist(scen);
   elbuddy_update_simulation(scen);
   elbuddy_mark_selected_partitions(scen);
   elbuddy_show_last_explanationlist(scen);
   elbuddy_set_animated_partition_position(scen);
   elbuddy_update_progress(scen);
   elbuddy_set_exercise_action(scen);
   jQuery(document).tooltip("enable");   
   */
} // end eltest_wait_input()

/* -------------------------------------------------------------------------- */

function eltest_set_init_information()
{
  gDebug.appendLog("called: eltest_set_init_information. gExecutionMode=" + gExecutionMode);
  if (gExecutionMode === gConstExecutionModeSimulation)
  {
    jQuery("#eltest_init_information").text("Bitte laden Sie als erstes ein Szenario f\u00fcr die Simulation.");
  } else if (gExecutionMode === gConstExecutionModeExcercise)
  {
    jQuery("#eltest_init_information").text("Bitte laden Sie als erstes ein Szenario f\u00fcr die Aufgabe.");
  }
  jQuery("#eltest_init_information").show();

} //end eltest_set_init_information()


/* -------------------------------------------------------------------------- */
function eltest_fill_values_infobox_metainformation(scen)
{
  /*
   * function to set the metainformationbox with the scenariodata
   */
  if (scen !== null)
  {
    jQuery("#_ielm_common_infobox_meta_taskname").html(scen.getName());
    jQuery("#_ielm_common_infobox_meta_description").html(scen.getDescription());
    jQuery("#_ielm_common_infobox_meta_author").html(scen.getAuthor());
  } else
  {
    // Placeholder
    jQuery("#_ielm_common_infobox_meta_taskname").html("Platzhalter_Text");
    jQuery("#_ielm_common_infobox_meta_description").html("Platzhalter_Text");
    jQuery("#_ielm_common_infobox_meta_author").html("Platzhalter_Text");
  }
} // end eltest_fill_values_infobox_metainformation()

/* -------------------------------------------------------------------------- */
function eltest_fill_values_infobox_parameter(scen)
{
  /*
   * function to set the parameterinfobox with the scenariodata
   */
  // no parameter in eltest scenario
  // for a sample with parameter see ELbuddy or ELmako
} // end eltest_fill_values_infobox_parameter()
