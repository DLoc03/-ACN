import React from "react";
import RecommandImage from "../recommend_image/recommand_image";
import "./recommand_list.css";

export default function Recommand_list() {
  return (
    <div className="recommand-container">
      <div className="recommand-column-1">
        <div className="item recommand-1">
          <RecommandImage />
        </div>
        <div className="item recommand-2">
          <RecommandImage />
        </div>
        <div className="item recommand-3">
          <RecommandImage />
        </div>
      </div>

      <div className="recommand-column-2">
        <div className="item recommand-4">
          <RecommandImage />
        </div>
        <div className="item recommand-5">
          <RecommandImage />
        </div>
        <div className="item recommand-6">
          <RecommandImage />
        </div>
      </div>
    </div>
  );
}
