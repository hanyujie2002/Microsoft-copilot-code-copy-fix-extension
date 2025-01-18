document.addEventListener('copy', function(event) {
  var selection = window.getSelection().toString();
  event.clipboardData.setData('text/plain', selection);
  event.preventDefault();
});
