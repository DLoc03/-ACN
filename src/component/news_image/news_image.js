import React from "react";
import "./news_image.css";
import ListImage from "../../assets/news-list-1.jpg";

export default function news_image() {
  return (
    <div className="news-image">
      <div className="news-avt-image">
        <img src={ListImage} />
      </div>

      <div className="news-content-background">
        <div className="news-text">
          <div className="news-title">
            MOT COFFEE LAUNCHED THAI MACCHIATO MILK TEA
          </div>

          <div className="news-content">
            <p className="nws-content">
              Behind Mot, actually a very lazy and lowtech girl. Lazy is because
              despite opening the restaurant, she actually does not care about
              the country. For many years, Co Co only made everything according
              to the available formula and the water was just stable enough.
              After 5 years of selling water, she still went to another shop to
              drink water because she liked to drink fat, cream but her neck was
              too lazy to grop. Then naturally a beautiful day, she began to pay
              attention to what she did and the water dish was very new to
              others who were very happy to have been the recipe for her. But
              the joy is not making a dish of water but happy because I have
              been interested in what I have made for more than 5 years. And why
              did she Lowtech? Because this time, some simple designs must know
              and should go to school one more course. Yet she also just groped
              and made itself look so ugly and the countryside. But she is still
              happy. Because everything fits your strength, making itself, no
              matter how small, it is extremely meaningful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
