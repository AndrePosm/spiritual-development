import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Icon } from '@iconify/react'; // Import Icon from Iconify

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e0f7fa' }}> {/* Light blue background */}
      <Toolbar>
        {/* Icon that links back to the home page */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Icon icon="openmoji:sunrise" width="40" height="40" style={{ marginRight: '10px' }} /> {/* Icon */}
        </Link>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: '#333' }}>
          Spiritual Development Program
        </Typography>

        <Button
          variant="contained"
          style={{
            backgroundColor: '#607d8b', // Button color
            color: '#fff',
            borderRadius: '20px', // Rounded corners
            padding: '5px 15px', // Button size
            fontSize: '0.875rem', // Text size
            transition: 'transform 0.3s ease', // Smooth transition
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} // Enlarge on hover
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}   // Return to original size
        >
          BECOME A CHAMPION
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;