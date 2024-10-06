import React from 'react';
import { Button } from '@mui/material';

function PurchaseButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#0056b3',
        },
        fontSize: '16px',
        borderRadius: '8px',
      }}
    >
      GET A HUG
    </Button>
  );
}

export default PurchaseButton;