import React from 'react';
import './App.css';
import { DayPage } from './features/DayPage';
import { MainPage } from './features/MainPage/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/dayPage' element={<DayPage/>}/>
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
