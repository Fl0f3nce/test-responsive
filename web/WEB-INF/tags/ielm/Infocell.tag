<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann, Wss
Date    : 20151206, 2060309 (wss)
--%>

<%@attribute name="id" required="true"  rtexprvalue="true"%>
<%@attribute name="title" required="true" rtexprvalue="true" %>
<%@attribute name="val" required="false"  rtexprvalue="true" %>
<%@attribute name="colnumber" required="false"  rtexprvalue="true" %>

<%-- wss 20160309 migration from desktop to responsive: id added --%>
<div class="_ielm_box_col_${pageScope.colnumber}">
        <h3>${pageScope.title}</h3>
        <p id="${pageScope.id}">${pageScope.val}</p>
</div>

<%--
<li>
    <label for="${pageScope.id}">${pageScope.title}</label>
    <span id="${pageScope.id}">${pageScope.val}</span>
</li>
--%>
