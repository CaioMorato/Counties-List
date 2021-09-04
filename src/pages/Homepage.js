// vitals
import React, { useContext } from 'react';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { FaSearch } from 'react-icons/fa';

function Homepage() {
  const { darkTheme } = useContext(MyContext);
  return (
    <main className={darkTheme ? 'main-dark' : 'main-light'}>
      <Header />
      <section>
        <div className="search-filter-container">
          <div className="search-container">
            <FaSearch />
            <input type="text" placeholder="Search for a country..." />
          </div>
          <div className="filter-container">
            <select name="filter-options" id="filter-options">
              <option value="" disabled selected hidden>
                Filter By Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="countries-container">Countries List</div>
      </section>
    </main>
  );
}

export default Homepage;
