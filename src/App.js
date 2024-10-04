import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import PurchaseButton from './components/PurchaseButton';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <PurchaseButton />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;