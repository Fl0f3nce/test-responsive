/* !!DO_NOT_EDIT!! */
//Style-Config
/*
 
 1. Default value should be 1
 2. A value (1 or 0) must be set
 
 meta_box_over_1280:
  - 1: meta-box are displayed at a display-resolution over 1280px width
  - 0: meta-box are hidden at a display-resolution over 1280px width

meta_box_under_1280:
  - 1: meta-box are hidden at a display-resolution under 1280px width
  - 0: meta-box are displayed at a display-resolution under 1280px width

param_box_over_1280:
  - 1: param-box are displayed at a display-resolution over 1280px width
  - 0: param-box are hidden at a display-resolution over 1280px width

param_box_under_1280:
  - 1: param-box are hidden at a display-resolution under 1280px width
  - 0: param-box are displayed at a display-resolution under 1280px width

menus_config:
  - 1: it is possible to open both menus at the same time
  - 0: if one menu is open the other menu will be hidden

menu_default_list:
  - 1: menu-list <ul> is closed (default)
  - 0: menu-list <ul>, all entries are open
 
var meta_box_over_1280 = 1;
var meta_box_under_1280 = 1;

var param_box_over_1280 = 1;
var param_box_under_1280 = 1;

var menus_config = 1;

 
 */




//--------------------------------------------

