import React from "react";
import "./news_list.css";
import NewsImageBox from "../news_image/news_image";

export default function news_list() {
  return (
    <div className="news-list-scroll">
      <div className="nws news-image-scroll-1">
        <NewsImageBox />
      </div>

      <div className="nws news-image-scroll-2">
        <NewsImageBox />
      </div>

      <div className="nws news-image-scroll-3">
        <NewsImageBox />
      </div>

      <div className="nws news-image-scroll-4">
        <NewsImageBox />
      </div>

      <div className="nws news-image-scroll-5">
        <NewsImageBox />
      </div>
    </div>
  );
}
