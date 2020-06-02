import React from 'react';
import {
    Box,
    Flex,
    Text
  } from 'rebass';

import * as siteConstants from '../shared/Constants';

function Body() {
    const bodyContent = siteConstants.BODY;
    return (
<div classname="flexPadding">
<Flex mx={-2}>
  <Box width={2/2} px={2} py={3}>
    <Text p={1} color='background' bg='black'>
        { bodyContent }
    </Text>
  </Box>
</Flex>
</div>
    );
  }
  
  export default Body;