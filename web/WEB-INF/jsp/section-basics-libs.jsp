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
            + "window.console.log('section-basics-libs.jsp:: Context-Parameter: " + contextparam + " not found. Using default value "
            + commonpath + "') }"
            + "</script>");
  }
%>


<!-- component: inside_content_navigation -->
<script type="text/javascript" src="<%=web_application%><%=commonpath%>ielm-components/inside-content-navigation/ielm.inside.content.navigation.js"></script>

