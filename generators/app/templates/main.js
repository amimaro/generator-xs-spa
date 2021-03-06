const config = JSON.parse($.ajax({
  type: "GET",
  url: './config.json',
  async: false
}).responseText);

const goTo = function(page) {
  window.location = '#' + page;
};

const setPage = function(page) {
  page = page.replace('#', '').replace(/\/\w+/g, '');
  $.get('pages/' + page + '.html', function(html) {
    $('#root').html(html);
  });
};

const setRoute = function() {
  if (location.hash === '') {
    if (config.root === '')
      $('#root').html('');
    else {
      setPage(config.root);
    }
  } else {
    setPage(location.hash);
  }
};

$(document).ready(function() {
  setRoute();
  window.onhashchange = setRoute;
});
