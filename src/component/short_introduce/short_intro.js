import React from "react";
import ShortIntroduceImg from "../../assets/home-introduce.jpg";
import "./short_intro.css";

export default function short_intro() {
  return (
    <div className="short-introduce">
      <div className="image-introduce">
        <img src={ShortIntroduceImg}></img>
      </div>
      <div className="content-introduce">
        <div className="title-introduce">DALAT'S COFFEE</div>
        <p>
          Da Lat's coffee culture is a harmonious blend of tradition and
          innovation. With its fertile soil and favorable climate, the region
          produces some of the finest Arabica coffee beans in Vietnam. The
          journey of coffee in Da Lat begins with the meticulous cultivation of
          coffee plants on the terraced hillsides, where farmers carefully
          nurture their crops with dedication and expertise.<br></br>
          What truly sets Da Lat's coffee scene apart is its charming cafes and
          quaint coffee shops scattered throughout the city. Here, amidst the
          verdant surroundings and rustic architecture, one can savor a freshly
          brewed cup of coffee while immersing in the laid-back ambiance and
          tranquil beauty of Da Lat.
        </p>
      </div>
    </div>
  );
}
