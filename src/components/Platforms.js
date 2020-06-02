import React from "react";
import "./Platforms.css";
import {Flex, Image, Card} from "rebass";

import * as siteConstants from "../shared/Constants";

function Platforms() {
  
  const twitter = siteConstants.TWITTER;
  const linkedin = siteConstants.LINKEDIN;
  const github = siteConstants.GITHUB;
  const instagram = siteConstants.INSTAGRAM;
  const facebook = siteConstants.FACEBOOK;
  const reddit = siteConstants.REDDIT;

  return (
    <Flex py={3}>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={twitter} target="_blank">
          <Image src={require("../shared/icons/twitter.svg")} />
        </a>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={linkedin} target="_blank">
          <Image src={require("../shared/icons/linkedin.svg")} />
        </a>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={github} target="_blank">
          <Image src={require("../shared/icons/github.svg")} />
        </a>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={instagram} target="_blank">
          <Image src={require("../shared/icons/instagram.svg")} />
        </a>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={facebook} target="_blank">
          <Image src={require("../shared/icons/facebook.svg")} />
        </a>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          bg: "black",
        }}
        width={[256, 256]}
        mx="auto"
      >
        <a href={reddit} target="_blank">
          <Image src={require("../shared/icons/reddit.svg")} />
        </a>
      </Card>
    </Flex>
  );
}

export default Platforms;
