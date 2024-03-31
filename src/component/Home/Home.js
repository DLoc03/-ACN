import TopNav from "../top-nav/topNav";
import Footer from "../footer/footer";
import "./Home.css";
import Video from "../Video_BG/video_bg";
import ShortIntroduce from "../short_introduce/short_intro";
import QuizHome from "../quiz_home/quiz_home";
import RecommandList from "../recommand_list/recommand_list";
import Book_coffee_list from "../book_coffee_list/book_coffee_list";
import NewsList from "../news_list/news_list";
import React from "react";

export default function () {
  return (
    <div className="home-container">
      <div className="header">
        <TopNav />
      </div>

      <div className="video-bg">
        <Video />
      </div>

      <div className="short-intro">
        <ShortIntroduce />
      </div>

      <div className="main-container">
        <div className="quiz-home">
          <QuizHome />
        </div>

        <div className="recommand-home">
          <RecommandList />
        </div>
      </div>

      <div className="cf-scroll-home">
        <div className="home-title">BOOK COFFEE DALAT</div>
        <Book_coffee_list />
      </div>

      <div className="news-list-home">
        <div className="home-title">COFFEE NEWS</div>
        <NewsList />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
