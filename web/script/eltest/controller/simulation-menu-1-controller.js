/* !!DO_NOT_EDIT!! */
/*
 * Controller for Menu: Mapping events to event handlers
 */
/* -------------------------------------------------------------------------- */
jQuery(document).ready(function ()
{
  /* ----------------------------------------------------------------------
   * Menu Scenario
   * ---------------------------------------------------------------------- */
  jQuery("#simulation-menu-1_scenario_open").click(function ()
  {
    /* --- Open Scenario --- */
    simulation_menu_1_scenario_open();
  });

  jQuery("#simulation-menu-1_scenario_one").click(function ()
  {
    /* --- Load Scenario One --- */
    simulation_menu_1_scenario_one();
  });

  jQuery("#simulation-menu-1_scenario_two").click(function ()
  {
    /* --- Load Scenario Two --- */
    simulation_menu_1_scenario_two();
  });

  /* ----------------------------------------------------------------------
   * Menu Parameter
   * ---------------------------------------------------------------------- */
  jQuery("#simulation-menu-1_parameter_one").click(function ()
  {
    /* --- Parameter One --- */
    simulation_menu_1_parameter_one();
  });

  jQuery("#simulation-menu-1_parameter_two").click(function ()
  {
    /* --- Parameter Two --- */
    simulation_menu_1_parameter_two();
  });

  jQuery("#simulation-menu-1_parameter_three").click(function ()
  {
    /* --- Parameter Three --- */
    simulation_menu_1_parameter_three();
  });

  jQuery("#simulation-menu-1_parameter_three_selection").change(function ()
  {
    /* --- Parameter Three Selection --- */
    simulation_menu_1_parameter_three_selection();
  });

  /* ----------------------------------------------------------------------
   * Menu Options
   * ---------------------------------------------------------------------- */
  jQuery("#ielm_component_menu_velocity").change(function ()
  {
    /* --- Select Velocity --- */
    simulation_menu_1_options_velocity();
  });

});
/* -------------------------------------------------------------------------- */
