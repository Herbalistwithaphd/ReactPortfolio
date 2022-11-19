import React from 'react';
import './index.css'
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Skills from "./routes/Skills"
import Contact from "./routes/Contact"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom"

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
