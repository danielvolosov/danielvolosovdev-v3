import React from "react";
import HomeView from "./composite/home-view/HomeView";
import UsesView from "./composite/uses-view/UsesView";
import ErrorView from "./composite/error-view/ErrorView";

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
                <Route exact path="/" component={HomeView} />
                <Route exact path="/home" component={HomeView} />
                <Route exact path="/uses" component={UsesView} />
                <Route component={ErrorView} />
              </Switch>
            </div>
          </Router>
        </div>
      </Box>
    </div>
  );
}

export default App;
