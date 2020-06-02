import React from 'react';
import {
    Box,
    Flex,
    Text
  } from 'rebass';

import './Body.css';

import * as siteConstants from '../shared/Constants';

function Contact() {
    const contact = siteConstants.CONTACT;

    return (
<div>
<Flex alignItems='center' mx={-2}>
  <Box width={2/2} px={2} py={3}>
    <Text p={1} color='background' bg='black'>
        <span className="body">{ contact }</span>
    </Text>
  </Box>
</Flex>
</div>
    );
  }
  
  export default Contact;