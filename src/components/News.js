import React, { useEffect, useState } from 'react';
import '../styles/News.css';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import testImage from '../img/big-s-logo.png'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewSpinner from './Spinner';

export default function News(props) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4b0f15ab01441179044ee120a956d63&page=1`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    },[]);

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4b0f15ab01441179044ee120a956d63&page=${page+1}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    return (
        <>
            <div className="main">
                <h2>Top Headlines </h2>
                {loading && <NewSpinner />}
                <InfiniteScroll key={'infyScroll'}
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<NewSpinner />}
                >
                    <div className="row">
                        {articles.map((element) => {
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

News.defaultProps = {
    country: 'in'
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
}
