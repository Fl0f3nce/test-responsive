<%-- !!DO_NOT_EDIT!! --%>
<%--
Creator : Dieter Wissmann
Date    : 20151209
--%>
<%@attribute name="ielm" required="true" %>
<%@attribute name="name" required="true" %>
<%@attribute name="author" required="true" %>
<%@attribute name="version" required="true" %>
<%@attribute name="date" required="true" %>
<%@attribute name="lastmodifiedversion" required="true" %>
<%@attribute name="lastmodifieddate" required="true" %>

<p>Informationen zum interaktiven E-Learning Modul (iELM):</p>
<table>
  <tr>
    <td>iELM</td>
    <td>&nbsp;:&nbsp;</td>
    <td>${pageScope.ielm}</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>&nbsp;:&nbsp;</td>
    <td>${pageScope.name}</td>
  </tr>
  <tr>
    <td>Ersteller</td>
    <td>&nbsp;:&nbsp;</td>
    <td>${pageScope.author}</td>
  </tr>
  <tr>
    <td>Version</td>
     <td>&nbsp;:&nbsp;</td>
   <td>${pageScope.version} (${pageScope.date})</td>
  </tr>
  <tr>
    <td>Letzte &Auml;nderung</td>
    <td>&nbsp;:&nbsp;</td>
    <td>${pageScope.lastmodifiedversion} (${pageScope.lastmodifieddate})</td>
  </tr>

</table>
