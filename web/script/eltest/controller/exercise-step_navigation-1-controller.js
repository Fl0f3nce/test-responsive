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
  jQuery('#exercise-step_navigation-1_goto_start').click(function ()
  {
    /* --- Navigation: Goto Start --- */
    exercise_step_navigation_1_goto_start();
  });

  jQuery('#exercise-step_navigation-1_go_macro_step_back').click(function ()
  {
    /* --- Navigation: Go Macro Step Back --- */
    exercise_step_navigation_1_go_macro_step_back();
  });

  jQuery('#exercise-step_navigation-1_go_micro_step_back').click(function ()
  {
    /* --- Navigation: Go Micro Step Back --- */
    exercise_step_navigation_1_go_micro_step_back();
  });

  jQuery("#exercise-step_navigation-1_go_micro_step_forward").click(function ()
  {
    /* --- Navigation: Go Micro Step Forward --- */
    exercise_step_navigation_1_go_micro_step_forward();
  });

  jQuery("#exercise-step_navigation-1_go_macro_step_forward").click(function ()
  {
    /* --- Navigation: Go Macro Step Forward --- */
    exercise_step_navigation_1_go_macro_step_forward();
  });

  jQuery('#exercise-step_navigation-1_goto_end').click(function ()
  {
    /* --- Navigation: Goto End --- */
    exercise_step_navigation_1_goto_end();
  });

  jQuery('#exercise-step_navigation-1_play').click(function ()
  {
    /* --- Navigation: Play --- */
    exercise_step_navigation_1_play();
  });

  jQuery('#exercise-step_navigation-1_pause').click(function ()
  {
    /* --- Navigation: Pause --- */
    exercise_step_navigation_1_pause();
  });

  jQuery('#exercise-step_navigation-1_check_answer').click(function ()
  {
    /* --- Navigation: Check Answer --- */
    exercise_step_navigation_1_check_answer();
  });

  jQuery('#exercise-step_navigation-1_success_rate').click(function ()
  {
    /* --- Navigation: Success Rate --- */
    exercise_step_navigation_1_success_rate();
  });

  jQuery('#exercise-step_navigation-1_failure_rate').click(function ()
  {
    /* --- Navigation: Failure Rate --- */
    exercise_step_navigation_1_failure_rate();
  });
  
  jQuery('#exercise-step_navigation-1_progress_actual').change(function ()
  {
    /* --- Navigation: Change Progress Number --- */
    exercise_step_navigation_1_progress_actual();
  });
});
/* -------------------------------------------------------------------------- */
