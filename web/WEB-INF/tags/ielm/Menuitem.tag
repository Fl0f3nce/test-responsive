<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann
Date    : 20151206
--%>

<%@attribute name="id"%>
<%@attribute name="name"%>
<%@attribute name="href"%>
<%@attribute name="htmlClass"%>


<li  class="${htmlClass}">  
    <% if (href != null) { %>
    <a id="${id}" href="${href}">${name}</a> 
    <%} else if(name != null) {%>
    <a id="${id}">${name}</a> 
    <%} else {%>
    <jsp:doBody/>
    <%}%>
</li>

<%-- OLD
<li id="${id}" class="${htmlClass}">
    <% if (href != null) { %>
    <a href="${href}">${name}</a>
    <%} else if(name != null) {%>
    ${name}
    <%} else {%>
    <jsp:doBody/>
    <%}%>
</li>
--%>
