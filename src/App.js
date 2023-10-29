import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

