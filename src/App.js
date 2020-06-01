import React from 'react';
import Header from './components/Header';
import './App.css';
import {
  Box
} from 'rebass'

function App() {
  return (
    <Box
  sx={{
    maxWidth: 512,
    mx: 'auto',
    px: 3,
  }}>
    <div className="App">
      <Header />
    </div>
</Box>
  );
}

export default App;
