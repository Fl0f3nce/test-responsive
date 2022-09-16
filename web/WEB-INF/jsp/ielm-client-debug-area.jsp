<%-- !!DO_NOT_EDIT!! --%>
<%
  String displayDebug = application.getInitParameter("debug_area_enabled");

  if (displayDebug != null && displayDebug.equals("true"))
  {
    String fontSize = "8pt";
    String fontSizeConfig = application.getInitParameter("debug_area_font_size");
    if (fontSizeConfig != null)
    {
      fontSize = fontSizeConfig;
    }
    String posLeft = "0px";
    String posLeftConfig = application.getInitParameter("debug_area_pos_left");
    if (posLeftConfig != null)
    {
      posLeft = posLeftConfig;
    }
    String posTop = "100px";
    String posTopConfig = application.getInitParameter("debug_area_pos_top");
    if (posTopConfig != null)
    {
      posTop = posTopConfig;
    }
    String height = "500px";
    String heightConfig = application.getInitParameter("debug_area_height");
    if (heightConfig != null)
    {
      height = heightConfig;
    }
    String width = "200px";
    String witdthConfig = application.getInitParameter("debug_area_width");
    if (witdthConfig != null)
    {
      width = witdthConfig;
    }
%>
<div id="_ielm_debug" style="height:<%=height%>; width:<%=width%>; position:absolute; left:<%=posLeft%>; top:<%=posTop%>; z-index:1000; overflow:scroll; font-size:<%=fontSize%>;" >
  <h3 style="font-size:8pt; font-weight: bold;" >Debug Area: <input type="button" value="CLEAR" onclick="onclick_clear();"/></h3>
  <p><span id="_ielm_debug_span"></span></p>
</div>
<script type="text/javascript">
  function onclick_clear()
  {
    var elem = document.getElementById("_ielm_debug_span");
    if (elem != null)
    {
      elem.innerHTML = "";
    }
  }
</script>
<%
  }
%>
