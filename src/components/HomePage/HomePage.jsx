import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
// import CategoryFilter from '../CategoryFilter/CategoryFilter';
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState("business");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a92ef9b544ed4787b9d7c43c0693c154`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        setNewsList(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
    localStorage.setItem("category", category);
  }, [category]);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar setCategory={setCategory} />
      <div className="homePage">
        <div className="newsList">
          {newsList.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
