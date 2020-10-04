import React from "react";
import Body from "../../components/body/Body";
import Platforms from "../../components/platforms/Platforms";
import Contact from "../../components/contact/Contact";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./HomeView.css";

function HomeView() {
  return (
    <div>
      <Header />
      <Body />
      <Platforms />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomeView;
