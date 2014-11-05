$(document).ready(function(){
  i = 0;
  year = 2006;

  function loadImg()
  {
    alert("loading images");
    var comic = "http://xkcd-unofficial-api.herokuapp.com/xkcd?year=" + year;
    $.ajax({
      url: comic,
      dataType: 'json',
      data: { api_key:"foobar", limit:5 , offset:0 }
    }).done(function(data) {
      console.log(data);
      data.forEach(function(comic) {
        $('#comic').append($('<h2>').text(comic.title));
        $('#comic').append($('<img>').attr('src', comic.img));
      });
    });
  }

  function loadMore()
  {
    $.ajax({
      url: comic,
      dataType: 'json',
      data: { api_key:"foobar", limit:5, offset:i }
    }).success(function(data) {
      i = i + 5;
      console.log("more to load");
    }) .error(function() {
      alert("error" + year);
      year = year + 1;
      i = 0;
      // changes the scroll on the page to where it is + 10
      // if the year for "year" is more than now, dont load more.
      loadImg();
    });
  }

  function bindScroll(){
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
     loadMore();
   }
 }

 $(window).scroll(bindScroll);
  $('#button').click(loadImg);
});
