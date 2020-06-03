import React from "react";
import "./Platforms.css";
import {Flex, Image, Card} from "rebass";

import * as siteConstants from "../shared/Constants";

  const twitter = siteConstants.TWITTER;
  const linkedin = siteConstants.LINKEDIN;
  const github = siteConstants.GITHUB;
  const instagram = siteConstants.INSTAGRAM;
  const facebook = siteConstants.FACEBOOK;
  const reddit = siteConstants.REDDIT;

  const socialMediaIcons = [
  require("../shared/icons/twitter.svg"),
  require("../shared/icons/linkedin.svg"),
  require("../shared/icons/github.svg"),
  require("../shared/icons/instagram.svg"),
  require("../shared/icons/facebook.svg"),
  require("../shared/icons/reddit.svg")
  ];

  export const socialMedia = [
    {
      id: 1,
      name: "Twitter",
      src: socialMediaIcons[0]
    },
    {
      id: 2,
      name: "Linkedin",
      src: socialMediaIcons[1]
    },
    {
      id: 3,
      name: "Github",
      src: socialMediaIcons[2]
    },
    {
      id: 4,
      name: "Instagram",
      src: socialMediaIcons[3]
    },
    {
      id: 5,
      name: "Facebook",
      src: socialMediaIcons[4]
    },
    {
      id: 6,
      name: "Reddit",
      src: socialMediaIcons[5]
    }
  ];

function Platforms() {

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
          {socialMedia.map(p => {
            return <img key={p.id} src={p.src} alt="Picture unavailable" />;
          })}
      </Card>
      
    </Flex>
  );
}

export default Platforms;
