import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Icon icon="material-symbols:home" className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <Icon icon="material-symbols:book" className="icon" />
            Courses
          </Link>
        </li>
        <li>
          <Link to="/breath-bobble">
            <Icon icon="mdi:meditation" className="icon" />
            Breath Bobble
          </Link>
        </li>
        <li>
          <Link to="/test-and-learn">
            <Icon icon="material-symbols:quiz" className="icon" />
            Test and Learn
          </Link>
        </li>
        <li>
          <Link to="/success-guide">
            <Icon icon="mdi:flag-checkered" className="icon" />
            Success Guide
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <Icon icon="mdi:help-circle-outline" className="icon" />
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;