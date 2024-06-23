import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Filter from './components/Filter';
import DisplayFilterValues from './components/DisplayFilterValues';
import { FilterProvider } from './context/FilterContext';

const App = () => {
  return (
    <FilterProvider>
    <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
 <Filter />
        <DisplayFilterValues />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
       
      </main>
      <Footer />
    </div>
  </Router>
  </FilterProvider>
  );
}

export default App;
