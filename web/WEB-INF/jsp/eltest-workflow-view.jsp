<%-- !!DO_NOT_GENERATE!! --%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%-- 
wss, 20160304 
--%>
<div style="position: relative; margin-top:20px" > <!-- margin necessary to keep menubar working! Problems due to overlap in space. -->
  <div id="eltest_init_information">To be set on pageload finalization. If you see this, something is wrong.</div> <%-- wss 20160304 --%>

  <div id="eltest_workflow_descr">In diesem Bereich wird der fachliche Inhalt eines iELMs nach Laden eines Szenarios dargestellt.
  </div>
  <div id="eltest_main_workflow">
  </div>
  <%-- wss 20160309: as a sample a responsive table with to tables, first table overlays secondtable, see [Leh 2016] --%>
  <div><br /></div>
    <jsp:include page="demo-table.jsp" />
    <%-- wss 20160309 responsive end --%>
</div>
