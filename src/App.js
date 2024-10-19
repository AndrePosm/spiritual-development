import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import BreathBobble from './pages/BreathBobble';
import TestAndLearn from './pages/TestAndLearn';
import SuccessGuide from './pages/SuccessGuide';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/breath-bobble" element={<BreathBobble />} />
          <Route path="/test-and-learn" element={<TestAndLearn />} />
          <Route path="/success-guide" element={<SuccessGuide />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;