// vitals
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { HiArrowNarrowLeft } from 'react-icons/hi';

function CountryInfo({ match }) {
  const [country, setCountryData] = useState({});
  const { darkTheme } = useContext(MyContext);
  const history = useHistory();

  useEffect(() => {
    const requestData = async () => {
      const fetchAPI = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.code}`);
      const countryJSON = await fetchAPI.json();
      setCountryData(countryJSON);
    };

    requestData();
  }, []);

  return (
    <main className={darkTheme ? 'main-dark' : 'main-light'}>
      <Header />
      <section>
        <div>
          <button
            type="button"
            onClick={() => history.push('/')}
            className={`${darkTheme ? 'button-dark' : 'button-light'} back-button`}
          >
            <HiArrowNarrowLeft />
            Back
          </button>
        </div>
        <div className="countryinfo-data">
          <div className="countryinfo-flag-container">
            <img src={country.flag} alt={`Bandeira do país ${country.name}`} />
          </div>
          <div className="countryinfo-info-container">
            <h2>{country.name}</h2>
            <div className="countryinfo-specifics">
              <div className="general-info left-side-info">
                <p>Native Name:</p>
                <p>Population:</p>
                <p>Region:</p>
                <p>Sub Region:</p>
                <p>Capital:</p>
              </div>
              <div className="general-info right-side-info">
                <p>Top Level Domain:</p>
                <p>Currencies:</p>
                <p>Languages:</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CountryInfo;
