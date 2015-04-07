(function ($) {
  Drupal.behaviors.dtbx_privateroom = {
    attach : function(context, settings) {
      $("a[href*='dtbx_privateroom/nojs']", context).addClass('ctools-use-modal');  		

	  // Для наших кнопок с ajax сначала подтверждение.
      $('.need-confirm-button').each(function() {
        // Настройки каждого ajax для каждого элемента в массиве Drupal.ajax, 
        // где ключи - id элементов формы с '#ajax'.
        // Таким образом достаточно просто подсунуть подтверждение в нужный момент.
        var ajax = Drupal.ajax[this.id];
        // Если эта функция возвращает false, запрос не производится.
        ajax.options.beforeSend = function(xmlhttprequest, options) {
          // Пользователь самоотверженно выбрал "Да".
          if (confirm("Вы уверены?")) {
            ajax.ajaxing = true;
            return ajax.beforeSend(xmlhttprequest, options);
          }
          // Умный пользователь. Решил, что лучше не надо.
          else {
            // Если не установить в false, получим нереагирующую кнопку
            // после отказа пользователя от заказа.
            ajax.ajaxing = false;
            return false;
          }
        };
      });

    }
  };
})(jQuery);
