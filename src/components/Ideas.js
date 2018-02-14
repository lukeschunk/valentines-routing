import React from "react";
import { Link } from "react-router-dom";

export function Ideas() {
  return (
    <div>
      <div style={{ fontSize: 20, color: "red" }}>
        Here are some valentines Ideas
      </div>
      <div>Out to dinner</div>
      <div>Movies</div>
      <div>Netflix and Chill</div>
      <Link to="/getaways">
        <div style={{ color: "black" }}>Go on a Romantic Getaway</div>
      </Link>
    </div>
  );
}
