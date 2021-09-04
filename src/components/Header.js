// vitals
import React, { useContext } from 'react';
// styles
import { FaMoon, FaSun } from 'react-icons/fa';
import MyContext from '../context/MyContext';

function Header() {
  const { darkTheme, setDarkTheme } = useContext(MyContext);

  return (
    <header className={darkTheme ? 'header-dark' : 'header-light'}>
      <h2>Where in the world?</h2>
      <div>
        <input type="checkbox" className="toggle-input" name="toggle-input" id="toggle-input" onClick={() => setDarkTheme(!darkTheme)} />
        <label htmlFor="toggle-input" className="toggle-label">
          <FaSun color="#f1c40f" />
          <FaMoon color="#f1c40f" />
          <div className="ball"></div>
        </label>
      </div>
    </header>
  );
}

export default Header;
