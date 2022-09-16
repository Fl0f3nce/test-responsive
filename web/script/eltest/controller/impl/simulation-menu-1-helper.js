/* !!DO_NOT_GENERATE!! */
/*
 * Controller-Helper for Menu
 */
/* -------------------------------------------------------------------------- */

function simulation_menu_1_scenario_open()
{
  /* --- Open Scenario --- */
  alert("simulation_menu_1_scenario_open()");
  window.console.log("function simulation_menu_1_scenario_open() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_scenario_open() called.");
  }
  /* Initialize component Szenarioauswahl with function from EltestScenario */
  ielm_init_scenario_dialog(eltest_load_scenario);
  jQuery("#_ielm_common_scenario_selection").dialog("open");
  /* --------------------- */
}//end simulation_menu_1_scenario_open()

function simulation_menu_1_scenario_one()
{
  /* --- Load Scenario One --- */
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_scenario_one() called.");
  }
  eltest_load_scenario(gScenarioOne);
  /* ------------------------- */
}//end simulation_menu_1_scenario_one()

function simulation_menu_1_scenario_two()
{
  /* --- Load Scenario Two --- */
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_scenario_two() called.");
  }
  eltest_load_scenario(gScenarioTwo);
  /* ------------------------- */
}//end simulation_menu_1_scenario_two()

function simulation_menu_1_parameter_one()
{
  /* --- Parameter One --- */
  alert("simulation_menu_1_parameter_one()");
  window.console.log("function simulation_menu_1_parameter_one() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_parameter_one() called.");
  }
  /* --------------------- */
}//end simulation_menu_1_parameter_one()

function simulation_menu_1_parameter_two()
{
  /* --- Parameter Two --- */
  alert("simulation_menu_1_parameter_two()");
  window.console.log("function simulation_menu_1_parameter_two() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_parameter_two() called.");
  }
  /* --------------------- */
}//end simulation_menu_1_parameter_two()

function simulation_menu_1_parameter_three()
{
  /* --- Parameter Three --- */
  alert("simulation_menu_1_parameter_three()");
  window.console.log("function simulation_menu_1_parameter_three() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_parameter_three() called.");
  }
  /* ----------------------- */
}//end simulation_menu_1_parameter_three()

function simulation_menu_1_parameter_three_selection()
{
  /* --- Parameter Three Selection --- */
  alert("simulation_menu_1_parameter_three_selection()");
  window.console.log("function simulation_menu_1_parameter_three_selection() called.");
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_parameter_three_selection() called.");
  }
  /* --------------------------------- */
}//end simulation_menu_1_parameter_three_selection()

function simulation_menu_1_options_velocity()
{
  /* --- Select Velocity --- */
  var elemView = jQuery(this);
  var val = jQuery(elemView).val();
  if (typeof gDebug != "undefined" && gDebug != null)
  {
    gDebug.appendLog("function simulation_menu_1_options_velocity() called elemView.val=" + elemView.val());
  }
  eltest_set_speed(val);
  elemView.val(eltest_get_speed());
  /* ----------------------- */
}//end simulation_menu_1_options_velocity()

/* -------------------------------------------------------------------------- */
