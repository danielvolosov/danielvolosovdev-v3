import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import {
  Box
} from 'rebass'

function App() {
  return (
    <div className="webFrame">
    <Box
  sx={{
    maxWidth: 512,
    mx: 'auto',
    px: 3,
  }}>
    <div className="App">
      <Header />
      <Body />
    </div>
</Box>
</div>
  );
}

export default App;
