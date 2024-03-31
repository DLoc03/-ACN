import React from "react";
import "./quiz_home.css";
import Happy from "../../assets/happy-icon.png";
import Location from "../../assets/location-icon.png";
import Rate from "../../assets/rate-icon.png";
import Peace from "../../assets/inner-peace-icon.png";

export default function quiz_home() {
  return (
    <div className="quiz-container">
      <div className="quiz-title">WHERE'S THE COFFEE TODAY?</div>

      <div className="box-quiz">
        <div className="box quiz-1">
          <img src={Location}></img>
          <div className="quiz-content">
            <div className="box-quiz-title">Near the center of Dalat city</div>
            <p>Can find a cafe around Xuan Huong Lake</p>
          </div>
        </div>

        <div className="box quiz-2">
          <img src={Rate}></img>
          <div className="quiz-content">
            <div className="box-quiz-title">"Nice" View</div>
            <p>
              Of course. Going to coffee must have a chill view. Let's see the
              cafe with any quality view !!!
            </p>
          </div>
        </div>

        <div className="box quiz-3">
          <img src={Happy}></img>
          <div className="quiz-content">
            <div className="box-quiz-title">High Rate</div>
            <p>
              The quality of beverage as well as the service is highly
              appreciated.
            </p>
          </div>
        </div>

        <div className="box quiz-4">
          <img src={Peace}></img>
          <div className="quiz-content">
            <div className="box-quiz-title">Inner Peace</div>
            <p>
              A peaceful atmosphere can feel from the charming bitter taste of
              coffee cup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
