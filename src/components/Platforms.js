import React from "react";
import "./Platforms.css";
import {Flex, Image, Card} from "rebass";

import * as siteConstants from "../shared/Constants";

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
    mediaLink: siteConstants.TWITTER,
    src: socialMediaIcons[0],
  },
  {
    id: 2,
    mediaLink: siteConstants.LINKEDIN,
    src: socialMediaIcons[1],
  },
  {
    id: 3,
    mediaLink: siteConstants.GITHUB,
    src: socialMediaIcons[2],
  },
  {
    id: 4,
    mediaLink: siteConstants.INSTAGRAM,
    src: socialMediaIcons[3],
  },
  {
    id: 5,
    mediaLink: siteConstants.FACEBOOK,
    src: socialMediaIcons[4],
  },
  {
    id: 6,
    mediaLink: siteConstants.REDDIT,
    src: socialMediaIcons[5],
  },
];

function Platforms() {
  return (
    <div className="platformContainer">
      {socialMedia.map((p) => {
        return (
          <div className="platforms">
            <a href={p.mediaLink}>
              <Image key={p.id} src={p.src} alt="Picture unavailable" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Platforms;
