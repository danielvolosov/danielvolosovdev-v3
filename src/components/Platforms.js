import React from 'react';
import './Platforms.css';
import {
    Box,
    Flex,
    Text
  } from 'rebass';

function Platforms() {
    return (
<Flex mx={-2}>
  <Box width={1/2} px={2} py={4}>
    <Text p={1} color='background' bg='black'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2} py={4}>
    <Text p={1} color='background' bg='black'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2} py={4}>
    <Text p={1} color='background' bg='black'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2} py={4}>
    <Text p={1} color='background' bg='black'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2} py={4}>
    <Text p={1} color='background' bg='black'>
      Half
    </Text>
  </Box>
</Flex>
    );
  }
  
  export default Platforms;