<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann, Wss
Date    : 20151207, 20160309
--%>

<%@attribute name="score" required="false" type="ielm.common.Score" rtexprvalue="true"%> 

<div id="_ielm_results">
  <h2>Auswertung</h2>
  <div id="_ielm_results_content">
    <div class="_ielm_box_col_3">
      <p><span class="label label-info">Teilaufgabe: 
          <span id="_ielm_common_infobox_score_totalSubtasks">${pageScope.score.totalSubtasks}</span></span></p>
      <p><span class="label label-info">Bearbeitete Teilaufgaben: 
          <span id="_ielm_common_infobox_score_doneSubtasks">${pageScope.score.doneSubtasks}</span></span></p>
    </div>  
    <div class="_ielm_box_col_3">
      <p><span class="label label-info">Get&auml;tigte Eingaben: 
          <span id="_ielm_common_infobox_score_doneInputs">${pageScope.score.doneInputs}</span></span></p>
      <p><span class="label label-info">Automatische Eingaben: 
          <span id="_ielm_common_infobox_score_autoInputs">${pageScope.score.autoInputs}</span></span></p>
    </div>
    <div class="_ielm_box_col_3">
      <p><span class="label label-info">Richtige Eingaben: 
          <span id="_ielm_common_infobox_score_rightInputs">${pageScope.score.rightInputs}</span></span></p>
      <p><span class="label label-info">Falsche Eingaben: 
          <span id="_ielm_common_infobox_score_wrongInputs">${pageScope.score.wrongInputs}</span></span></p>
    </div>
    <div class="_ielm_box_col_3">
      <p><span class="label label-info">Erfolgsquotient: 
          <span id="_ielm_common_infobox_score_successRate">${pageScope.score.successRate}</span></span></p>
      <p><span class="label label-info">Fehlerquotient: 
          <span id="_ielm_common_infobox_score_errorRate">${pageScope.score.errorRate}</span></span></p>
    </div>
  </div>
</div>


<%-- wss 20160309: Structure Lehmann was like:
   <div class="_ielm_box_col_3">
       <p><span class="label label-success" id="_ielm_common_infobox_score_successRate">Erfolgsquotient: <span id="success-rate">${pageScope.score.successRate} %</span></span></p>
       <p><span class="label label-danger" id="_ielm_common_infobox_score_errorRate">Fehlerquotient: <span id="error-rate">${pageScope.score.errorRate} %</span></span></p>
   </div>
--%>

<%-- OLD
<%@taglib prefix="ielm" tagdir="/WEB-INF/tags/ielm"%>
<%@attribute name="score" required="false" type="ielm.common.Score" rtexprvalue="true"%> 
<ielm:Infobox title="Auswertung" id="_ielm_common_infobox_score">
  <ielm:Infowrapper>
    <ielm:Infocell title="Teilaufgabe" id="_ielm_common_infobox_score_totalSubtasks" val="${pageScope.score.totalSubtasks}"/>
    <ielm:Infocell title="Bearbeitete Teilaufgaben" id="_ielm_common_infobox_score_doneSubtasks" val="${pageScope.score.doneSubtasks}"/>
</ielm:Infowrapper>

  <ielm:Infowrapper>
    <ielm:Infocell title="Get�tigte Eingaben" id="_ielm_common_infobox_score_doneInputs" val="${pageScope.score.doneInputs}"/>
    <ielm:Infocell title="Automatische Eingaben" id="_ielm_common_infobox_score_autoInputs" val="${pageScope.score.autoInputs}"/>
  </ielm:Infowrapper>

  <ielm:Infowrapper>
    <ielm:Infocell title="Richtige Eingaben" id="_ielm_common_infobox_score_rightInputs" val="${pageScope.score.rightInputs}"/>
    <ielm:Infocell title="Falsche Eingaben" id="_ielm_common_infobox_score_wrongInputs" val="${pageScope.score.wrongInputs}"/>
  </ielm:Infowrapper>
  <ielm:Infowrapper>
    <ielm:Infocell title="Erfolgsquotient" id="_ielm_common_infobox_score_successRate" val="${pageScope.score.successRate}%"/>
    <ielm:Infocell title="Fehlerquotient" id="_ielm_common_infobox_score_errorRate" val="${pageScope.score.errorRate}%"/>
  </ielm:Infowrapper>
  <jsp:doBody/>
</ielm:Infobox>
--%>
