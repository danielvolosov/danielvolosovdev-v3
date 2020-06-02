import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Platforms from './components/Platforms';
import Footer from './components/Footer';

import './App.css';
import {
  Box
} from 'rebass'

function App() {
  return (
    <div className="webFrame">
    <Box
  sx={{
    maxWidth: 612,
    mx: 'auto',
    px: 3,
  }}>
    <div className="App">
      <Header />
      <Body />
      <Platforms />
      <Footer />
    </div>
</Box>
</div>
  );
}

export default App;
