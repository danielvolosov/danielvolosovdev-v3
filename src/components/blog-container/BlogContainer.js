import React from "react";
import {Box, Flex, Text} from "rebass";

import "./BlogContainer.css";

function BlogContainer() {

  return (
    <div>
<Box
  sx={{
    maxWidth: 512,
    mx: 'auto',
    px: 3,
  }}>
  Its a blog!
</Box>
    </div>
  );
}

export default BlogContainer;