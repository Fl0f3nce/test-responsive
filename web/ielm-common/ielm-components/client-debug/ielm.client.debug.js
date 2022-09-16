"use strict";
/* wss 10.09.2015
 * 
 * debug component, usable for debugging JavaScript code
 */
/* -------------------------------------------------------------------------- */
function IelmClientDebug(vNameDebugWnd, vUrlDebugWnd) {
  this.debugOn = false;
  this.debugConsoleOn = true;
  this.debugAreaOn = false;
  this.debugWindowOn = false;
  /* -------------------------------------------------------------------------- */
  this.appendLogMode = function (mode, text) {
    if (mode == true) {
      this.appendLog(text);
    }
  }
  /* -------------------------------------------------------------------------- */
  this.appendLog = function (text) {
    if (iThis.debugOn == true) {
      if (iThis.debugConsoleOn == true) {
        appendLogToDebugConsole(text);
      }
      if (iThis.debugAreaOn == true) {
        appendLogToDebugArea(text);
      }
      if (iThis.debugWindowOn == true) {
        appendLogToDebugWindow(text);
      }
    }
  }
   /* -------------------------------------------------------------------------- */
 this.resetLog = function () {
    contentDebugWnd = "";
  }
  /* -------------------------------------------------------------------------- */
  var iThis = this;
  var debugWnd = null;
  var nameDebugWnd = vNameDebugWnd;
  var urlDebugWnd = vUrlDebugWnd;
  /* local variable for content to avoid loss of data since new window
   * is handled in a separate thread */
  var contentDebugWnd = "";
  /* for later enhancements */
  var fontSizeWnd = 10;  // currently not used
  var positionLeftArea;  // currently not used
  var positionTopArea;  // currently not used
 
  /* -------------------------------------------------------------------------- */
  function appendLogToDebugConsole(text) {
    /* write to Browser console */
    if (window.console && window.console.log) {
      window.console.log(text);
    }
  }
  /* -------------------------------------------------------------------------- */
  function appendLogToDebugArea(text) {
    // var elem=$("#_ielm_debug_span");
    var elem = document.getElementById("_ielm_debug_span");
    if (elem != null) {
      elem.innerHTML = elem.innerHTML + ielm_encode_for_html(text) + "<br />";
    }
  }
  /* -------------------------------------------------------------------------- */
  function appendLogToDebugWindow(text) {
    /* write to own debug window */
    if (debugWnd == null || debugWnd.closed) { /* open if not already open */
      var widthvalue = 500;
      var leftvalue = screen.width - widthvalue;
      debugWnd = window.open(urlDebugWnd, nameDebugWnd, "width=" + widthvalue + ",height=400,left=" + leftvalue + ",top=50" +
              ",scrollbars=yes,resizeable=1");
      /* it will need some time till the dom is available */
      setTimeout(appendLogToDebugWindow, 1000, text);
      return;
    }
    if (debugWnd.clear_request != null && debugWnd.clear_request == true) {
      contentDebugWnd = "";  // clear content of window. clear_request==true found<br />
      debugWnd.clear_request = false;
    }
    contentDebugWnd = contentDebugWnd + "###" + ielm_encode_for_html(text) + "<br />";
    var debugelem = debugWnd.document.getElementById("_ielm_debug_content");
    // window.console.log("debugelem=" + debugelem + " gDebugWnd.document=" + gDebugWnd.document);
    // window.console.log("debugelem.innerHTML=" + debugelem.innerHTML);
    if (debugelem != null) {
      debugelem.innerHTML = contentDebugWnd;
      // window.console.log("Internal: debugelem.innerHTML=" + debugelem.innerHTML);
    }
  }
  /* -------------------------------------------------------------------------- */
  function ielm_encode_for_html(text) {

    var res = "";
    var c, n;
    var i, l;
    l = text.length;
    for (i = 0; i < l; i++) {
      c = text.charAt(i);
      n = text.charCodeAt(i); // unicode number of char
      if (n > 127) {
        res = res + "&#" + n + ";";
      } else {
        if (n < 32) { /* 32 = blank. 
         * omit conntrol chars. replace CR, LF and TAB.
         */
          if (n == 10 || n == 13) {
            res = res + "<br />";
          }
          if (n == 9) {
            res = res + "[tab]";
          }
        } else {
          switch (n) {
            case 32:
              res = res + "&nbsp;";
              break;
              /* replace chars with special meaning in HTML by numeric entities */
            case 34:
            case 38:
            case 39:
            case 60:
            case 62:
              res = res + "&#" + n + ";";
              break;
            default:
              res = res + c;
              break;
          }
        }
      }
    } // for
    return res;
  }
  /* -------------------------------------------------------------------------- */
} // class IelmDebug
