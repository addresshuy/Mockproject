import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Layout from "../HOCs/Layout";
import "./news.scss";

function NewsList() {
  const [news, setNews] = useState("");
  const [pagination, setPagination] = useState(1);
  const [message, setMessage] = useState("");

  const handlePagination = (e) => {
    setPagination(e.target.textContent);
  };
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
        <div className="news-item">
          <Card key={index}>
            <CardHeader title={item.title} />

            <CardMedia className="news-item__img">
              <img src={item.urlToImage} alt={"img"} />
            </CardMedia>
            <div className="news-item__content">
              <CardContent className="content__description">
                {item.description}
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="show more"></IconButton>
              </CardActions>
            </div>
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
    <div className="news-list-container">
      <div className="news-list">
        <Typography component="h2">COVID-19 NEWS</Typography>
        {renderNewsItem()}
        {/* <div className="news-list__pagination">
          <Pagination count={10} color="primary" onChange={handlePagination} />
        </div> */}
      </div>
    </div>
    </>
  );
}

export default Layout(NewsList);
