<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann
Date    : 20151206
--%>

<%@attribute name="id" required="true" %>
<%@attribute name="title" required="true" %>

<li>
    <a>${pageScope.title}</a>
    <ul id="${pageScope.id}">
        <jsp:doBody/>
    </ul>
</li>


<%-- OLD
<%@attribute name="id" required="true" %>
<%@attribute name="title" required="true" %>

<li>
    ${pageScope.title}
    <ul id="${pageScope.id}">
        <jsp:doBody/>
    </ul>
</li>
--%>
