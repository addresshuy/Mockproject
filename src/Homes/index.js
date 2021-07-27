import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Layout from "../HOCs/Layout";

function NewsList() {
  const [news, setNews] = useState("");
  const [pagination, setPagination] = useState(1);
  const [message, setMessage] = useState("");

  const handlePagination = (e) => {
    setPagination(e.target.textContent);
  };
  const getNews = () => {
    axios(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5b3f9877cd264348976c0f62ea323c9e${pagination}`
    )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        setMessage("Loading!");
        console.log(err);
      });
  };

  const renderNewsItem = () => {
    if (!news) {
      return (
        <h3 style={{ textAlign: "center", marginBottom: 50 }}>{message}</h3>
      );
    }
    return news.map((item, index) => {
      return (
        <div className="news-item" key={index}>
          <div className="news-item__img">
            <img src={item.urlToImage} alt={"img" + index} />
          </div>
          <div className="news-item__content">
            <p>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
            </p>
            <span>{item.description}</span>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="news-list-container">
      <div className="news-list">
        <Typography component="h2">COVID-19 NEWS</Typography>
        {renderNewsItem()}
        <div className="news-list__pagination">
          <Pagination count={10} color="primary" onChange={handlePagination} />
        </div>
      </div>
    </div>
  );
}

export default Layout(NewsList);
