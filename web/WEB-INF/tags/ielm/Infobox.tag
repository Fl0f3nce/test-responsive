<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann
Date    : 20151206
--%>

<%@attribute name="title" required="true" %>
<%@attribute name="id" required="false" %>

<div class="_ielm_common_infobox" id="${pageScope.id}">
    <span class="glyphicon glyphicon-remove _ielm_close_info_box" id="${pageScope.id}-close"></span>
    <h2>${pageScope.title}</h2>
    <div class="_ielm_info_box_content">
        <jsp:doBody/>
    </div>
</div>

    <%-- OLD
<fieldset class="_ielm_common_infobox" id="${pageScope.id}">
    <legend>${pageScope.title}</legend>
    <ul>
        <jsp:doBody/>
    </ul>               
</fieldset>
    --%>
