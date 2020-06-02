import React from 'react';
import {
    Box,
    Flex,
    Text
  } from 'rebass';

function Body() {
    return (
<div classname="flexPadding">
<Flex mx={-2}>
  <Box width={2/2} px={2} py={3}>
    <Text p={1} color='background' bg='black'>
    Software Engineer with 3+ years as a consultant. In the private sector, Daniel has developed software for several different industries including health insurance, wholesale distribution, tech startups and restaurant chains. He is experienced with building global applications for organizations ranging from the largest global insurance provider, to a small cutting-edge startup. Daniel is currently working in the federal sector.
    </Text>
  </Box>
</Flex>
</div>
    );
  }
  
  export default Body;