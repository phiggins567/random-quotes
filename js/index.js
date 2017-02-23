function Quote() {
    let url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

    let getQuote = function(data) {
      let quoteText = data.quoteText;
      let quoteAuthor = data.quoteAuthor;

      $(".quote-text").html(quoteText);
      
        if(quoteAuthor !== "") {
          $(".quote-author").html(quoteAuthor);
        } else {
          $(".quote-author").html("Unknown");
        }
      $("#tweet").attr("href", tweetLink(quoteText, quoteAuthor));
    };

    $.getJSON(url, getQuote, 'jsonp');
}

function tweetLink(quote, author) {
  return "https://twitter.com/intent/tweet?text=" + quote.replace(" ", "%20") + "-" + author.replace(" ", "%20");
}

$(document).ready(Quote());

$("#getQuote-button").on("click", function(){
  Quote();
});
