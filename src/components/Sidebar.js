import React from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

// Define a function for shared Tooltip styles
const tooltipStyles = {
  backgroundColor: 'transparent', // Transparent background
  border: '1px solid #ccf2e5',        // Thin gray border
  color: '#666',                   // Gray text color
  padding: '8px',
  borderRadius: '4px',
  boxShadow: 'none',               // No shadow
  marginLeft: '8px',               // Add margin to the left to avoid overlap
};

function Sidebar() {
  return (
    <ul>
      <li>
        <Tooltip title="Go to the home page" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/">Home</Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Explore our courses" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/courses">Courses</Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Free guided breathing tool" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/breath-bobble">Breath Bobble</Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Test and gain new knowledge" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/test-learn">Test and Learn</Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="A book to achieve goals and build your career" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/success-guide">Success Guide</Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip title="Get answers here" placement="right" componentsProps={{ tooltip: { sx: tooltipStyles } }}>
          <Link to="/faq">FAQ</Link>
        </Tooltip>
      </li>
    </ul>
  );
}

export default Sidebar;