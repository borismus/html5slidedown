// When page loaded, run through all of the <article> elements with
// data-markdown attributes set, and process their contents with Showdown.

window.addEventListener('load', onPageLoaded);

function onPageLoaded() {
  // Get all of the article elements with the data-markdown attribute.
  var articles = document.querySelectorAll('article[data-markdown]');
  var converter = new Showdown.converter();
  for (var i = 0; i < articles.length; i++) {
    var article = articles[i];
    // Replace the contents of the article with its markdownified version.
    var html = converter.makeHtml(article.innerHTML);
    article.innerHTML = html;
  }
}
