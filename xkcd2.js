// Rewrite the entire xkcd.js file
// Don't just copy/paste
// Rules:
// - Zero global variables allowed. You may use a `xkcdApp` object to namespace all methods in
// - Zero global functions allowed. Store everything as a property on `xkcdApp`
// - Make all functions as small as possible. If something can be split up, it should be.
// - Add a reset button to clear the screen of all comics and start over
// - Add dropdowns for the years, and the scrolling must then work by year
// - Fix the scrolling so that it works more naturally

xkcdApp = {};

xkcdApp.apiUrl = function(year) {
  return "http://xkcd-unofficial-api.herokuapp.com/xkcd?year=" + year;
};

xkcdApp.getYearSelection = function() {
  var year_list = document.getElementById("years");
  return year_list.options[year_list.selectedIndex].value;
};

xkcdApp.getLimitSelection = function () {
  var limit_list = document.getElementById("limit");
  return limit_list.options[limit_list.selectedIndex].value;
};

xkcdApp.renderComics = function(data) {
  console.log(data);
};

xkcdApp.makeAjaxRequest = function(comic, limit, year) {
  $.ajax({
    url: comic,
    dataType: 'json',
    data: { api_key:"foobar", limit:limit , offset:0 }
  }).success(xkcdApp.renderComics);
};

xkcdApp.printImg =  function () {
  var year, limit, comic;

  year = xkcdApp.getYearSelection();
  limit = xkcdApp.getLimitSelection();

  comicUrl = xkcdApp.apiUrl(year);
  xkcdApp.makeAjaxRequest(comicUrl, limit, year);
};

xkcdApp.reset = function () {
  alert("shit works2");
};

$(document).ready(function(){
  $('#print').click(xkcdApp.printImg);
  $('#reset').click(xkcdApp.reset);
});
