import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e0f7fa' }}> {/* Нежный светло-голубой фон */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: '#333' }}>
          Spiritual Development Program
        </Typography>
        {/* Добавляем кнопку GET A HUG */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#5F9EA0',
            color: 'white',
            '&:hover': {
              backgroundColor: '#4682B4',
            },
            padding: '10px 20px',
            fontWeight: 'bold',
            borderRadius: '8px',
            fontSize: '16px',
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          GET A HUG
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;