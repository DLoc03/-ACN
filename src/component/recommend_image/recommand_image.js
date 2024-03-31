import React from "react";
import "./recommand_image.css";
import RecommandImage from "../../assets/recommend-list-1.jpg";

export default function Recommand_image() {
  return (
    <div className="recommand-image">
      <div className="avatar-image">
        <img src={RecommandImage}></img>
      </div>
      <div className="title-image">Phoenix Garden</div>
    </div>
  );
}
