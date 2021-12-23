function ArticleCard({ article }) {
    return (
        <a 
            href={article.url} 
            className="news-card"
            target="_blank" 
            rel="noreferrer noopener"
        >
            <article className="news-card-article">
                <h1 className="news-title">{article.title}</h1>
                <p>{article.name} ({article.country})</p>
                <img className="news-card-image" src={article.imgUrl} alt={article.title} />
            </article>
        </a>
    )
}

export default ArticleCard