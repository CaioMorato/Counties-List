// vitals
import React from 'react';
// styles
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h2>Where in the world?</h2>
      <div>
        <input type="checkbox" className="toggle-input" name="toggle-input" id="toggle-input" />
        <label htmlFor="toggle-input" className="toggle-label">
          <FiSun color="#f39c12" />
          <FaMoon color="#f1c40f" />
          <div className="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
