import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ darkMode, setDarkMode, menuOpen, toggleMenu }) {
  // Переключение темы
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: darkMode ? '#333' : '#e0f7fa' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        
        {/* Объединение иконки и меню */}
        <div 
          onClick={toggleMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: '5px 10px', // Увеличение зоны клика
            borderRadius: '8px', // Сделаем область интерактивной
            '&:hover': {
              backgroundColor: darkMode ? '#555' : '#d0f7fa',
            },
          }}
        >
          {/* Иконка с эффектом наведения */}
          <Icon
            icon="openmoji:sunrise"
            width="40"
            height="40"
            style={{
              marginRight: '10px',
              transition: 'transform 0.3s, filter 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)';
              e.currentTarget.style.filter = 'brightness(1.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          />
          <IconButton edge="start" color="inherit" aria-label="menu">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography style={{ color: darkMode ? '#fff' : '#333', marginLeft: '5px' }}>
            MENU
          </Typography>
        </div>

        {/* Заголовок по центру */}
        <Typography
          variant="h6"
          component="div"
          style={{
            flexGrow: 1,
            textAlign: 'center',
            color: darkMode ? '#fff' : '#333',
            fontWeight: 'bold',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Spiritual Development Program
        </Typography>

        {/* Переключатель темы и кнопка "Become a Champion" */}
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