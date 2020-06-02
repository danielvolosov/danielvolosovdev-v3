import React from 'react';
import './Header.css';
import {
    Box,
    Flex,
  } from 'rebass';

import * as siteConstants from '../shared/Constants';


function Header() {
  
  const nameContent = siteConstants.NAME;

    return (
<Flex
  className="header"
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <h1 variant='nav' href='#'>> { nameContent }<span className="blinking">_</span></h1>
  <Box mx='auto' />
</Flex>
    );
  }
  
  export default Header;