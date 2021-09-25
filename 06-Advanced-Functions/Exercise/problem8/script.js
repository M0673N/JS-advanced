function getArticleGenerator(articles) {
    let listOfArticles = articles;
    let output = document.querySelector('#content');

    function recursive() {
        if (listOfArticles.length === 0) {
            return;
        }
        let text = listOfArticles.shift();
        let article = document.createElement('article');
        article.textContent = text;
        output.appendChild(article);
        return recursive;
    }

    return recursive;
}