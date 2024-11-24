import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Sidebar({ menuOpen, toggleMenu, darkMode }) {
  return (
    <div>
      {/* Sidebar menu with smooth transition */}
      <div className={`sidebar ${menuOpen ? 'open' : ''} ${darkMode ? 'dark-mode' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              <Icon icon="material-symbols:home" className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={toggleMenu}>
              <Icon icon="material-symbols:book" className="icon" />
              Courses
            </Link>
          </li>
          <li>
            <Link to="/breath-bobble" onClick={toggleMenu}>
              <Icon icon="mdi:meditation" className="icon" />
              Breath Bubble
            </Link>
          </li>
          <li>
            <Link to="/test-and-learn" onClick={toggleMenu}>
              <Icon icon="material-symbols:quiz" className="icon" />
              Test and Learn
            </Link>
          </li>
          <li>
            <Link to="/success-guide" onClick={toggleMenu}>
              <Icon icon="mdi:flag-checkered" className="icon" />
              Success Guide
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={toggleMenu}>
              <Icon icon="mdi:help-circle-outline" className="icon" />
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;