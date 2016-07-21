(function(document, window) {
  var receiveMessage = function (event) {
    document.getElementById('content').innerHTML = event.data.type;

/* Example switch statement to respond to different types
    switch(event.data.type) {
      case 'backward':
        window.history.back();
        break;
      case 'forward':
        window.history.forward();
        break;
      default:
        console.log('unknown type', event.data.type);
    }
    */
  };

  window.addEventListener('message', receiveMessage, false);
})(document, window);
