var page = document.currentScript.getAttribute('page');

fetchComponent('footer');
fetchComponent('header', function() {
  window.scrollTo(0, 0);
  if (page === 'search') {
    var form = document.getElementsByTagName('form')[0];
    form['item-name'].value = 'Mridanga';
    form['item-type'].value = 'instruments';
  }
});

function fetchComponent(type, callback) {
  var req = new XMLHttpRequest(),
    resp;
  req.open('GET', 'assets/components/'+ type +'.html', true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      resp = req.responseText;
      document.getElementById(type).innerHTML = resp;
      if (callback) callback();
    }
  };
  req.send();
}
