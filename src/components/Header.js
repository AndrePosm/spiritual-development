import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ darkMode, setDarkMode, menuOpen, toggleMenu }) {
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: darkMode ? '#333' : '#e0f7fa', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        
        {/* Sunrise icon with hover effect */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon
            icon="openmoji:sunrise"
            width="40"
            height="40"
            style={{
              marginRight: '10px',
              transition: 'transform 0.3s, filter 0.3s',
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = '/'} // Navigate to homepage on click
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'brightness(1.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          />

          {/* Menu block with icon and text */}
          <div
            onClick={toggleMenu}
            className={`menu-button-wrapper ${darkMode ? 'dark-mode' : ''}`} // Styles for the menu block
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px',
              border: '1px solid transparent',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              backgroundColor: menuOpen ? (darkMode ? '#555' : '#f0f0f0') : 'transparent',
              borderColor: menuOpen ? '#999' : 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = darkMode ? '#555' : '#f0f0f0';
              e.currentTarget.style.borderColor = '#999';
            }}
            onMouseLeave={(e) => {
              if (!menuOpen) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'transparent';
              }
            }}
          >
            {menuOpen ? (
              <CloseIcon style={{ fontSize: '24px', marginRight: '8px', color: darkMode ? '#fff' : '#333' }} />
            ) : (
              <MenuIcon style={{ fontSize: '24px', marginRight: '8px', color: darkMode ? '#fff' : '#333' }} />
            )}
            <Typography
              variant="h6"
              component="div"
              style={{
                color: darkMode ? '#fff' : '#333',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'color 0.3s ease',
              }}
            >
              MENU
            </Typography>
          </div>
        </div>

        {/* Centered title */}
        <Typography
          variant="h6"
          component="div"
          style={{
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: darkMode ? '#fff' : '#333',
            fontWeight: 'bold',
          }}
        >
          Spiritual Development Program
        </Typography>

        {/* Theme toggle button and "Become a Champion" button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;