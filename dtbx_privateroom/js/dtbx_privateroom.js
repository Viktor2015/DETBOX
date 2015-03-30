(function ($) {
  Drupal.behaviors.dtbx_privateroom = {
    attach : function(context, settings) {
      $("a[href*='dtbx_privateroom/nojs']", context).addClass('ctools-use-modal');  		
    }
  };
})(jQuery);

//       $("a[href*='/drupal/dtbx_privateroom/nojs']", context).addClass('ctools-use-modal');  
//       $("a", context).addClass('ctools-use-modal');  	   
