(function ($) {
  Drupal.behaviors.selectstar = {
    attach : function(context, settings) {
      $(".starreview img").click(function( ) {
		id = jQuery(this).attr("id"); 
		e = id.substr(7, 1);
		for (var i = 1; i <= 5; i++) { 
			$("#imgstar" + i).attr("src","sites/all/themes/detbox/icons/stargrey.png")
		}
		for (var i = 1; i <= e; i++) { 
			$("#imgstar" + i).attr("src","sites/all/themes/detbox/icons/startgold.png")
		}
		$("#selectrating").val(e);
		
	  });
    }
  };
})(jQuery);