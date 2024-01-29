// App.js
import React from 'react';
import PomodoroTimer from './pomodoroTimer';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './home';
import Customise from './customise';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timer' element={<PomodoroTimer/>}/>
        <Route path='/customise' element={<Customise/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
