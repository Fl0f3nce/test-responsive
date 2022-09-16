/* !!DO_NOT_GENERATE!! */
"use strict";

/* -------------------------------------------------------------------------- */
/*globale variablen: see globals.js */
/* -------------------------------------------------------------------------- */
/* class definition */
/* -------------------------------------------------------------------------- */
function EltestScenario() {

// private variables
  /* work around to access public instance variables or functions in private methods 
   * but do not use iThis for private variables or private functions.
   * Remark: the semantic of this in JS is not the same as in Java!! */
  var iThis = this;
  // variables related to the ielm-scenario.xsd
  var iName = "";
  var iDescription;
  var iAuthor;
  var iDate;
  var iCategory = "undefined";
  // private variables related to the eltest-cotent.xsd
  var iSpecificDesc = "";
  // further variables 
  var iSpecificDesc = "undefined";
  var iProgressActual = 0;                                                    //actual process (ongoing number over all detailsteps)
  var iProgressTotal = 0;                                                     //totalnumber of processes
  var iStepActual = 0;                                                        //actual simulationstep for eltest_stepbox
  var iStepTotal = 0;                                                         //totalnumber of simulationsteps

  /* -------------------------------------------------------------------------- */
  // getter and setter
  this.getName = function () {
    return iName;
  }
  this.getAuthor = function () {
    return iAuthor;
  }
  this.getDescription = function () {
    return iDescription;
  }
  this.getDate = function () {
    return iDate;
  }

  this.getCategory = function () {
    return iCategory;
  }

  this.getSpecificDesc = function () {
    return iSpecificDesc;
  }

  this.getProgressActual = function ()
  {
    return iProgressActual;
  };

  this.getProgressTotal = function ()
  {
    return iProgressTotal - 1;
  };

  this.getStepTotal = function ()
  {
    return iStepTotal;
  };

  this.getStepActual = function ()
  {
    return iStepActual;
  };


  /* -------------------------------------------------------------------------- */
  /* ---------------------------------------------------------------------- */
  this.beforeFirstStep = function ()
  {
    iThis.setProgressActual(0);
  };

  /* ---------------------------------------------------------------------- */
  this.firstStep = function ()
  {
    if (iThis.getProgressTotal() > 0)
    {
      iThis.setProgressActual(1);
    }
    else
    {
      iThis.beforeFirstStep();
    }
  };

  this.LastStep = function ()
  {
    iThis.setProgressActual(iThis.getProgressTotal());
  };

    this.setProgressActual = function(progress_)
    {
        if (progress_ >= 0 && progress_ <= iThis.getProgressTotal())
        {
            iProgressActual = progress_;
            // add ielm-specific logic, e. g. elbuddy:
            // iStepActual = parseInt(iThis.getCurrentDetailStep().getParentStep().getStepCreateNumber()); 
            return true;
        }
        else
        {
            return false;
        }    
    }; 

  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  this.loadScenario = function (name, filename, pathname, action, transportformat) {
    //   gDebug.appendLog("loadScenario called 0");
    var remoteobj = getScenarioObjectFromBackend(filename, pathname, action, transportformat);
    iThis.loadScenarioFromRemoteObject(remoteobj, transportformat);
  }
  /* -------------------------------------------------------------------------- */
  this.loadScenarioFromRemoteObject = function (remoteobj, transportformat) {

    if (remoteobj != null) {
      // gDebug.appendLog("loadScenarioFromRemoteObject(): if-case called");      
      if (transportformat == gConstScenarioTransportFormatJson) {
        readBasisDataFromJSON(remoteobj);
      }
      if (transportformat == gConstScenarioTransportFormatXml) {
        readBasisDataFromXMLDom(remoteobj);
      }
      if (transportformat == gConstScenarioTransportFormatRaw) {
        var parser = new DOMParser();
        remoteobj = parser.parseFromString(remoteobj, "text/xml");
        readBasisDataFromXMLDom(remoteobj);
      }
      if (transportformat != gConstScenarioTransportFormatJson &&
              transportformat != gConstScenarioTransportFormatXml &&
              transportformat != gConstScenarioTransportFormatRaw) {
        gDebug.appendLog("loadScenarioFromRemoteObject().Transportformat not supported:" + transportformat + ". Loading failed.");
        return;
      }
    } else {
      gDebug.appendLog("loadScenarioFromRemoteObject(): else-case called. No remote object found. Loading failed.");
    }
  }

  /* -------------------------------------------------------------------------- */
  function readBasisDataFromJSON(remoteobj) {
    /* general scenario data */
    var iLoadedScenarioObj = remoteobj;
    iName = iLoadedScenarioObj.name;
    iDescription = iLoadedScenarioObj.description;
    iAuthor = iLoadedScenarioObj.author;
    iDate = iLoadedScenarioObj.date;
    iCategory = iLoadedScenarioObj.category;

    /* ielm specific data */
    iSpecificDesc = iLoadedScenarioObj.content.any.specific_desc;
    gDebug.appendLog("readBasisDataFromJSON(). iLoadedScenarioObj.content=" + iLoadedScenarioObj.content);
    gDebug.appendLog("readBasisDataFromJSON(). iLoadedScenarioObj.content.any.specific_desc=" + iLoadedScenarioObj.content.any.paging);

  }

  /* -------------------------------------------------------------------------- */
  function readBasisDataFromXMLDom(xmldom) {
    gDebug.appendLog("readBasisDataFromXMLDom(): xmldom=" + xmldom + " JSON:" + JSON.stringify(xmldom));
    // Serializiation only for debug purposes
    var oSerializer = new XMLSerializer();
    var serialxmldom = oSerializer.serializeToString(xmldom);
    gDebug.appendLog("serialxmldom=" + serialxmldom);

    /* general scenario data */
    iName = xmldom.getElementsByTagName("name")[0].firstChild.nodeValue;
    iDescription = xmldom.getElementsByTagName("description")[0].firstChild.nodeValue;
    iAuthor = xmldom.getElementsByTagName("author")[0].firstChild.nodeValue;
    // gDebug.appendLog("readBasisDataFromXMLDom():: iAuthor=" + iAuthor);
    iDate = xmldom.getElementsByTagName("date")[0].firstChild.nodeValue;
    // gDebug.appendLog("iDate=" + iDate+" JSON:"+JSON.stringify(iDate)); 
    var content = xmldom.getElementsByTagName("content")[0];
    // gDebug.appendLog("content=" + content + " JSON:" + JSON.stringify(content));
    var childs = content.childNodes;
    // gDebug.appendLog("childs=" + childs+" JSON:"+JSON.stringify(childs)); 
    // Best should be used the DOM 3-method  getElementsByTagNameNS(). But IE-Problem ??
    // DOM 3-method. FF, Chrome, Safari, Opera: OK. But IE9ff not clear ??.
    // gConstXmlNamespaceUriEltest="http://www.hs-coburg.de/e-learning/eltest"; // see globals.js.

    var eltest_content = content.getElementsByTagNameNS(gConstXmlNamespaceUriEltest, "eltest_content");

    // gDebug.appendLog("eltest_content=" + eltest_content);
    var eltest_content_root;
    if (eltest_content.length == 1) {
      eltest_content_root = eltest_content[0];
    } else {
      gDebug.appendLog("readBasisDataFromXML():: Internal Error: = Eltest specific content in scenario not found or duplicated. Wrong format of scenario file.");
      return;
    }

    /* ielm specific data */

    var content_childs = xml_helper_get_child_elements_by_localname(eltest_content_root, "specific_desc");
    iSpecificDesc = content_childs[0].firstChild.nodeValue;

    // gDebug.appendLog("iSpecificDesc=" + iSpecificDesc);


  }

  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
} // end class EltestScenario
/******************************************************************************/
