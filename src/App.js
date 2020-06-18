import React from "react";
import HomeView from "./composite/home-view/HomeView";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {Box} from "rebass";

import "./App.css";
import BlogView from "./composite/blog-view/BlogView";

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
          <Router>
      <Switch>
          <Route path="/">
            <HomeView />
          </Route>
          <Route path="/blog">
            <BlogView />
          </Route>
    </Switch>
    </Router>
          <Footer />    
    </div>
      </Box>
    </div>
  );
}

export default App;
