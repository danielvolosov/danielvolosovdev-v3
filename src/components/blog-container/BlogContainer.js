import React from "react";
import {Box, Flex, Text} from "rebass";

import "./BlogContainer.css";

function BlogContainer() {
  return (
    <div>
      <Box
        sx={{
          maxWidth: 512,
          mx: "auto",
          px: 3,
        }}
      >
        <p className="text">Its a asdfsfdasdfasdfsdfasdfasdfasdf!</p>
      </Box>
    </div>
  );
}

export default BlogContainer;
