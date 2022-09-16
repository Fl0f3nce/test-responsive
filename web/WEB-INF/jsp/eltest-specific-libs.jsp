<%-- !!DO_NOT_GENERATE!! --%>
<%
  // *** Get context path of web application ***
  String web_application = application.getContextPath();
%>
<!-- Global scripts -->
<script type="text/javascript" src="<%=web_application%>/script/eltest/misc-helper.js"></script>
<script type="text/javascript" src="<%=web_application%>/script/eltest/globals.js"></script>

<!-- MVC-Pattern: Model scripts -->
<script type="text/javascript" src="<%=web_application%>/script/eltest/model/impl/eltest.scenario.js"></script>