$(function(){
    
    
    
    //SessionStorage handles Infobox-State
    if ("smetabox" in sessionStorage) {
        
    }else {
        sessionStorage.smetabox = 1;
    }
    
    if ("sparameterbox" in sessionStorage) {
        
    }else {
        sessionStorage.sparameterbox = 1;
    }
    
    if ("sauswertungsbox" in sessionStorage) {
        
    }else {
        sessionStorage.sauswertungsbox = 0;
    }

    var currentinfobox = sessionStorage.smetabox;
    var currentparameterbox = sessionStorage.sparameterbox;
    var currentauswertungsbox = sessionStorage.sauswertungsbox;
    
    //---------------------------------------------


   //Options and Infoboxes
   
   $('#_ielm_meta_info_option').click(function(){
	
        if(currentinfobox === "1"){
            sessionStorage.smetabox = 0;
        }else {
           sessionStorage.smetabox = 1; 
        }
        
       if($('#_ielm_meta_info_option').is(':checked')) {
   	    $("#_ielm_common_infobox_meta").toggle(350);
	  }else {
		$("#_ielm_common_infobox_meta").toggle(350);
	  }	 
   });
   
   if($('#_ielm_meta_info_option').is(':checked')) {
   	    $("#_ielm_common_infobox_meta").show();
   }else {
	   $("#_ielm_common_infobox_meta").hide();
   }
   
   
   $('#_ielm_parameter_option').click(function(){
       
        if(currentparameterbox === "1"){
            sessionStorage.sparameterbox = 0;
        }else {
           sessionStorage.sparameterbox = 1; 
        }
       
          if($('#_ielm_parameter_option').is(':checked')) {
   	    $("#_ielm_common_infobox_parameter").toggle(350);
	  }else {
		$("#_ielm_common_infobox_parameter").toggle(350);
	  }	 
   });
   
   if($('#_ielm_parameter_option').is(':checked')) {
   	    $("#_ielm_common_infobox_parameter").show();
   }else {
	   $("#_ielm_common_infobox_parameter").hide();
   }
   
   $('#_ielm_results_option').click(function(){
	  if(currentauswertungsbox === "1"){
            sessionStorage.sauswertungsbox = 0;
          }else {
            sessionStorage.sauswertungsbox = 1; 
          }
       
          if($('#_ielm_results_option').is(':checked')) {
   	    $("#_ielm_results").animate({height:'toggle'},350);
	  }else {
		$("#_ielm_results").animate({height:'toggle'},350);
	  }	 
   });
   
   
     
   $("._ielm_show_results").click(function(){
       $("#_ielm_results").animate({height:'toggle'},350); 
       
       if(currentauswertungsbox === "1"){
           sessionStorage.sauswertungsbox = 0;
        }else {
           sessionStorage.sauswertungsbox = 1; 
        }
       
        if($('#_ielm_results_option').is(':checked')) {
            $('#_ielm_results_option').prop('checked', false);
        }else {
            $('#_ielm_results_option').prop('checked', true);
        }
        
        marginClickResizer();
         
   });
   
   if($('#_ielm_results_option').is(':checked')) {
   	    $("#_ielm_results").show();
   }else {
	   $("#_ielm_results").hide();
   }
   
   
   $('#_ielm_common_infobox_meta-close').click(function(){
	  
          if(currentinfobox === "1"){
            sessionStorage.smetabox = 0;
          }else {
            sessionStorage.smetabox = 1; 
          }
       
          $('#_ielm_meta_info_option').prop('checked', false);
	  $("#_ielm_common_infobox_meta").toggle(350);
	  $("#_ielm_common_infobox_meta h2").hide(0);
   });
   
   $('#_ielm_common_infobox_parameter-close').click(function(){
	  
          if(currentparameterbox === "1"){
            sessionStorage.sparameterbox = 0;
          }else {
            sessionStorage.sparameterbox = 1; 
          }
       
          $('#_ielm_parameter_option').prop('checked', false);
	  $("#_ielm_common_infobox_parameter").toggle(350);
	  $("#_ielm_common_infobox_parameter h2").hide(0);
   });
   
   
        $("#_ielm_common_infobox_meta h2").hide();
	$("#_ielm_common_infobox_parameter h2").hide();
	$("#_ielm__ielm_results h2").hide();
   
   $("#_ielm_common_infobox_meta").click(function(e) {
      if( !$(e.target).is("input, button") ) {
          $("#_ielm_common_infobox_meta h2").toggle(350);
      }	 
   });
   
   $("#_ielm_common_infobox_parameter").click(function(e) {
	  if( !$(e.target).is("input, button") ) {
    		$("#_ielm_common_infobox_parameter h2").toggle(350);
      }	 	 
   });
   
   $("#_ielm_results").click(function() {
        $("#_ielm_results h2").animate({height:'toggle'},350);
   });
   
   
    //--------------------------------------------------------------------
        
    //Navigation & Breadcrumb      

	$("#breadcrumb-list").show();
	$("._ielm_navi").hide();
	$("._ielm_menu").hide();
        
        
        //Open and close Navigation in Desktop-Mode
        
        $("#_ielm_open_navi_desktop").click(function(){
            $("._ielm_navi").toggle(300);
        }); 
   

    //Changes over 1280px width
   
   if ($(window).width() > 1280) {  

	$("._ielm_menu").show();

        if(meta_box_over_1280 === 1) {
            if(currentinfobox === "1"){
                $('#_ielm_meta_info_option').prop('checked', true);
                $("#_ielm_common_infobox_meta").show();
            }else {
                $('#_ielm_meta_info_option').prop('checked', false);
                $("#_ielm_common_infobox_meta").hide();
            }
              
        }
        
        if(param_box_over_1280 === 1) { 
            if(currentparameterbox === "1"){   
                $('#_ielm_parameter_option').prop('checked', true);
		$("#_ielm_common_infobox_parameter").show();
            }else {
                $('#_ielm_parameter_option').prop('checked', false);
		$("#_ielm_common_infobox_parameter").hide();
            }
		     
        }
        
        if(meta_box_over_1280=== 0) {
	    if(currentinfobox === "1"){
                $('#_ielm_meta_info_option').prop('checked', false);
                $("#_ielm_common_infobox_meta").hide();
            }else {
                $('#_ielm_meta_info_option').prop('checked', true);
                $("#_ielm_common_infobox_meta").show();
            }
			
        }
        
        if(param_box_over_1280=== 0) {
            if(currentparameterbox === "1"){ 
                $('#_ielm_parameter_option').prop('checked', false);
		$("#_ielm_common_infobox_parameter").hide();
            }else {
                $('#_ielm_parameter_option').prop('checked', true);
		$("#_ielm_common_infobox_parameter").show();
            }
			
        }
        
        if(currentauswertungsbox === "1"){
            $('#_ielm_results_option').prop('checked', true);
            $("#_ielm_results").show();
        }else {
            $('#_ielm_results_option').prop('checked', false);
            $("#_ielm_results").hide();
        }

   } 
   
   //Changes under 1280px width
   
   if ($(window).width() <= 1280) {  	
        
	$("._ielm_menu").hide();
        
        $("#_ielm_common_menu_scenario_open").click(function(){
            $("._ielm_menu").hide();
        });
       
        if(meta_box_under_1280 === 1) {
            if(currentinfobox === "1"){
                $('#_ielm_meta_info_option').prop('checked', false);
                $("#_ielm_common_infobox_meta").hide();
            }else {
                $('#_ielm_meta_info_option').prop('checked', true);
                $("#_ielm_common_infobox_meta").show();
            }
            
        }
        
        if(param_box_under_1280 === 1) {
            if(currentparameterbox === "1"){ 
                $('#_ielm_parameter_option').prop('checked', false);
                $("#_ielm_common_infobox_parameter").hide(); 
            }else {
                $('#_ielm_parameter_option').prop('checked', true);
                $("#_ielm_common_infobox_parameter").show(); 
            }
               
     
        }
        
        if(meta_box_under_1280 === 0) {
            if(currentinfobox === "1"){
                $('#_ielm_meta_info_option').prop('checked', true);
                $("#_ielm_common_infobox_meta").show();
            }else {
                $('#_ielm_meta_info_option').prop('checked', false);
                $("#_ielm_common_infobox_meta").hide();
            }
            
        }
        
        if(param_box_under_1280 === 0) {
            if(currentparameterbox === "1"){ 
                $('#_ielm_parameter_option').prop('checked', true);
		$("#_ielm_common_infobox_parameter").show();
            }else {
                $('#_ielm_parameter_option').prop('checked', false);
		$("#_ielm_common_infobox_parameter").hide();
            }
	
        }
        
        if(currentauswertungsbox === "1"){
            $('#_ielm_results_option').prop('checked', true);
            $("#_ielm_results").show();
        }else {
            $('#_ielm_results_option').prop('checked', false);
            $("#_ielm_results").hide();
        }
        
        //web.xml configures if all menu entries are visible or hidden in a list
   
        if(menu_default_list === 0) {
           $("._ielm_menu ul li a").addClass("active"); 
           $("._ielm_menu ul li a").next("ul").show();

           $("._ielm_menu ul li ul li a").removeClass("active"); 
        } 
        
   }  
             
    //Resizes Margin-Values
    marginResizer();
     
   //Changes on resize
    
   $(window).resize(function(){     

       /* if ($(window).width() <= 1280) {  
			$('#_ielm_meta_info_option').prop('checked', false);
			$('#_ielm_parameter_option').prop('checked', false);
			$("#parameter").hide();
			$("#meta-info").hide();
			
   	   }  */
		
		if ($(window).width() > 1280) {  
			$("._ielm_menu").show();
		}  
                
                marginResizer();
                
    });
	
        
   //Navigation & Menu
   
   $("#_ielm_open_navi").click(function(){
        $("._ielm_navi").animate({width:'toggle'},350);
        
       if(menus_config === 0) {
           $("._ielm_menu").hide();
       }
   });
   
   $("section > div:not(._ielm_navi)").click(function(e) {
      if(!$(e.target).is("#__breadcrumb")) {
    	$("._ielm_navi").hide();
      }	    
   }); 
   
   $("#_ielm_open_menu").click(function(){
        $("._ielm_menu").animate({width:'toggle'},350);
        
        if(menus_config === 0) {
           $("._ielm_navi").hide();
       }
   });
   
   
   $("._ielm_menu ul > li > a").on("click", function(e){
	    if(!$(this).hasClass("active")) {
	         
	        $(this).next("ul").slideDown(350);

	        $(this).addClass("active");

	    }else if($(this).hasClass("active")) {

	        $(this).removeClass("active");
	        $(this).next("ul").slideUp(350);
	    }
	});
	
	$("#stop").hide();
	
	$("#play").click(function(){
		$("#play").hide();
		$("#stop").show();
	});
	
	$("#stop").click(function(){
		$("#stop").hide();
		$("#play").show();
	});
	
   
}); 

