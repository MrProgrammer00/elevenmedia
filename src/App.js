import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Menutab from './components/Menutab';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menutab />
      <Main />
    </div>
  );
}

export default App;
