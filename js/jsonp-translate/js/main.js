(function () {
  document.querySelector('#language_selector').addEventListener('change', function (evt) {
    window.load('translations/' + evt.target.value + '.js');
  })
})();