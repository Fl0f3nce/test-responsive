<%-- !!DO_NOT_EDIT!! --%>
<%-- Required metadata for JavaScript Module Navigation API --%>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%-- Required imports for JavaScript Module Navigation API --%>
<%@ include file="/WEB-INF/jsp/eltest-common-include.jsp" %>
<%-- ----------------------------------------------------- --%>
<%
  // *** Get context path of web application ***
  String web_application = application.getContextPath();
  // *** Get module content XML file ***
  String module_content_xml_file = FileTool.getPath(web_application, true) + ConfigurationDataManager.getManagedXMLDataFilename();
  // *** Get portal context path ***
  String portal_context_path = ConfigurationDataManager.getManagedPortalContextPath();
  // *** Get module navigation context path ***
  String module_navigation_context_path = ConfigurationDataManager.getManagedModuleNavigationContextPath();
  // *** Get portal navigation context path ***
  String portal_navigation_context_path = ConfigurationDataManager.getManagedPortalNavigationContextPath();
  // *** Get show side menu separators setting ***
  boolean show_side_menu_separators = ConfigurationDataManager.isManagedShowSideMenuSeparators();
%>
<meta name="module_content_xml_file" content="<%=module_content_xml_file%>" />
<meta name="portal_context_path" content="<%=portal_context_path%>" />
<meta name="module_navigation_context_path" content="<%=module_navigation_context_path%>" />
<meta name="portal_navigation_context_path" content="<%=portal_navigation_context_path%>" />
<meta name="show_side_menu_separators" content="<%=show_side_menu_separators%>" />
