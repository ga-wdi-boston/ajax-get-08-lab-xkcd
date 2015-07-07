![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# AJAX GET :: Lab
## Objectives
- Be able to use jQuery AJAX to make GET requests to a 3rd-party API.

## Assignment
We're going to play around with an API! This [unofficial XKCD API](http://xkcd-unofficial-api.herokuapp.com/) returns JSON data about the XKCD web comic and allows for searching via parameters on multiple fields. It has [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) enabled for cross-site requests (noteworthy, because many sites do not), which makes it ideal for this lab.

>This API was developed by David Fisher and the [code is available on Github](https://github.com/tibbon/xkcd_api_unofficial).

- Your mission is to use jQuery and Ajax to create a page that makes requests to the XKCD API and shows the results on the page.
- The page should have buttons for years (2013, 2012, etc.).
- When one of these buttons gets clicked, it should trigger an AJAX request which asks the API for a JSON containing info on all comics from that year.
- Once you have results, you should render the XKCD comics to the page in some manner (list, images, etc).

### Bonus

Rather than loading and rendering all the comics at once, create an infinite scroller of XKCD comics. In order to make this work, you'll need to pass in two additional parameters: "limit" and "offset". See if you can guess how they work...
