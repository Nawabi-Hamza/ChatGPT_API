import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Component/Navbar';
import React from 'react';
import TextGPT from './Component/TextGPT';
import "./App.css"
import WebGPT from './Component/WebGPT';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route path="/" element={<TextGPT/>}/>
          <Route path="/Web" element={<WebGPT/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

