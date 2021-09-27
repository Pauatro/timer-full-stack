import React from 'react';
import Header from './components/Header'
import './App.css';
import { Timer } from './components/Timer';
import { ThemeProvider } from './modules/theme/theme.context';
import { TimerProvider } from './modules/timer/timer.context';

const App = ()=>{
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <TimerProvider>
          <Timer />
        </TimerProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
