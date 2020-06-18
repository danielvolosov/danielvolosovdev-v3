import React from "react";
import "./Header.css";
import {Box, Flex} from "rebass";

import {BrowserRouter as Router, Link} from "react-router-dom";

import * as siteConstants from "../../shared/Constants";

function Header() {
  const nameContent = siteConstants.NAME;

  return (
    <Flex className="header" px={1} color="white" bg="black" alignItems="center">
      <h1 variant="nav" href="#">
        > {nameContent}
        <span className="blinking">_</span>
      </h1>
      <Box mx="auto" />
      <div className="emailBlogContainer">
        <Router>
        <Link to="/" className="emailBlogText">
            home
          </Link>
          <Link to="/blog" className="emailBlogText">
            blog
          </Link>
        </Router>
      </div>
    </Flex>
  );
}

export default Header;
