import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";
import Layout from "../HOCs/Layout";
import "./news.scss";

function NewsList() {
  const [news, setNews] = useState("");
  const [message, setMessage] = useState("");
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  const { Meta } = Card;
  const { t } = useTranslation();
  const getNews = () => {
    axios
      .get(
        `https://article-json-server.herokuapp.com/articles?fbclid=IwAR1LyDOlMdYywPDMFRjd66iotH8muXpQ72f7G-KxsFFzYSzM9QeI6JRmAr0`
      )
      .then((res) => {
        setNews(res.data);
        setIsLocalLoading(false);
      })
      .catch((err) => {
        setMessage("Error get data");
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
      {isLocalLoading ? (
        <div className="example">
          <Spin />
        </div>
      ) : (
        <div className="news__item">
          <div
            className="news__title"
            component="h2"
            style={{ fontWeight: "bold", margin: 10 }}
          >
            {t("News.Title")}
          </div>
          <div className="news__content">{renderNewsItem()}</div>
        </div>
      )}
    </>
  );
}

export default Layout(NewsList);
