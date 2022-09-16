<%-- !!DO_NOT_EDIT!! --%>
<%--
Modified : Alexander Lehmann
Date    : 20151206
--%>

<%@ taglib prefix="ielm" tagdir="/WEB-INF/tags/ielm"%>
<%@attribute name="author" rtexprvalue="true" %> <%-- wss 20151127 --%>
<%@attribute name="description" rtexprvalue="true" %> <%-- wss 20151127 --%>
<%@attribute name="task" rtexprvalue="true" %> <%-- wss 20151127 --%>
<ielm:Infobox title="Metainfo" id="_ielm_common_infobox_meta">
    <ielm:Infocell title="Szenario"     id="_ielm_common_infobox_meta_taskname" val="${task}" colnumber="4" />
    <ielm:Infocell title="Beschreibung" id="_ielm_common_infobox_meta_description" val="${description}" colnumber="4" /> 
    <ielm:Infocell title="Autor"        id="_ielm_common_infobox_meta_author" val="${author}" colnumber="4" />
    <jsp:doBody/>
</ielm:Infobox>

<%-- OLD
<%@attribute name="description" rtexprvalue="true" %>
<%@attribute name="task" rtexprvalue="true" %>
<ielm:Infobox title="Meta-Informationen" id="_ielm_common_infobox_meta">
    <ielm:Infocell title="Aufgabe" id="_ielm_common_infobox_meta_taskname" val="${task}" />
    <ielm:Infocell title="Beschreibung" id="_ielm_common_infobox_meta_description" val="${description}" />
    <ielm:Infocell title="Autor" id="_ielm_common_infobox_meta_author" val="${author}"/>
    <jsp:doBody/>
</ielm:Infobox>
--%>
