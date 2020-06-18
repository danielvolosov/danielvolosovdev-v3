import React from "react";
import Body from "../../components/body/Body";
import Platforms from "../../components/platforms/Platforms";
import Contact from "../../components/contact/Contact";

import "./HomeView.css";

function HomeView() {
  return (
      <div>
          <Body />
          <Platforms />
          <Contact />
          </div>
  );
}

export default HomeView;
