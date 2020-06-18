import React from "react";
import {Box, Flex, Text} from "rebass";

import "./Blog.css";
import * as siteConstants from "../../shared/Constants";

function Blog() {
  const bodyContent = siteConstants.BODY;
  const hobbyContent = siteConstants.BODY_HOBBIES;

  return (
    <div>
      <Flex mx={-2}>
        <Box width={2 / 2} px={2} py={3}>
          <Text p={1} color="background" bg="black">
            <span className="body">{bodyContent}</span>
          </Text>
        </Box>
        <Box width={2 / 2} px={2} py={3}>
          <Text p={1} color="background" bg="black">
            <span className="body">{hobbyContent}</span>
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Blog;