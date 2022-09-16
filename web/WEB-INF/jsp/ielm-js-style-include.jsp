<%-- !!DO_NOT_EDIT!! --%>
<%--
    Document   : ielm-js-style-include
    Created on : 07.01.2016, 18:40:41
    Author     : Lehmann
    Modified   : AG, 01.12.2016

    leh 07.01.2016 - following JSP, calls the web.xml-config-params and fills JS-variables
    AG 01.12.2016 - Moved inclusion of ielp-style.js to section-libs.jsp
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
  String meta_box_over_1280 = application.getInitParameter("meta_box_over_1280");
  String meta_box_under_1280 = application.getInitParameter("meta_box_under_1280");

  String param_box_over_1280 = application.getInitParameter("param_box_over_1280");
  String param_box_under_1280 = application.getInitParameter("param_box_under_1280");

  String menus_config = application.getInitParameter("menus_config");

  String menu_default_list = application.getInitParameter("menu_default_list");
%>

<script type="text/javascript">
  var meta_box_over_1280 = parseInt("<%=meta_box_over_1280%>");
  var meta_box_under_1280 = parseInt("<%=meta_box_under_1280%>");

  var param_box_over_1280 = parseInt("<%=param_box_over_1280%>");
  var param_box_under_1280 = parseInt("<%=param_box_under_1280%>");

  var menus_config = parseInt("<%=menus_config%>");

  var menu_default_list = parseInt("<%=menu_default_list%>");
</script>
