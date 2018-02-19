import '../pages.css'

var button = document.createElement("button");
button.textContent = "Show News";
document.body.appendChild(button);

button.addEventListener("click", function() {

    import('./lib/markup').then(markup => {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Development mode');
        }

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=c292fa2e031e40d6b871c85a2fc8d258';

        var request = new Request(url);

        fetch(request)
            .then((response) => response.json())
            .then(function(feed) {
                feed.articles.filter((article) => article.description != null).map(markup.createEntry);
            });
    });
});
