<%-- !!DO_NOT_EDIT!! --%>
<%
  String modeStr = request.getParameter("ielm_excecution_mode");
  if (modeStr == null)
  {
    modeStr = "simulation";
  }
%>

<div class ="_ielm_step_navigation">
  <div class ="btn-group" >
    <button type="button" id="exercise-step_navigation-1_goto_start" class="btn btn-default ielm_step_nav" title="Zum Anfang" disabled="disabled">I&lt;</button>

    <% if (modeStr.equals("simulation"))
      {
    %>

    <button type="button" id="exercise-step_navigation-1_go_macro_step_back" class="btn btn-default ielm_step_nav" title="Makroschritt zur&uuml;ck" disabled="disabled">&lt;&lt;</button>
    <button type="button" id="exercise-step_navigation-1_go_micro_step_back" class="btn btn-default ielm_step_nav" title="Mikroschritt zur&uuml;ck" disabled="disabled">&lt;</button>

    <%
      }
    %>
  </div>

  <div class ="btn-group">
    <button type="button" id="exercise-step_navigation-1_go_micro_step_forward" class="_ielm_step_navigation_margin_left btn btn-default ielm_step_nav" title="Mikroschritt vorw&auml;rts" disabled="disabled">&gt;</button>
    <button type="button" id="exercise-step_navigation-1_go_macro_step_forward" class="btn btn-default ielm_step_nav" title="Makroschritt vorw&auml;rts" disabled="disabled">&gt;&gt;</button>
    <button type="button" id="exercise-step_navigation-1_goto_end" class="_ielm_step_navigation_margin_right btn btn-default ielm_step_nav" title="Zum Ende" disabled="disabled">&gt;I</button>
  </div>

  <div class ="btn-group">

    <% if (modeStr.equals("simulation"))
      {
    %>
    <button type="button" id="exercise-step_navigation-1_play" class="ielm_visibility_visible  btn btn-default ielm_step_nav" title="Play" disabled="disabled">&#9654;</button> <%-- see [Media 2016] --%>
    <button type="button" id="exercise-step_navigation-1_pause" class="ielm_visibility_hidden  btn btn-default ielm_step_nav" title="Pause" disabled="disabled">II</button>
    <%
    }
    else
    {
    %>
    <button type="button" id="exercise-step_navigation-1_check_answer" class="_ielm_step_navigation_margin_right  btn btn-default ielm_step_nav" title="Pr&uuml;fe Eingabe" disabled="disabled">OK?</button>
    <%
      }
    %>
    <input type="number" id="exercise-step_navigation-1_progress_actual" class="btn btn-default ielm_step_nav" min="0" placeholder="Schrittnummer">
    <input type="text" id="exercise-step_navigation-1_progress_total" class="btn btn-default ielm_step_nav" title="Gesamtanzahl Schritte" disabled="disabled" placeholder="Anz. Schritte">

    <% if (modeStr.equals("exercise"))
      {
    %>

    <button type="button" id="exercise-step_navigation-1_success_rate" class="btn btn-default ielm_step_nav" title="Erfolgsquotient" disabled="disabled">E %</button>
    <button type="button" id="exercise-step_navigation-1_failure_rate" class="btn btn-default ielm_step_nav" title="Fehlerquotient" disabled="disabled">F %</button>

    <%
      }
    %>
  </div>
</div>

