import '../pages.css'

const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=c292fa2e031e40d6b871c85a2fc8d258';


var Feed = function(url) {
    this.url = url;
}

Feed.prototype = {

    addShowButton: function() {
        this.button = document.createElement("button");

        this.button.textContent = "Show News";
        document.body.appendChild(this.button);

        this.addButtonEvent();

    },

    addButtonEvent: function() {
        var that = this;
        this.button.addEventListener("click", function() {
            import('./lib/markup').then(markup => {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('Development mode');
                }
                that.fetchFeed(markup);
            });
        });
    },

    fetchFeed: function(markup) {
        var request = new Request(this.url);

        fetch(request)
            .then((response) => response.json())
            .then(function(feed) {
                feed.articles.filter((article) => article.description != null).map(markup.createFeedEntry);
            });
    }
}

function main() {
    var feed = new Feed(url);
    feed.addShowButton();
}

main();
