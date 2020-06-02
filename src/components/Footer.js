import React from 'react';
import {
    Box,
    Flex,
  } from 'rebass';

function Footer() {
    return (
<Flex
    py={3}
  px={5}
  color='white'
  bg='black'
  alignItems='center'>
<div>© {(new Date().getFullYear())} Daniel Volosov</div>  <Box mx='auto' />
</Flex>
    );
  }
  
  export default Footer;