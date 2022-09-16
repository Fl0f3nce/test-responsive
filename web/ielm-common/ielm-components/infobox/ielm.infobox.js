/*Version 0.8 2015-06-19 11:06*/

jQuery(document).ready(function () {
  ielm_init_info_boxes();
});

function ielm_init_info_boxes() {
    jQuery("#_ielm_common_menu_options").append(jQuery("<li>").html("Informationsboxen"));
    jQuery("fieldset._ielm_common_infobox").each(function (key, box) {
        jQuery(box).attr("data-infoID",key);
    var id = jQuery(box).attr("data-infoID");
//    if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.infobox.js:: key="+key+" id="+id);}
      
        var $closeBTN = jQuery("<button>").addClass("close_infobox").append(jQuery("<button>").addClass("closeBTN"));
        $closeBTN.click(function () {
            jQuery(box).hide();
            jQuery("input[data-infoid="+key+"]").prop("checked", false);
        });
        jQuery(this).append($closeBTN);
        var $li = jQuery("<li>").addClass("toogleAble");//.css("text-align","left");
        var $label = jQuery("<label>").html(jQuery(box).find("legend").html()).prop("for","CB-"+key);
        $li.append($label);
        var $checkbox = jQuery("<input>").prop("id","CB-"+key).prop("type", "checkbox").css("float", "right").prop("checked","true").attr("data-infoid",key).addClass("toogleInfobox");
        $checkbox.click(function () {
            jQuery(box).toggle($checkbox.prop("checked"));
        });
        $li.append($checkbox);
        jQuery("#_ielm_common_menu_options").append($li);
    });
}
jQuery.fn.infobox = function(options) {
   //  wss 20150914: error correction
   // var id = this.data("infoID");  // wrong
    var id = jQuery(this).attr("data-infoID");  
    if(options.display === "true")
        this.show();  // equivalent to css(display)="block"
    else if(options.display === "false")
        this.hide();  // equivalent to css(display)="none"
    else if (options.display === "toggle")
        this.toggle();
    
    // jQuery("input[data-infoid="+id+"]").prop("checked", this.is(":visible") ); // wrong, since jquery visible is equivalent to CSS-display
    var checked=(this.css("display")=="block");
//    if(typeof gDebug != 'undefined' && gDebug != null) { gDebug.appendLog("ielm.infobox.js:: id="+id+" checked= "+checked+" display="+this.css("display"));};
    
    jQuery("input[data-infoid="+id+"]").prop("checked", checked );
    return this;
};
