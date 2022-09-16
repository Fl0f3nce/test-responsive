<%-- !!DO_NOT_GENERATE!! --%>
<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="ielm" tagdir="/WEB-INF/tags/ielm" %>

<%-- component: menu --%>
<ielm:Menubar>
  <ielm:Menu id="exercise-menu-1_scenario" title="Szenario">
    <ielm:Menuitem id="exercise-menu-1_scenario_open" name="Szenario laden"/>
    <ielm:Menuitem id="exercise-menu-1_scenario_one" name="Szenario 1" />
    <ielm:Menuitem id="exercise-menu-1_scenario_two" name="Szenario 2" />
  </ielm:Menu>

  <ielm:Menu id="exercise-menu-1_parameter" title="Parameter">
    <ielm:Menuitem id="exercise-menu-1_parameter_one" name="Parameter 1" />
    <ielm:Menuitem id="exercise-menu-1_parameter_two" name="Parameter 2" />
    <ielm:Menuitem id="exercise-menu-1_parameter_three" name="Parameter 3" />
    <ielm:Menuitem>
      <select id="exercise-menu-1_parameter_three_selection">
        <option value="0" selected>Bitte w&auml;hlen...</option>
        <option value="parameter3_1">Parameter 3_1</option>
        <option value="parameter3_2">Parameter 3_2</option>
        <option value="parameter3_3">Parameter 3_3</option>
      </select>
    </ielm:Menuitem>
  </ielm:Menu>
  <%--
  -----------------------------------------------------------------------------
  OptionMenu uses fixed responsive functions (/ielm-common/style/ielp-style.js)
  and thus Module Component Instances can not be used here without
  reprogramming the design logic...
  -----------------------------------------------------------------------------
  --%>
  <ielm:Menu id="_ielm_common_menu_options" title="Optionen">
    <ielm:Menuitem id="ielm_component_menu_parameter_velocity" name="Geschwindigkeit" />
    <ielm:Menuitem>
      <input id="ielm_component_menu_velocity" class="menu_velocity" placeholder="in ms" type="number"/>
    </ielm:Menuitem>
    <ielm:OptionMenuItem id="_ielm_meta_info_option" name="Metainformation" />
    <ielm:OptionMenuItem id="_ielm_parameter_option" name="Parameter" />
    <ielm:OptionMenuItem id="_ielm_results_option" name="Auswertung" />
  </ielm:Menu>
</ielm:Menubar>
