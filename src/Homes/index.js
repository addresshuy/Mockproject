import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card } from "antd";
import Layout from "../HOCs/Layout";
import "./news.scss";

function NewsList() {
  const [news, setNews] = useState("");
  const [message, setMessage] = useState("");
  const { Meta } = Card;
  const getNews = () => {
    axios
      .get(
        `https://article-json-server.herokuapp.com/articles?fbclid=IwAR1LyDOlMdYywPDMFRjd66iotH8muXpQ72f7G-KxsFFzYSzM9QeI6JRmAr0`
      )
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        setMessage("Loading!");
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
        <div>
          <Card
            hoverable
            style={{ width: 300, marginTop: 5 }}
            cover={<img src={item.urlToImage} alt={"img"} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </div>
      );
    });
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className="news__item">
        
        <div
          className="news__title"
          component="h2"
          style={{ fontWeight: "bold", margin: 10 }}
        >
          COVID-19 NEWS
        </div>
        <div className="news__content">{renderNewsItem()}</div>
      </div>
    </>
  );
}

export default Layout(NewsList);
