var articles = [
    {articleName: "Bike", articleCost: 1500},
    {articleName: "TV", articleCost: 250},
    {articleName: "Book", articleCost: 150},
    {articleName: "Redmi Note 7 pro", articleCost: 280},
    {articleName: "Laptop", articleCost: 850},
    {articleName: "Keyboard", articleCost: 50},
    {articleName: "Headphones", articleCost: 100},
];

var findArticle = articles.find(function(article) {
    return article.articleName === "Laptop";
});

function findArticleBy(artName) {
    return articles.find(function(article) {
        return article.articleName.toLowerCase() == artName.toLowerCase();
    });
}

function printList() {
    articles.forEach(function(article) {
        console.log(article.articleName);
    });
}

var cheapArticles = articles.some(function(article) {
    return article.articleCost <= 250;
});