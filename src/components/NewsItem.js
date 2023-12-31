import React from 'react'
import '../styles/NewsItem.css'

function NewsItem(props) {
    let {title, description, author, date, newsUrl, imageUrl, source} = props;
    return (
        <>
            <div className="card">
                <img src={imageUrl} alt="..." />
                <p className='source'>{source}</p>
                <h3 className="card-title">{title}...</h3>
                <p className="card-desc">{description}...</p>
                <p className="card-other-info">By <b>{author}</b> at <b>{new Date(date).toUTCString()}</b></p>
                <a className='btn' target='blank' href={newsUrl}>Read more &gt;</a>
            </div>
        </>
    )
}

export default NewsItem
