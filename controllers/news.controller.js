class NewsController {
    async pageCreateNews(req, res) {
        res.render(
            'news/news-create',
            {
                pageTitle: "Create News",
                layout: 'layouts/layouts'
            }
        )
    }
}

module.exports = NewsController;