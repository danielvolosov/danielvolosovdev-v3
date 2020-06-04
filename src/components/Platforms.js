import React from "react";
import "./Platforms.css";
import {Flex, Image, Card} from "rebass";

import * as siteConstants from "../shared/Constants";

const mediaLinks = [
 twitter = siteConstants.TWITTER,
 linkedin = siteConstants.LINKEDIN,
 github = siteConstants.GITHUB,
 instagram = siteConstants.INSTAGRAM,
 facebook = siteConstants.FACEBOOK,
 reddit = siteConstants.REDDIT
];

const socialMediaIcons = [
  require("../shared/icons/twitter.svg"),
  require("../shared/icons/linkedin.svg"),
  require("../shared/icons/github.svg"),
  require("../shared/icons/instagram.svg"),
  require("../shared/icons/facebook.svg"),
  require("../shared/icons/reddit.svg"),
];

export const socialMedia = [
  {
    id: 1,
    mediaLink: mediaLinks[0],
    src: socialMediaIcons[0],
  },
  {
    id: 2,
    mediaLink: mediaLinks[1],
    src: socialMediaIcons[1],
  },
  {
    id: 3,
    mediaLink: mediaLinks[2],
    src: socialMediaIcons[2],
  },
  {
    id: 4,
    mediaLink: mediaLinks[3],
    src: socialMediaIcons[3],
  },
  {
    id: 5,
    mediaLink: mediaLinks[4],
    src: socialMediaIcons[4],
  },
  {
    id: 6,
    mediaLink: mediaLinks[5],
    src: socialMediaIcons[5],
  },
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
        {socialMedia.map((p) => {
          return <a href={p.mediaLink}><Image key={p.id} src={p.src} alt="Picture unavailable" /></a>;
        })}
      </Card>
    </Flex>
  );
}

export default Platforms;
