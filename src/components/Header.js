import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Header({ darkMode, setDarkMode }) {
  const handleThemeToggle = () => {
    setDarkMode(!darkMode); // Toggle the theme mode
  };

  return (
    <AppBar position="static" style={{ backgroundColor: darkMode ? '#333' : '#e0f7fa' }}>
      <Toolbar>
        {/* Icon with hover effect */}
        <Icon
          icon="openmoji:sunrise"
          width="40"
          height="40"
          style={{
            marginRight: '10px',
            transition: 'transform 0.3s, filter 0.3s',
          }}
          onClick={() => window.location.href = '/'} // Go to home page on click
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.filter = 'brightness(1.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        />
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: darkMode ? '#fff' : '#333' }}>
          Spiritual Development Program
        </Typography>

        {/* Theme toggle button */}
        <IconButton
          onClick={handleThemeToggle}
          color="inherit"
          sx={{
           marginRight: '16px', // Add spacing between the toggle button and "BECOME A CHAMPION" button
           backgroundColor: darkMode ? '#fff' : '#607d8b', // Background color based on theme
           color: darkMode ? '#607d8b' : '#fff', // Icon color based on theme
           '&:hover': {
            backgroundColor: darkMode ? '#ccc' : '#455a64', // Change background on hover
           },
           borderRadius: '50%', // Round button shape
           padding: '8px', // Increase button size slightly
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
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          BECOME A CHAMPION
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;