// vitals
import React, { useContext, useState } from 'react';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { FaSearch } from 'react-icons/fa';
import CountryCard from '../components/CountryCard';

function Homepage() {
  const { darkTheme, countriesList } = useContext(MyContext);
  const [filterBySearch, setFilterBySearch] = useState('');
  const [filterByRegion, setFilterByRegion] = useState('');

  const handleSearch = ({ target }) => {
    setFilterBySearch(target.value);
  };

  const handleChange = ({ target }) => {
    setFilterByRegion(target.value);
  };

  return (
    <main className={darkTheme ? 'main-dark' : 'main-light'}>
      <Header />
      <section>
        <div className="search-filter-container">
          <div className="search-container">
            <FaSearch />
            <input type="text" placeholder="Search for a country..." onChange={handleSearch} />
          </div>
          <div className="filter-container">
            <select
              name="filter-options"
              id="filter-options"
              value={filterByRegion}
              onChange={(evt) => handleChange(evt)}
            >
              <option value="" defaultValue>
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
            ? countriesList
                .filter((country) => country.name.toLowerCase().includes(filterBySearch))
                .filter((country) => country.region.includes(filterByRegion))
                .map(({ flag, name, population, region, capital }) => (
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
