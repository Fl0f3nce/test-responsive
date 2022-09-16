<%-- !!DO_NOT_EDIT!! --%>
<%-- Required common libs (scripts, style, img, ...) --%>
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
            + "window.console.log('eltest-common-libs.jsp:: Context-Parameter: " + contextparam + " not found. Using default value "
            + commonpath + "') }"
            + "</script>");
  }
%>

<link href="<%=web_application%><%=commonpath%>images/favicon.ico" rel="icon" type="image/x-icon" />

<!-- JavaScript Module Navigation API (Responsive) -->
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-helper.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-breadcrumb.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-footer.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-main-menu.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-menu-entries.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/module-navigation-api/module-navigation-side-menu.js"></script>
<script type="text/javascript" src="<%=web_application%><%=commonpath%>script/responsive/ielp-navigation.js"></script>

<!-- iELP - Cascading Style Sheets for design: Responsive -->
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-format.css" media="all and (min-width: 1281px)" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-format1280.css" media="all and (max-width: 1280px) and (min-width: 601px)" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-menu.css" media="all and (min-width: 1281px)" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-menu1280.css" media="all and (max-width: 1280px) and (min-width: 601px)" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-format600.css" media="all and (max-width: 600px)" />
<link rel="stylesheet" type="text/css" href="<%=web_application%><%=commonpath%>style/responsive/ielp-menu600.css" media="all and (max-width: 600px)" />
<!-- Read web.xml-config-params and fill JS-variables -->
<jsp:include page="/WEB-INF/jsp/ielm-js-style-include.jsp" />
<script type="text/javascript" src="<%=web_application%><%=commonpath%>style/responsive/ielp-style.js"></script>
