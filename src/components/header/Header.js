import React from "react";
import "./Header.css";
import {Box, Flex, Link as RebassLink} from "rebass";
import {
  Link as ReactLink,
  BrowserRouter as Router
} from "react-router-dom";

import * as siteConstants from "../../shared/Constants";

function Header() {
  const nameContent = siteConstants.NAME;

  return (
    <Flex className="header headerContainer" px={1} color="white" bg="black" alignItems="center">
      <h1 variant="nav" href="#">
        > {nameContent}
        <span className="blinking">_</span>
      </h1>
      <Box mx="auto" />
      <Router>
      <div className="links">
      <div className="linkItem"><RebassLink variant='nav'><ReactLink to="/">/home</ReactLink></RebassLink></div>
      <div className="linkItem"><RebassLink variant='nav'><ReactLink to="/uses">/uses</ReactLink></RebassLink></div>
      </div>
      </Router>
    </Flex>
  );
}

export default Header;
