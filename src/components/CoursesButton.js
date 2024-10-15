import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define styles for the button
const buttonStyle = {
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

// Handle mouse enter event (button hover effect)
const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'translateY(-2px)';
  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
};

// Handle mouse leave event (revert button style)
const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

function CoursesButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      endIcon={<ArrowForwardIcon />}
      style={buttonStyle}  // Apply button styles
      onMouseEnter={handleMouseEnter}  // Apply hover effect on mouse enter
      onMouseLeave={handleMouseLeave}  // Revert hover effect on mouse leave
    >
      OUR COURSES
    </Button>
  );
}

export default CoursesButton;