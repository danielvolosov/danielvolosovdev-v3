import React from "react";
import Home from "./composite/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./App.css";

function App() {
  return <Home />;
}

export default App;
