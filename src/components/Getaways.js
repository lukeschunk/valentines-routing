import React from "react";
import { Route, Link } from "react-router-dom";

export function Getaways({ match }) {
  return (
    <div>
      <Link to={`${match.path}/italy`}>
        <img src="https://c.o0bg.com/rf/image_460w/Boston/2011-2020/2017/05/30/BostonGlobe.com/ReceivedContent/Images/DSC_0433(1).jpg" />
      </Link>
      <Route component={Italy} path={`${match.path}/italy`} />
      <Link to={`${match.path}/newzealand`}>
        <img src="http://romanticgetawaytravel.com/wp-content/uploads/pool.jpg" />
      </Link>
      <Route component={NewZealand} path={`${match.path}/newzealand`} />
    </div>
  );
}

function Italy() {
  return <div style={{ fontSize: 40 }}>Info About Italy</div>;
}

function NewZealand() {
  return <div style={{ fontSize: 40 }}>Info About NEW ZEEEEALAND</div>;
}
