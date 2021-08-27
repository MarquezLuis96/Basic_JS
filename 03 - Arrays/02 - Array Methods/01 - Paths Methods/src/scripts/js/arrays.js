var articles = [
    {articleName: "Bike", articleCost: 1500},
    {articleName: "TV", articleCost: 250},
    {articleName: "Book", articleCost: 150},
    {articleName: "Redmi Note 7 pro", articleCost: 280},
    {articleName: "Laptop", articleCost: 850},
    {articleName: "Keyboard", articleCost: 50},
    {articleName: "Headphones", articleCost: 100},
];

var filtered = articles.filter(function(article) {
    return article.articleCost <= 500;
});


function filterByArgument(arg) {
    return articles.filter(function(article) {
        return article.articleCost <= arg;
    });
}

var articlesName = articles.map(function(article) {
    return article.articleName;
});