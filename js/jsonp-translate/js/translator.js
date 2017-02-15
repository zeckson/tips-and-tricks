(function () {
  var translatableItems = document.querySelectorAll('.translatable');

  window.translate = function (translation) {
    for (var i = 0; i < translatableItems.length; i++) {
      var item = translatableItems[i];

      var message = translation[item.id];
      if(typeof message === "undefined") {
        message = 'Перевод не найден для элемента: ' + item.id;
      }
      item.textContent = message;
    }
  }
})();