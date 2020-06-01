import React from 'react';
import './Header.css';
import {
    Box,
    Flex,
  } from 'rebass';

function Header() {
    return (
<Flex
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <h1 variant='nav' href='#'>danielvolosov<span className="blinking">_</span></h1>
  <Box mx='auto' />
</Flex>
    );
  }
  
  export default Header;