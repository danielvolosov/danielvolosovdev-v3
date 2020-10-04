import React from "react";
import "./Header.css";
import {Box, Flex, Link as RebassLink} from "rebass";
import {Link as ReactLink, BrowserRouter as Router} from "react-router-dom";

import * as siteConstants from "../../shared/Constants";

function Header() {
  const nameContent = siteConstants.NAME;

  return (
    <Flex
      className="header headerContainer"
      px={1}
      color="white"
      bg="black"
      alignItems="center"
    >
      <h1 variant="nav" href="#">
        > {nameContent}
        <span className="blinking">_</span>
      </h1>
      <Box mx="auto" />
      <Router>
        <div className="links">
            <RebassLink variant='nav' sx={{fontSize: 2, color: 'primary'}}>
              <ReactLink to="/">/home</ReactLink>
            </RebassLink>
            <RebassLink variant='nav' sx={{fontSize: 2}}>
              <ReactLink to="/uses">/uses</ReactLink>
            </RebassLink>
        </div>
      </Router>
    </Flex>
  );
}

export default Header;
