(function () {
  window.load = function (url, onLoad) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function (evt) {
      document.body.removeChild(script);
      if (typeof onLoad === 'function') {
        onLoad(evt);
      }
    };
    script.onerror = function (evt) {
      document.body.removeChild(script);
      console.error(evt);
    };

    document.body.appendChild(script)
  }
})();