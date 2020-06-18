import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Platforms from "../../components/platforms/Platforms";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

import {Box, Flex, Text} from "rebass";

import './Home.css';

function Home() {
  return (
    <div className="webFrame">
      <Box
        sx={{
          maxWidth: 912,
          mx: "auto",
          px: 3,
        }}
      >
        <div className="Home">
          <Header />
          <Body />
          <Platforms />
          <Contact />
          <Footer />
        </div>
      </Box>
    </div>
  );
}

export default Home;