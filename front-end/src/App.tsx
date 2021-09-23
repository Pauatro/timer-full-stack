import React from 'react';
import Header from './components/Header'
import './App.css';
import Timer from './components/Timer';

const App = ()=>{
  return (
    <div className="App">
      <Header />
      <Timer />
    </div>
  );
}

export default App;
