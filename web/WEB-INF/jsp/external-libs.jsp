<%-- !!DO_NOT_EDIT!! --%>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>
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
            + "window.console.log('external-libs.jsp:: Context-Parameter: " + contextparam + " not found. Using default value "
            + commonpath + "') }"
            + "</script>");
  }
%>

<!-- jQuery libs -->
<script type="text/javascript" src="<%=web_application%><%=commonpath%>jquery/jquery-1.11.3/jquery.js"></script>

<!-- bootstrap libs -->
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>bootstrap/bootstrap-3.3.5-dist/css/bootstrap.min.css" />
<script type="text/javascript" src="<%=web_application%><%=commonpath%>bootstrap/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>

<!-- jQuery-UI libs -->
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>jquery/jquery-ui/jquery-ui.css" />
<script type="text/javascript" src="<%=web_application%><%=commonpath%>jquery/jquery-ui-1.11.4/jquery-ui.min.js"></script>
