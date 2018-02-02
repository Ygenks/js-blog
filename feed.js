/*jshint esversion: 6 */

function createEntry(article) {

  var entry = document.createElement("div");
  entry.setAttribute("id", "entry");


  var header = document.createElement("h3");
  var link = document.createElement("a");
  link.href = article.url;
  link.textContent = article.title;

  var image = document.createElement("img");
  image.src = article.urlToImage;
  image.alt = article.title;
  image.width = 72;
  image.height = 72;

  var description = document.createTextNode(article.description);


  header.appendChild(link);
  entry.appendChild(header);
  entry.appendChild(image);
  entry.appendChild(description);

  document.body.appendChild(entry);
}

var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=c292fa2e031e40d6b871c85a2fc8d258';

var request = new Request(url);

fetch(request)
.then((response) => response.json())
.then(function(feed) {

    feed.articles.filter((article) => article.description != null).map(createEntry);
});
