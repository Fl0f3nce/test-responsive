/* !!DO_NOT_EDIT!! */
/* -------------------------------------------------------------------------- */
function eltest_set_speed(new_speed_)
{
  /* 
   * function to set the simulationspeed 
   * @params speed in ms (gConstMinValueSimulationSpeed >= speed <= gConstMaxValueSimulationSpeed) 
   * */
  var new_speed = parseInt(new_speed_);
  if (isNaN(new_speed))
    return; // no change

  gSimulationSpeed = new_speed;

  if (gSimulationSpeed < gConstMinValueSimulationSpeed)
  {
    gSimulationSpeed = gConstMinValueSimulationSpeed;
  } else
  {
    if (gSimulationSpeed > gConstMaxValueSimulationSpeed)
      gSimulationSpeed = gConstMaxValueSimulationSpeed;
  }
  jQuery("#ielm_component_menu_velocity").attr("placeholder", gSimulationSpeed);                  //display current simulationspeed    
  gDebug.appendLogMode(gDebugSimulationAction, "eltest_set_speed(): new simulationspeed is " + gSimulationSpeed);
} //end eltest_set_speed()

/* -------------------------------------------------------------------------- */
function eltest_get_speed()
{
  /*
   * function to get the value of global variable gSimulationSpeed
   */
  return gSimulationSpeed;
} //end eltest_get_speed()
/* -------------------------------------------------------------------------- */
function xml_helper_get_child_elements_by_localname(elem, localname_child) {

  // should be replaced by DOM 3-method:
  // getElementsByTagNameNS(gConstNamespaceUriElmako, "elmako_content");
  // Problem: not clear if IE 11 supports getElementsByTagNameNS(). FF, Chrome do support it. WSS 20151011.
  // gDebug.appendLog("elmako_get_child_elements_by_localname(): elem=" + elem + " elemname=" + elem.nodeName+" localname_child="+localname_child);

  var res = new Array();
  var i, count = 0;
  var childelems = elem.childNodes;
  var len = childelems.length;
  for (i = 0; i < len; i++) {
    var child = childelems[i];
    if (child.nodeType == Node.ELEMENT_NODE) {  // only  nodes of type element are regarded
      if (child.localName == localname_child) {  // remark: child.nodeName != child.localName
        res[count] = child;
        count++;
      }
    }
  }
  return res;
} // xml_helper_get_child_elements_by_localname()
