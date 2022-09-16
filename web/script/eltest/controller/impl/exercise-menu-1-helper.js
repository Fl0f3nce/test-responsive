/* !!DO_NOT_GENERATE!! */
/*
 * Controller-Helper for Menu
 */
/* -------------------------------------------------------------------------- */

function exercise_menu_1_scenario_open()
{
  /* --- Open Scenario --- */
  alert("exercise_menu_1_scenario_open()");
  window.console.log("function exercise_menu_1_scenario_open() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_scenario_open() called.");
  }
  /* Initialize component Szenarioauswahl with function from EltestScenario */
  ielm_init_scenario_dialog(eltest_load_scenario);
  jQuery("#_ielm_common_scenario_selection").dialog("open");
  /* --------------------- */
}//end exercise_menu_1_scenario_open()

function exercise_menu_1_scenario_one()
{
  /* --- Load Scenario One --- */
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_scenario_one() called.");
  }
  eltest_load_scenario(gScenarioOne);
  /* ------------------------- */
}//end exercise_menu_1_scenario_one()

function exercise_menu_1_scenario_two()
{
  /* --- Load Scenario Two --- */
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_scenario_two() called.");
  }
  eltest_load_scenario(gScenarioTwo);
  /* ------------------------- */
}//end exercise_menu_1_scenario_two()

function exercise_menu_1_parameter_one()
{
  /* --- Parameter One --- */
  alert("exercise_menu_1_parameter_one()");
  window.console.log("function exercise_menu_1_parameter_one() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_parameter_one() called.");
  }
  /* --------------------- */
}//end exercise_menu_1_parameter_one()

function exercise_menu_1_parameter_two()
{
  /* --- Parameter Two --- */
  alert("exercise_menu_1_parameter_two()");
  window.console.log("function exercise_menu_1_parameter_two() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_parameter_two() called.");
  }
  /* --------------------- */
}//end exercise_menu_1_parameter_two()

function exercise_menu_1_parameter_three()
{
  /* --- Parameter Three --- */
  alert("exercise_menu_1_parameter_three()");
  window.console.log("function exercise_menu_1_parameter_three() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_parameter_three() called.");
  }
  /* ----------------------- */
}//end exercise_menu_1_parameter_three()

function exercise_menu_1_parameter_three_selection()
{
  /* --- Parameter Three Selection --- */
  alert("exercise_menu_1_parameter_three_selection()");
  window.console.log("function exercise_menu_1_parameter_three_selection() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_parameter_three_selection() called.");
  }
  /* --------------------------------- */
}//end exercise_menu_1_parameter_three_selection()

function exercise_menu_1_options_velocity()
{
  /* --- Select Velocity --- */
  var elemView = jQuery(this);
  var val = jQuery(elemView).val();
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function exercise_menu_1_options_velocity() called elemView.val=" + elemView.val());
  }
  eltest_set_speed(val);
  elemView.val(eltest_get_speed());
  /* ----------------------- */
}//end exercise_menu_1_options_velocity()

/* -------------------------------------------------------------------------- */
