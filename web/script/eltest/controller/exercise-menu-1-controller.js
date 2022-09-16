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
  jQuery("#exercise-menu-1_scenario_open").click(function ()
  {
    /* --- Open Scenario --- */
    exercise_menu_1_scenario_open();
  });

  jQuery("#exercise-menu-1_scenario_one").click(function ()
  {
    /* --- Load Scenario One --- */
    exercise_menu_1_scenario_one();
  });

  jQuery("#exercise-menu-1_scenario_two").click(function ()
  {
    /* --- Load Scenario Two --- */
    exercise_menu_1_scenario_two();
  });

  /* ----------------------------------------------------------------------
   * Menu Parameter
   * ---------------------------------------------------------------------- */
  jQuery("#exercise-menu-1_parameter_one").click(function ()
  {
    /* --- Parameter One --- */
    exercise_menu_1_parameter_one();
  });

  jQuery("#exercise-menu-1_parameter_two").click(function ()
  {
    /* --- Parameter Two --- */
    exercise_menu_1_parameter_two();
  });

  jQuery("#exercise-menu-1_parameter_three").click(function ()
  {
    /* --- Parameter Three --- */
    exercise_menu_1_parameter_three();
  });

  jQuery("#exercise-menu-1_parameter_three_selection").change(function ()
  {
    /* --- Parameter Three Selection --- */
    exercise_menu_1_parameter_three_selection();
  });

  /* ----------------------------------------------------------------------
   * Menu Options
   * ---------------------------------------------------------------------- */
  jQuery("#ielm_component_menu_velocity").change(function ()
  {
    /* --- Select Velocity --- */
    exercise_menu_1_options_velocity();
  });

});
/* -------------------------------------------------------------------------- */
