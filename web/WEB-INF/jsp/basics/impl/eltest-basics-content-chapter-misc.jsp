<%-- !!DO_NOT_GENERATE!! --%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--
    Document   : eltest-basics-content-chapter-misc.jsp
--%>

<%-- this should be only a fragment of a web page --%>
<div>
  Weiter Punkte, die in ELdemo gezeigt werden sind:
  <ul>
    <li>
      Ordnerstruktur und Namensstruktur der finalen Web-Anwendung eines iELMs.
    </li>
    <li>
      Ordnerstruktur und Namensstruktur eines NetBeans-Projekts eines iELMs.
    </li>
    <li>
      Konfigurationen in der Datei web.xml.
    </li>
    <li>
      Einhaltung von Namenskonventionen.
    </li>
    <li>
      Typische globale JavaScript-Variablen eines iELMs in globals.js.
    </li>
    <li>
      Geb&uuml;ndeltes Einbinden von CSS- und JavaScript-Dateien mithilfe von JSP-Mechanismen.
    </li>
    <li>
      Umsetzung des MVC-Musters auf der Clientseite in JavaScript.
    </li>

    <li>
      Umsetzung einer Schrittnavigation getrennt vom Footer und Anbindung der Buttons an Ereignisbehandlungsroutinen.
      Die Buttons werden nach Laden eines Szenarios aktiviert. In der Ereignisbehandlungsroutine wird nur ein alert() aufgerufen.
    </li>

    <li>
      Verwendung von jQuery und insbesondere von jQuery(document).ready(function() { ...}) zum Initialisieren beim Laden einer HTML-Seite (Verbesserung gegen&uuml;ber der Verwendung des Ereignisses onload).
    </li>

  </ul>
</div>
<p>F&uuml;r Details wird verwiesen auf den Qellcode von ELdemo und [Du+2015].</p>
<p><b>Hinweis</b>: Vermeide $() als Kurzform für jQuery(). Nutze stets direkt jQuery() oder Kapselung von $, siehe eldemo-pageload-finalization.jsp f&uuml;r ein Beispiel.
  Grund: Vermeindung von Namenskollisionen in JavaScript bei der Verwendung verschiedener JavaScript-Bibliotheken.<br />
  Beachte, dass in Tag-Files zu Custom-Tags das Zeichen $ eine ganz andere Bedeutung hat. In Tag-Files geh&ouml;rt es zur Syntax der JSP-EL, kann nicht ersetzt werden und hat nichts mit JavaScript zu tun.</p>
