// vitals
import React, { useContext } from 'react';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { FaSearch } from 'react-icons/fa';
import CountryCard from '../components/CountryCard';

function Homepage() {
  const { darkTheme, countriesList } = useContext(MyContext);

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
              <option value="" disabled defaultValue hidden>
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
        <div className="countries-container">
          {countriesList
            ? countriesList.map(({ flag, name, population, region, capital }) => (
                <CountryCard
                  key={name}
                  flag={flag}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                />
              ))
            : 'Carregando Países'}
        </div>
      </section>
    </main>
  );
}

export default Homepage;
