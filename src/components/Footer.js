import React from 'react';
import {
    Box,
    Flex,
    Heading
  } from 'rebass';

function Footer() {
    return (
<Flex
  color='white'
  bg='black'
  alignItems='center'>
    <Box width={3/3}>
      <Heading  py={4} px={7} fontSize={[ 2, 1 ]}
>
<div>© {(new Date().getFullYear())} Daniel Volosov</div>  <Box mx='auto' /></Heading>
</Box>
</Flex>
    );
  }
  
  export default Footer;