/* !!DO_NOT_GENERATE!! */
/* -------------------------------------------------------------------------- */
function eltest_play_scenario(scen) 
{ 
  /*
    if (gPlayStatus === true) 
    {
        if (scen.isFinished() === true) 
        {
            gPlayStatus = false;
            var viewelem = jQuery("#btn_play_pause");
            viewelem.removeClass("play");
            viewelem.text("II>");
        } 
        else 
        {
            scen.nextProgress();
            eltest_show_result(scen);
            setTimeout(function(){eltest_play_scenario(scen);}, eltest_get_speed());
        }
    }
  */
}//end eltest_play_scenario

function eltest_btn_section_forward_exercise_helper(scen) 
{
    /*
     * button ">>" to access next step with help
     */
    
    /*
    gDebug.appendLogMode(gDebugExerciseAction, "eltest_btn_section_forward_exercise_helper() called");
    if(scen.isFinished()) return;    
    var skiped_steps = scen.getProgressActual();
    eltest_show_result(scen);
    scen.nextStep();
    skiped_steps = scen.getProgressActual() - skiped_steps;
    eltest_wait_input(scen);
    gEltestScore.autoNtimes(skiped_steps);
  
  */
} //end eltest_btn_section_forward_exercise_helper()

function eltest_btn_forward_exercise_helper(scen) 
{
    /*
     * button ">" to access next progress with help
     */
    
    /*
    gDebug.appendLogMode(gDebugExerciseAction, "eltest_btn_forward_exercise_helper() called");
    if(scen.isFinished()) return;    
    eltest_show_result(scen);
    scen.nextProgress();    
    gEltestScore.auto();
    eltest_wait_input(scen);    
  
  */
} //end eltest_btn_forward_exercise_helper()

function eltest_btn_start_exercise_helper(scen) 
{
    /*
     * button "|<" to restart the exercise and reset statistics
     */
    /*
    gDebug.appendLogMode(gDebugExerciseAction, "eltest_btn_start_exercise_helper() called");
    eltest_initialize_excercise_statistics(scen);                              //reset statistics
    scen.beforeFirstStep();
    eltest_show_result(scen);                                                  //to show explanationlist
    eltest_continue_after_right_input(scen);                                   //switch to next step    
    eltest_wait_input(scen);
  */
} //end eltest_btn_start_exercise_helper()

function eltest_btn_end_exercise_helper(scen) 
{
    /*
     * button ">|" to access end of exercise with help
     */
    /*
    if(scen.isFinished()) return;
    var missingSteps = scen.getProgressTotal() - scen.getProgressActual();
    gDebug.appendLogMode(gDebugExerciseAction, "eltest_btn_end_exercise_helper(): missingSteps=" + missingSteps);
    gEltestScore.autoNtimes(missingSteps); 
    scen.LastStep();
    eltest_show_result(scen);
  */
} //end eltest_btn_end_exercise_helper()

function eltest_steplist_onclick(event_caller_)
{
    /*
     * function to set the actualstep with onclick eltest_steplist
     */
    /*
    var scen = gEltestScenario;
    if (scen !== null) 
    {
        var next_step = parseInt(jQuery(event_caller_).data("simulationStep")); //data-simulation-step
        var old_step = scen.getStepActual();
        gDebug.appendLogMode(gDebugSimulationAction,"eltest_steplist_onclick(): iStepActual=" + next_step);
        if (gExecutionMode == gConstExecutionModeSimulation) 
        {
            scen.setStepActual(next_step);   
            eltest_show_result(scen);                                          //refresh list
            if (next_step <= old_step)
            {
                window.location.reload();                                       //reload page because animations skiped in browser
            }
        }
        else //(gExecutionMode == gConstExecutionModeExcercise)
        {            
            if (old_step < next_step)
            {
                var skiped_steps = scen.getProgressActual();
                scen.setStepActual(next_step);                                  
                skiped_steps = scen.getProgressActual() - skiped_steps;
                eltest_wait_input(scen);                                       //refresh list
                gEltestScore.autoNtimes(skiped_steps);
            }
        }
    }    
  */
} //end eltest_steplist_onclick()


function eltest_initialize_excercise_statistics(scen)
{
    if (scen !== null) 
    {
        gEltestScore = new IelmScore(scen.getProgressTotal());                 //initialize with the number of steps
    }
    else
    {
        gEltestScore = new IelmScore(999);                                     //set placeholder
    }
} //end eltest_initialize_excercise_statistics()

function eltest_load_scenario(pathparam) 
{
    gDebug.appendLogMode(gDebugScenarioCreation, "eltest_load_scenario() called. pathparam=" + pathparam);    
    var transportformat = gScenarioTransportFormat;
        
    if (pathparam !== undefined)
    {
        var json = jQuery.ajax(
        {
            url: "Connector",
            type: "POST",
            data: {
                path: pathparam,
                transportformat: transportformat
            }
        }).done(function (remoteObj)
        {
            // result of ajax call in parameter remoteObj            
            gDebug.appendLogMode(gDebugScenarioCreation, "eltest_load_scenario(): remoteObj.responseText=" + remoteObj.responseText);
            gDebug.appendLogMode(gDebugScenarioCreation, "eltest_load_scenario(): remoteObj=" + remoteObj + " JSON.stringify(remoteObj)=" + JSON.stringify(remoteObj));

            gEltestScenario = new EltestScenario();                           // create a JavaScript-object for scenario
            // transform scenario data from ajax result into a JavaScript-object
            gEltestScenario.loadScenarioFromRemoteObject(remoteObj, gScenarioTransportFormat); 
            
            // do evaluation statistics for exercises
            if (gExecutionMode == gConstExecutionModeExcercise)
            {
                gEltestScenario.firstStep();
                eltest_initialize_excercise_statistics(gEltestScenario);
            }
            eltest_show_scenario(gEltestScenario);                            // show the content of the scenario/JavaScript-object on the GUI
        });
    }
}
/* -------------------------------------------------------------------------- */