//Resizes the margin values of the content (used for vertical scrolling)
function marginResizer() {
    if($('._ielm_step_navigation').css('display') !== 'none') {
                    if($("._ielm_step_navigation").height() > 10 && $("._ielm_step_navigation").height() < 90) {
                        $("#_ielm_module_content").css({"margin-bottom": "130px"}); 


                        if($('#_ielm_results').css('display') !== 'none')
                        {
                            if($("#_ielm_results").height() > 0 ) {
                                $("#_ielm_module_content").css({"margin-bottom": "230px"}); 
                            }

                            if($("#_ielm_results").height() > 135 ) {
                                $("#_ielm_module_content").css({"margin-bottom": "280px"}); 
                            }
                        }

                    }
                
                    if($("._ielm_step_navigation").height() > 10 && $("._ielm_step_navigation").height() > 90) {
                        $("#_ielm_module_content").css({"margin-bottom": "170px"}); 

                        if($('#_ielm_results').css('display') !== 'none')
                        {
                            if($("#_ielm_results").height() > 0 ) {
                                $("#_ielm_module_content").css({"margin-bottom": "250px"}); 
                            }

                            if($("#_ielm_results").height() > 135 ) {
                                $("#_ielm_module_content").css({"margin-bottom": "300px"}); 
                            }
                        }
                    }
                }else {
                    $("#_ielm_module_content").css({"margin-bottom": "50px"});
                }
} 

//Resizes the margin values of the content (used for vertical scrolling)
function marginClickResizer() {
    if($("._ielm_step_navigation").height() < 90) {
        
        if($('#_ielm_results').css('display') !== 'none')
        {
            if($("#_ielm_results").height() > 0 && $("#_ielm_results").height() < 125) {
                $("#_ielm_module_content").css({"margin-bottom": "280px"}); 
            }

            if($("#_ielm_results").height() > 125 ) {
                $("#_ielm_module_content").css({"margin-bottom": "130px"}); 
            }
        }else {
           $("#_ielm_module_content").css({"margin-bottom": "130px"});  
        }

    }
    
    if($("._ielm_step_navigation").height() > 90) {
        

        if($('#_ielm_results').css('display') !== 'none')
        {
            if($("#_ielm_results").height() > 0 && $("#_ielm_results").height() < 125) {
                $("#_ielm_module_content").css({"margin-bottom": "300px"}); 
            }

            if($("#_ielm_results").height() > 125 ) {
                $("#_ielm_module_content").css({"margin-bottom": "200px"}); 
            }
        }else {
            $("#_ielm_module_content").css({"margin-bottom": "170px"}); 
        }
    }
}
