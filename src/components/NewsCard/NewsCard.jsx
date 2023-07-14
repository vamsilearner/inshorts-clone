import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

function NewsCard({ news, index }) {
  return (
    <div className="newsCard">
      <img src={news.urlToImage} alt={news.title} />
      <div>
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <Link to={`/news/${index}`}>Read more</Link>
      </div>
    </div>
  );
}

export default NewsCard;
