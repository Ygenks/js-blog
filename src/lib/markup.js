export { createFeedEntry };

function createFeedEntry(article) {

    var factory = new ElementFactory(article);

    var entry = factory.createElement("entry")
    var header = factory.createElement("header");
    var link = factory.createElement("link");
    var image = factory.createElement("image");
    var description = factory.createElement("description");

    header.appendChild(link);
    entry.appendChild(header);
    entry.appendChild(image);
    entry.appendChild(description);

    document.body.appendChild(entry);
}

function ElementFactory(article) {
    this.createElement = function(type) {
        var element;

        if(type == "entry") {
            element = new Entry(article);
        } else if (type == "header") {
            element = new Header(article);
        } else if (type == "link") {
            element = new Link(article);
        } else if (type == "image") {
            element = new Image(article);
        } else if (type == "description") {
            element = new Description(article);
        }

        return element;
    }
}

var Entry = function (article) {
    var element = document.createElement("figure");

    element.className = "entry";

    return element;
}

var Header = function (article) {
    var element = document.createElement("h3");

    return element;
}

var Link = function (article) {
    var element = document.createElement("a");

    element.href = article.url;
    element.textContent = article.title;

    return element;
}

var Image = function(article) {
    var element = document.createElement("img");

    element.src = article.urlToImage;
    element.alt = article.title;

    return element;
}

var Description = function(article) {
    var element = document.createElement("figcaption");

    element.className = "caption";
    element.textContent = article.description;

    return element;
}
