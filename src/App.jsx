import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import NotFound from './Components/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> {' | '}
          <Link to="/about">About</Link> {' | '}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 route must be at the bottom */}
         
          <Route path='*' element= {<NotFound />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;