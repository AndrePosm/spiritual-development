import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import BreathBobble from './pages/BreathBubble';
import TestAndLearn from './pages/TestAndLearn';
import SuccessGuide from './pages/SuccessGuide';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Добавляем класс dark-mode к основному контейнеру */}
      <div className={darkMode ? 'dark-mode' : ''}>
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} menuOpen={menuOpen} toggleMenu={toggleMenu} />
          {/* Передаем darkMode в Sidebar */}
          <Sidebar menuOpen={menuOpen} darkMode={darkMode} toggleMenu={toggleMenu} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;