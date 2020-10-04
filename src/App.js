import React from "react";
import HomeView from "./composite/home-view/HomeView";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

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
          <Router>
            <div>
              <Switch>
                <Route path="/">
                  <Header />
                  <HomeView />
                  <Footer />
                </Route>
                <Route path="/uses">
                  <Header />
                  Fish
                  <Footer />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </Box>
    </div>
  );
}

export default App;
