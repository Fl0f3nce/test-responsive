/* !!DO_NOT_EDIT!! */
/*
 * Controller for Step Navigation: Mapping events to event handlers
 */
/* -------------------------------------------------------------------------- */
jQuery(document).ready(function ()
{
  /* ----------------------------------------------------------------------
   * Step Navigation
   * ---------------------------------------------------------------------- */
  jQuery('#simulation-step_navigation-1_goto_start').click(function ()
  {
    /* --- Navigation: Goto Start --- */
    simulation_step_navigation_1_goto_start();
  });

  jQuery('#simulation-step_navigation-1_go_macro_step_back').click(function ()
  {
    /* --- Navigation: Go Macro Step Back --- */
    simulation_step_navigation_1_go_macro_step_back();
  });

  jQuery('#simulation-step_navigation-1_go_micro_step_back').click(function ()
  {
    /* --- Navigation: Go Micro Step Back --- */
    simulation_step_navigation_1_go_micro_step_back();
  });

  jQuery("#simulation-step_navigation-1_go_micro_step_forward").click(function ()
  {
    /* --- Navigation: Go Micro Step Forward --- */
    simulation_step_navigation_1_go_micro_step_forward();
  });

  jQuery("#simulation-step_navigation-1_go_macro_step_forward").click(function ()
  {
    /* --- Navigation: Go Macro Step Forward --- */
    simulation_step_navigation_1_go_macro_step_forward();
  });

  jQuery('#simulation-step_navigation-1_goto_end').click(function ()
  {
    /* --- Navigation: Goto End --- */
    simulation_step_navigation_1_goto_end();
  });

  jQuery('#simulation-step_navigation-1_play').click(function ()
  {
    /* --- Navigation: Play --- */
    simulation_step_navigation_1_play();
  });

  jQuery('#simulation-step_navigation-1_pause').click(function ()
  {
    /* --- Navigation: Pause --- */
    simulation_step_navigation_1_pause();
  });

  jQuery('#simulation-step_navigation-1_check_answer').click(function ()
  {
    /* --- Navigation: Check Answer --- */
    simulation_step_navigation_1_check_answer();
  });

  jQuery('#simulation-step_navigation-1_success_rate').click(function ()
  {
    /* --- Navigation: Success Rate --- */
    simulation_step_navigation_1_success_rate();
  });

  jQuery('#simulation-step_navigation-1_failure_rate').click(function ()
  {
    /* --- Navigation: Failure Rate --- */
    simulation_step_navigation_1_failure_rate();
  });
  
  jQuery('#simulation-step_navigation-1_progress_actual').change(function ()
  {
    /* --- Navigation: Change Progress Number --- */
    simulation_step_navigation_1_progress_actual();
  });
});
/* -------------------------------------------------------------------------- */
