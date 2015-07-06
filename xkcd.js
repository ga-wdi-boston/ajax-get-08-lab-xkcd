$(document).ready(function(){
  $("button").on('click', function(){
    XKCD.requestAllFromYear(Number($(this).text()));
  });
});

var XKCD = {};

XKCD.requestComics = function(searchParams) {
  searchParams.api_key = "foobar"
  $.ajax({
    url: 'http://xkcd-unofficial-api.herokuapp.com/xkcd',
    type: 'GET',
    data: searchParams
  }).done(function(data) {
    XKCD.renderAll(data);
  }).fail(function() {
    console.log("error");
  });
};
XKCD.requestAllFromYear = function(year){
  XKCD.requestComics({year: year});
};
XKCD.renderOneMore = function(comic){
  $('#content').append($('<img src="' + comic.img + '" />'));
};
XKCD.renderAll = function(comics){
  $("#content").empty();
  comics.forEach(function(comic){
    XKCD.renderOneMore(comic);
  });
};
XKCD.numToLoad = 10;
XKCD.lastLoaded = -1;
