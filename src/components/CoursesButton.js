import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Predefined styles for the button
const standardPrimaryButtonStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px 24px',
  fontSize: '16px',
  borderRadius: '12px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

// Hover effect when mouse enters the button
const applyHoverEffect = (e) => {
  e.currentTarget.style.transform = 'translateY(-2px)';
  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
};

// Reverting hover effect when mouse leaves the button
const revertHoverEffect = (e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

const CoursesButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<ArrowForwardIcon />}
      style={standardPrimaryButtonStyles}  // Using predefined button styles
      onMouseEnter={applyHoverEffect}  // Applying hover effect
      onMouseLeave={revertHoverEffect}  // Reverting hover effect
    >
      OUR COURSES
    </Button>
  );
};

export default CoursesButton;