import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define styles for the button in a more readable way
const buttonStyles = {
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

// Event handler for mouse enter
const onMouseEnterHandler = (event) => {
  event.currentTarget.style.transform = 'translateY(-2px)';
  event.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
};

// Event handler for mouse leave
const onMouseLeaveHandler = (event) => {
  event.currentTarget.style.transform = 'translateY(0)';
  event.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
};

const CoursesButton = () => (
  <Button
    variant="contained"
    color="primary"
    endIcon={<ArrowForwardIcon />}
    style={buttonStyles} // Using predefined button styles
    onMouseEnter={onMouseEnterHandler} // Applying hover effect
    onMouseLeave={onMouseLeaveHandler} // Reverting hover effect
  >
    OUR COURSES
  </Button>
);

export default CoursesButton;