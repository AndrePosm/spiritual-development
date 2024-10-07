import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#4caf50', // Зеленый цвет
  color: '#fff',
  padding: '10px 20px',
  fontSize: '18px',
  borderRadius: '30px', // Округленные углы
  transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#388e3c', // Более темный зеленый при наведении
    transform: 'scale(1.05)', // Увеличение кнопки при наведении
  },
});

function ChampionButton() {
  return (
    <CustomButton variant="contained">
      BECOME A CHAMPION
    </CustomButton>
  );
}

export default ChampionButton;