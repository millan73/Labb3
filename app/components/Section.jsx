import { newsArticles } from '../utils/articleData'
import Article from './Article'

let servicesStyle = {
    fontSize: '700',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#EA661E'
}

let newsStyle = {
    fontSize: '700',
    fontWeight: 'bold',
    color: 'black'
}

export default function Section({ headerText }) {
    let headTextService = false

    if (headerText == 'Tjänster') {
        headTextService = true
    }

    let services = []
    let news = []

    newsArticles.forEach((article) => {
        if (article.typ === 'service') {
            services.push(article)
        } else {
            news.push(article)
        }
    })

    return (
        <>
            <div
                className="row col-12"
                style={headerText != 'Tjänster' ? newsStyle : servicesStyle}
            >
                <h2 className="pl-4 pt-4">{headerText}</h2>
            </div>
            <div
                className="row col-12"
                style={headerText != 'Tjänster' ? newsStyle : servicesStyle}
            >
                {headTextService &&
                    services.map((article) => (
                        <Article
                            key={article.id}
                            name={headerText}
                            header={article.header}
                            body={article.ingress}
                        />
                    ))}
                {!headTextService &&
                    news.map((article) => (
                        <Article
                            key={article.id}
                            name={headerText}
                            header={article.header}
                            body={article.ingress}
                        />
                    ))}
            </div>
        </>
    )
}
