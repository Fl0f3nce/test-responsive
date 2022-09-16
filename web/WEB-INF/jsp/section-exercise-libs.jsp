<%-- !!DO_NOT_EDIT!! --%>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%-- Required common libs (scripts, style, img, ...) --%>
<jsp:include page="/WEB-INF/jsp/eltest-common-libs.jsp" />
<%-- ----------------------------------------------- --%>
<%
  // *** Get context path of web application ***
  String web_application = application.getContextPath();
  // *** Get path of common files from web.xml ***
  String contextparam = "path_of_common_files";
  String commonpath = application.getInitParameter(contextparam);
  // *** Check if path of common files is valid and use default setting if not ***
  if (commonpath == null)
  {
    // *** Default value of path of common files is now set to: "/ielm-common/" ***
    commonpath = "/ielm-common/";
    out.println("<script>"
            + "if (window.console.log != null) {"
            + "window.console.log('section-exercise-libs.jsp:: Context-Parameter: " + contextparam + " not found. Using default value "
            + commonpath + "') }"
            + "</script>");
  }
%>


<!-- component: scenario_selection -->
<script type="text/javascript" src="<%=web_application%><%=commonpath%>ielm-components/scenario-selection/ielm.scenario.selection.js"></script>
<!-- component: menu -->
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>ielm-components/menu/ielm.menu.css" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>ielm-components/menu/exercise-menu-1.css" />
<!-- component: metabox/parameterbox/scorebox -->
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>ielm-components/infobox/ielm.infobox-responsive.css" media="all" />
<script type="text/javascript" src="<%=web_application%><%=commonpath%>ielm-components/infobox/ielm.infobox.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>ielm-components/score/ielm.score.js"></script>
<!-- component: client_debug -->
<script type="text/javascript" src="<%=web_application%><%=commonpath%>ielm-components/client-debug/ielm.client.debug.js"></script>

