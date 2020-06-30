import React from "react";
import HomeView from "./composite/home-view/HomeView";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {Box} from "rebass";

import "./App.css";

function App() {
  return (
    <div className="webFrame">
      <Box
        sx={{
          maxWidth: 912,
          mx: "auto",
          px: 3,
        }}
      >
        <div className="App">
          <Header />
          <HomeView />
          <Footer />
        </div>
      </Box>
    </div>
  );
}

export default App;
