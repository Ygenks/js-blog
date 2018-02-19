export { createEntry };

function createEntry(article) {

    var entry = document.createElement("figure");
    entry.className = "entry";

    var header = document.createElement("h3");
    var link = document.createElement("a");
    link.href = article.url;
    link.textContent = article.title;

    var image = document.createElement("img");
    image.src = article.urlToImage;
    image.alt = article.title;

    var description = document.createElement("figcaption");
    description.className = "caption";
    description.textContent = article.description;

    header.appendChild(link);
    entry.appendChild(header);
    entry.appendChild(image);
    entry.appendChild(description);

    document.body.appendChild(entry);
}
