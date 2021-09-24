import React from 'react';
import Header from './components/Header'
import './App.css';
import Timer from './components/Timer';
import { ThemeProvider } from './modules/theme/theme.context';

const App = ()=>{
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Timer />
      </div>
    </ThemeProvider>
  );
}

export default App;
