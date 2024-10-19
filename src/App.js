import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import BreathBobble from './pages/BreathBobble';
import TestAndLearn from './pages/TestAndLearn';
import SuccessGuide from './pages/SuccessGuide';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  // Load the theme from localStorage or set it to light by default
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Save the current theme mode in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Create a theme based on the current mode (dark or light)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // State to manage the sidebar visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle sidebar open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This will apply the theme styles across the app */}
      <Router>
        {/* Pass menu state and toggle function to Header and Sidebar */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <Sidebar menuOpen={menuOpen} toggleMenu={toggleMenu} />
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
    </ThemeProvider>
  );
}

export default App;