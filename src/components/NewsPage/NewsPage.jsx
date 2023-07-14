import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewsPage.css";

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=a92ef9b544ed4787b9d7c43c0693c154`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        const newsItem = data.articles[id];
        setNews(newsItem);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="newsPage">
      {news ? (
        <>
          <img src={news.urlToImage} alt={news.title} />
          <h1>{news.title}</h1>
          <p>{news.content}</p>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            Read full story
          </a>
        </>
      ) : (
        <p>No news found.</p>
      )}
    </div>
  );
}

export default NewsPage;
