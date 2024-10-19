import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Icon for close

function Header({ darkMode, setDarkMode, menuOpen, toggleMenu }) {
  // Toggle theme (light/dark)
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <AppBar position="static" style={{ backgroundColor: darkMode ? '#333' : '#e0f7fa', boxShadow: 'none' }}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          {/* Menu icon that changes to a cross when menu is open */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu} // Trigger toggleMenu from App.js
            style={{ marginRight: '10px' }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />} {/* Change icon based on menu state */}
          </IconButton>

          {/* Title centered */}
          <Typography
            variant="h6"
            component="div"
            style={{
              flexGrow: 1,
              textAlign: 'center',
              color: darkMode ? '#fff' : '#333',
              fontWeight: 'bold',
            }}
          >
            Spiritual Development Program
          </Typography>

          {/* Theme toggle button */}
          <IconButton
            onClick={handleThemeToggle}
            color="inherit"
            sx={{
              marginRight: '16px',
              backgroundColor: darkMode ? '#fff' : '#607d8b',
              color: darkMode ? '#607d8b' : '#fff',
              '&:hover': {
                backgroundColor: darkMode ? '#ccc' : '#455a64',
              },
              borderRadius: '50%',
              padding: '8px',
            }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Become a Champion button */}
          <Button
            variant="contained"
            style={{
              backgroundColor: '#607d8b',
              color: '#fff',
              borderRadius: '20px',
              padding: '5px 15px',
              fontSize: '0.875rem',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            BECOME A CHAMPION
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;