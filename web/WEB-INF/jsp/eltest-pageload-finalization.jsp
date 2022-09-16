<%-- !!DO_NOT_EDIT!! --%>
<%--
  Generated document: eltest-pageload-finalization.jsp
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
  String sceneariotransportformat = application.getInitParameter("scenario_transport_format");
  String debugOn = application.getInitParameter("debug_enabled");
  if (debugOn == null || !debugOn.equals("true"))
  {
    debugOn = "false";
  }
  String debugAreaOn = application.getInitParameter("debug_area_enabled");
  if (debugAreaOn == null || !debugAreaOn.equals("true"))
  {
    debugAreaOn = "false";
  }
  String debugConsoleOn = application.getInitParameter("debug_console_enabled");
  if (debugConsoleOn == null || !debugConsoleOn.equals("false"))
  {
    debugConsoleOn = "true";
  }
  String debugWindowOn = application.getInitParameter("debug_window_enabled");
  if (debugWindowOn == null || !debugWindowOn.equals("true"))
  {
    debugWindowOn = "false";
  }
  String scenarioOnePath = application.getInitParameter("scenario_one");
  if (scenarioOnePath == null)
  {
    scenarioOnePath = "scenario-1.xml";
  }
  String scenarioTwoPath = application.getInitParameter("scenario_two");
  if (scenarioTwoPath == null)
  {
    scenarioTwoPath = "scenario-2.xml";
  }%>
<script>/* variables must be declared before used */
  "use strict";
</script>
<script>
  gDebug.debugOn =<%=debugOn%>;
  gDebug.debugAreaOn =<%=debugAreaOn%>;
  gDebug.debugConsoleOn =<%=debugConsoleOn%>;
  gDebug.debugWindowOn =<%=debugWindowOn%>;
  gScenarioTransportFormat = "<%=sceneariotransportformat%>";
  gDebug.appendLog("gScenarioTransportFormat=" + gScenarioTransportFormat);
  gScenarioOne = "<%=scenarioOnePath%>";
  gScenarioTwo = "<%=scenarioTwoPath%>";
</script>
<script>
  // wss 20150803.
  /* may cause name conflicts with other libs which use also $ as a name
   $("#_ielm_common_infobox_meta").hide(); 
   $("#_ielm_common_infobox_parameter").hide(); 
   $("#_ielm_common_infobox_score").hide(); 
   */
  /* function call to an anonym function which gets jQuery as Parameter
   * $ is the parametername and not the abbreviation of a global function
   * Inside the body of the function there is a private scope for names.
   * 
   * Compare bootstrap.js which uses the same approach to avoid name clashes.
   */
  (function ($) {
    // $("#_ielm_common_infobox_meta").hide();  // only hides the infobox, reserves still space
    // $("#_ielm_common_infobox_parameter").hide();
    //  $("#_ielm_common_infobox_score").hide();

    $(document).ready(function () {
      /* wss 20150914
       * The following commands must not be outside $(document).ready(function ()
       * due to race conditions.
       * 
       * hide the infobox and remove check from menu options menu item meta etc.
       * 
       */
      $("#_ielm_common_infobox_meta").infobox({display: "false"});
      $("#_ielm_common_infobox_parameter").infobox({display: "false"});
      $("#_ielm_common_infobox_score").infobox({display: "false"});
      $("#_ielm_results").infobox({display: "false"});
      $("#eltest_table_wrapper").hide();  // dummy table

      /* wss 20151002
       * The X-symbol was not visible.
       *  due to a conflict between jquery and bootstrap
       * Tip from internet:
       *  due to a conflict between jquery and bootstrap. Add the lines below
       * But does not work. 
       * 
       * Is image missing? Which?
       * ui-icons_888888_256x240.png is present.
       * 
       * the solution that works was to change the order of inclusion
       * of jquery-ui and bootstrap, see elmako-pageload-finaliziation.jsp
       * 
       */

    });  // $(document).ready()

  })(jQuery);
</script>
