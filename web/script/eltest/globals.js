/* !!DO_NOT_EDIT!! */
/* This file contains useful constants and variables.
 * Most of the defined constants and variables are not used in the demomodule.
 * wss, 20160304.
 */
/* variables must be declared before used */
"use strict";
/***************** global constants ******************************************/
var gConstExecutionModeSimulation = 1;                                          //to identify page
var gConstExecutionModeExcercise = 2;                                           //to identify page
var gConstMaxValueSimulationSpeed = 10000;                                      // (set with web.xml)
var gConstMinValueSimulationSpeed = 1000;                                       // (set with web.xml)
var gConstScenarioTransportFormatXml = "application/xml";
var gConstScenarioTransportFormatJson = "application/json";
var gConstScenarioTransportFormatRaw = "text/plain";

var gConstScenarioSimulationKey = "eltest-scenario-simulation";                //sessionkey for browser
var gConstScenarioExerciseKey = "eltest-scenario-exercise";                    //sessionkey for browser
var gConstScenarioExerciseScoreKey = "eltest-scenario-exercise-score";         //sessionkey for browser
var gConstScenarioSpeedKey = "eltest-scenario-speed";                          //sessionkey for browser
var gConstInfoboxSimulationCB0Key = "eltest-infobox-simulation-cb-0";          //sessionkey for browser
var gConstInfoboxSimulationCB1Key = "eltest-infobox-simulation-cb-1";          //sessionkey for browser
var gConstInfoboxExerciseCB0Key = "eltest-infobox-exercise-cb-0";              //sessionkey for browser
var gConstInfoboxExerciseCB1Key = "eltest-infobox-exercise-cb-1";              //sessionkey for browser
var gConstInfoboxExerciseCB2Key = "eltest-infobox-exercise-cb-2";              //sessionkey for browser

var gConstXmlDeclaration = '<?xml version="1.0" encoding="UTF-8"?>';                                            //used for XML export
var gConstXmlNamespaceUriIelm = "http://www.hs-coburg.de/e-learning/ielm-scenarios";                            //used for XML export
var gConstXmlNamespaceUriEltest = "http://www.hs-coburg.de/e-learning/eltest";                                //used for XML export
var gConstXmlSchemaLocationIelm = "http://www.hs-coburg.de/e-learning/ielm-scenarios ../xsd/ielm-scenario.xsd"; //used for XML export
var gConstXmlSchemaLocationEltest = "http://www.hs-coburg.de/e-learning/eltest ../xsd/eltest-content.xsd";   //used for XML export
var gConstXmlNamespaceXsi = "http://www.w3.org/2001/XMLSchema-instance";                                        //used for XML export

/***************** global variables ******************************************/
var gEltestScenario;                                                           //used for simulation and exercise. 
/* Remark: there is always only one object in JavaScript of loaded page, 
 * but there are two object in sessionStorage, on for simulation and one for exercise.
 */
var gScenarioOne;                                                               //name of the first default scenario (set with web.xml)
var gScenarioTwo;                                                               //name of the second default scenario (set with web.xml)
var gScenarioXmlExport = false;                                                 //option for scenario xml export (set with web.xml)
var gExecutionMode = gConstExecutionModeSimulation;
var gPlayStatus = false;                                                        //for play or pause
var gScenarioTransportFormat;                                                   //Mime Type (setted with web.xml)
var gSimulationSpeed = 2000;                                                    //value in milliseconds, used for animationtime and nextstep (setted with web.xml)
var gEltestScore = null;                                                       //hold one Scoreclass
var gLastError = "Ung\u00fcltige Eingabe";                                      //used for status on scenario creation
/* -------------------------------------------------------------------------- */
/* variables needed for debug component */
var gNameDebugWnd = "eltest_debug_wnd";
var gUrlDebugWnd = "ielm-client-debug-wnd.jsp";
var gDebugScenarioCreation = false;                                             //for use appendLogMode (set with web.xml)
var gDebugSimulationAction = false;                                             //for use appendLogMode (set with web.xml)
var gDebugExerciseAction = false;                                               //for use appendLogMode (set with web.xml)
var gDebug = new IelmClientDebug(gNameDebugWnd, gUrlDebugWnd);                  //function in ielm-common
/* -------------------------------------------------------------------------- */

