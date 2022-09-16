/*Version 0.9 2020-05-12 12:00*/
var __ielp_scenario_selection_dialog_initialized = false; // wss 20151130: inserted
if (jQuery)
    (function ($) {
        $.extend($.fn, {
            selectedFile: null,
            ielm_scenario_selection: function (okFunc) {
                $(this).dialog({height: 'auto', width:'600px', autoOpen: false, closeOnEscape: true, modal: true,
                    buttons: {
                        Abbrechen: function () {
                            $(this).dialog("close");
                        },
                        Ok: function () {
                            $(this).dialog("close");
                            okFunc(selectedFile);
                        }
                    }
                });
                $(this).find("#_ielm_filetree_box").each(function () {
                    function showTree(c, t) {
                        if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection showTree() called..");}
                       $(c).addClass('wait');
                        $("._ielm_jqueryFileTree.start").remove();
                        $.post("Connector", {path: t, transportformat: "application/json"}, function (data) {
                            if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection $.post called: t=" + t);}

                            $(c).find('.start').html('');
                            //$(c).removeClass('wait').append(data);
                            $(c).removeClass('wait');
                            appendTree(c, data, t);
                            if ('/' === t)
                                $(c).find('UL:hidden').show();
                            else
                                $(c).find('UL:hidden').slideDown();
                            bindTree(c);
                        });
                        if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection showTree() finished.");}
         
                    }

                    function bindTree(t) {
                        $(t).find('li a').bind("click", function () {
                            if ($(this).parent().hasClass('directory')) {
                                if ($(this).parent().hasClass('collapsed')) {
                                    // Expand
                                    $(this).parent().find('UL').remove(); // cleanup
                                    //showTree($(this).parent(), escape($(this).attr('rel').match(/.*\//)));                                   
                                    showTree($(this).parent(), $(this).attr('rel'));
                                    $(this).parent().removeClass('collapsed').addClass('expanded');
                                } else {
                                    // Collapse
                                    $(this).parent().find('UL').slideUp();
                                    $(this).parent().removeClass('expanded').addClass('collapsed');
                                }
                            } else {
                                $("._ielm_selectedfile").removeClass("_ielm_selectedfile");
                                $(this).parent().addClass("_ielm_selectedfile");
                                selectedFile = $(this).attr('rel');
                                $.post("Connector", {path: $(this).attr('rel'), transportformat: "application/json-scenarioinfo"}, function (data) {
                                    $("._ielm_fileInfo").html("<table>\n\
                                                                <tr><td>Name:</td><td class=\"ielm_fileinfo_value\">" + data["name"] + "</td></tr> \
                                                                <tr><td>Beschreibung:</td><td class=\"ielm_fileinfo_value\">" + data["description"] + "</td></tr> \
                                                                <tr><td>Schwierigkeit:</td><td class=\"ielm_fileinfo_value\">" + data["level"] + "</td></tr> \
                                                                <tr><td>Autor:</td><td class=\"ielm_fileinfo_value\">" + data["author"] + "</td></tr> \
                                                                <tr><td>Datum:</td><td class=\"ielm_fileinfo_value\">" + data["date"] + "</td></tr> \
                                                                <tr><td>Kategorie:</td><td class=\"ielm_fileinfo_value\">" + data["category"] + "</td></tr> \
                                                                <tr><td>Kontakt:</td><td class=\"ielm_fileinfo_value\">" + data["contact"]) + "</td></tr>\
                                                              </table>";
                                }).fail(function () {
                                    $("._ielm_fileInfo").html($("<span>").addClass("error").html("Ein Fehler ist aufgetreten"));
                                });

                            }
                            return false;
                        });
                    }

                    function appendTree(c, data, path) {
                        var parent = $(c).closest("._ielm_jqueryFileTree").data("path");
                        var totalPath = (parent === undefined) ? '/' : path + "/";
                        var $ul = $("<ul>").addClass("_ielm_jqueryFileTree").data("path", totalPath);
                        $(data["directories"].sort(ielm_sort_by_name)).each(function (k, v) {
                            var $li = $("<li>").addClass("directory collapsed").append($("<a>").prop("rel", totalPath + v).html(v));
                            $ul.append($li);
                        });
                        $(data["files"].sort(ielm_sort_by_name)).each(function (k, v) {
                            var $li = $("<li>").addClass("file ext_" + v.split(".")[1]).append($("<a>").prop("rel", totalPath + v).html(v));
                            $ul.append($li);
                        });
                        $ul.css("display", "none");
                        $(c).append($ul);
                    }
                    // Loading message
                    $(this).html('<ul class="_ielm_jqueryFileTree start"><li class="wait">Lade...<li></ul>');
                    // Get the initial file list
                      if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection before showTree().");}
         
                   showTree($(this), '/');
                   if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection after showTree().");}
     
                });
            }
        });
    })(jQuery);

function ielm_init_scenario_dialog(f) {
   if (__ielp_scenario_selection_dialog_initialized==false){ // wss 20151130: inserted 
    __ielp_scenario_selection_dialog_initialized=true; 
    jQuery("body").append($('<div id="_ielm_common_scenario_selection" title="Szenario Auswahl" style="z-index:8000"> \
        <div class=\"_ielm_fileexplorer\"> \
            <h2>Explorer</h2> \
            <div id="_ielm_filetree_box" class="_ielm_filetree"></div> \
        </div> \
        <div class="_ielm_filedetails"> \
            <h2>Dateiinformation</h2> \
            <div id="_ielm_fileInfo_box" class="_ielm_fileInfo"></div> \
        </div> \
    </div>'));
    jQuery("#_ielm_common_scenario_selection").ielm_scenario_selection(f);
   }
   
   // wss 20151130: moved to ielm-specific handle-function
   /*
    $("#_ielm_common_menu_scenario_open").click(function () {
        //$("#scenarioloader").dialog("open");
        if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.scenario.selection $(\"#_ielm_common_menu_scenario_open\").click() called.");}
        
        $("#_ielm_common_scenario_selection").dialog("open");
    });
    */
}

function ielm_sort_by_name(a, b) {
    var aName = a.toLowerCase();
    var bName = b.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

