import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/breath-bobble">Breath Bobble</Link></li>
        <li><Link to="/test-and-learn">Test and Learn</Link></li>
        <li><Link to="/success-guide">Success Guide</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;