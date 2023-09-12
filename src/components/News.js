import React, { Component } from 'react';
import '../styles/News.css';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import testImage from '../img/big-s-logo.png'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewSpinner from './Spinner';

export default class News extends Component {

    static defaultProps = {
        country: 'in'
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    articles = [];

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1
        }

    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34fe631a41b47fd8b73749049e5615e&page=1`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        }, () => { this.updateNews() });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a34fe631a41b47fd8b73749049e5615e&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    render() {
        return (
            <>
                <div className="main">
                    <h2>Top Headlines </h2>
                    <InfiniteScroll key={'infyScroll'}
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={this.state.loading && <NewSpinner />}
                    >
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="column" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 70) : ""} description={element.description ? element.description.slice(0, 150) : "Read More on website"} author={element.author ? element.author : 'Unknown'} date={element.publishedAt} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : testImage} />
                                </div>
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
