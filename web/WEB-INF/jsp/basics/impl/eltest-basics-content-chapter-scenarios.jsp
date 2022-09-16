<%-- !!DO_NOT_GENERATE!! --%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%--
    Document   : eltest-basics-content-chapter-scenarios.jsp
--%>

<%-- this should be only a fragment of a web page --%>
<div>
  Szenarien sind die Datensätze eines iELMs. Ohne ein Szenario kann ein iELM keine Simulation und keine Aufgabe durchf&uuml;hren.
  Die Szenarios sind also essentiell f&uuml;r das Funktionieren eines iELMs.<br />
  Die Szenarios werden nur auf dem Server und zwar als XML-Dateien abgelegt.
  Eine Szenario-XML-Dateien wird auf dem Server (Controller-Klasse) gelesen und in Java-Objekte umgewandelt.
  Die Darstellung des Szenarios als Java-Objekt wird dann serialisiert und zum Client gesendet.
  Dort wird die serialisierte Form in ein clientseitiges JavaScript-Objekt gewandelt, mit dem auf der Clientseite gearbeitet wird.
  Im Einzelnen gibt es folgende Aspekte bzgl. Szenarien:
  <ul>
    <li>
      XML-Dateien f&uuml;r Szenarien.
    </li>
    <li>
      XML-Schema-Datei f&uuml;r den Inhalt eines Szenarios.
    </li>
    <li>
      Java-Dateien zum Umwandeln von XML-Dokumenten in Java-Objekte.
    </li>
    <li>
      Einsatz des Framwworks JAXB zum Erzeugen von Java-Dateien zum Umwandeln von XML-Dokumenten in Java-Objekte.
    </li>
    <li>
      Auswahl eines Szenarios durch den Lernenden und Laden vom Server zum Client (siehe Komponente Szenarionauswahl).
    </li>

  </ul>
</div>
<p>Ein Programmieranleitung zur Verwendung der Szenarien befindet sich in [Du+2015].
  Ein Linux-Shellskript zur Verwendung von JAXB ist im NetBeans-Projekt von ELdemo enthalten.</p>
