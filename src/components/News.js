import React, { Component } from 'react'
import '../styles/News.css'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [];

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles
        }
    }

    async updateNews() {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=10ae412cf6574b9b8b8ecb4a6b1954fa';
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    render() {
        return (
            <>
                <div className="main">
                    <h2>Top Headlines </h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="column">
                                <NewsItem title={element.title ? element.title.slice(0, 70):""} description={element.description?element.description.slice(0,150):""} author={element.author} date={element.publishedAt} newsUrl={element.url} imageUrl={element.urlToImage} />
                            </div>
                        })
                        }
                    </div>
                </div>
            </>
        )
    }
}
