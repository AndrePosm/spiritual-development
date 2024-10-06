import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e0f7fa' }}> {/* Нежный светло-голубой фон */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: '#333' }}>
          Spiritual Development Program
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;