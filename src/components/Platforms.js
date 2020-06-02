import React from 'react';
import './Platforms.css';
import {
    Flex,
    Image, 
    Card,
    Text
  } from 'rebass';

function Platforms() {
    return (
<Flex py={3}>
  <Card sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
    <Image src={require('../shared/icons/twitter.svg')} />
  </Card>
  <Card  sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
  <Image src={require('../shared/icons/linkedin.svg')} />
  </Card>
  <Card  sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
  <Image src={require('../shared/icons/youtube.svg')} />
  </Card>
  <Card  sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
  <Image src={require('../shared/icons/instagram.svg')} />
  </Card>
  <Card  sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
  <Image src={require('../shared/icons/facebook.svg')} />
  </Card>
  <Card  sx={{
    display: 'inline-block',
    bg: 'black'}} width={[ 256, 256 ]} mx='auto'>
  <Image src={require('../shared/icons/reddit.svg')} />
  </Card>
</Flex>
    );
  }
  
  export default Platforms;