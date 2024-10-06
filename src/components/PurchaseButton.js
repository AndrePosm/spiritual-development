import React from 'react';
import { Button } from '@mui/material';

function PurchaseButton() {
  return (
    <Button
      variant="contained"
      sx={{
        position: 'absolute',
        top: '20px', // Расположение сверху
        right: '20px', // Расположение справа
        backgroundColor: '#5F9EA0', // Темный мятный цвет
        color: 'white',
        '&:hover': {
          backgroundColor: '#4682B4', // Более насыщенный оттенок при наведении
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
  );
}

export default PurchaseButton;