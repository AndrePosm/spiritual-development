import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e0f7fa' }}> {/* Нежный светло-голубой фон */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: '#333' }}>
          Spiritual Development Program
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#607d8b', // Цвет кнопки
            color: '#fff',
            borderRadius: '20px', // Округлые углы
            padding: '5px 15px', // Немного меньше размер
            fontSize: '0.875rem' // Уменьшенный размер текста
          }}
        >
          GET A HUG
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;