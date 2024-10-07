import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ChampionButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<ArrowForwardIcon />}
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '12px 24px',
        fontSize: '16px',
        borderRadius: '12px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        textTransform: 'uppercase',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
    >
      BECOME A CHAMPION
      <span style={{
        position: 'absolute',
        bottom: '-4px',
        left: '50%',
        width: '100%',
        height: '4px',
        backgroundColor: '#FFD700',
        transform: 'translateX(-50%)'
      }} />
    </Button>
  );
}

export default ChampionButton;