// vitals
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { HiArrowNarrowLeft } from 'react-icons/hi';
import GeneralInfoCard from '../components/GeneralInfoCard';

function CountryInfo({ match }) {
  const [country, setCountryData] = useState(false);
  const { darkTheme } = useContext(MyContext);
  const history = useHistory();

  useEffect(() => {
    const requestData = async () => {
      const fetchAPI = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.code}`);
      const countryJSON = await fetchAPI.json();
      setCountryData(countryJSON);
    };

    requestData();
  }, [country]);

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
          {country ? <GeneralInfoCard country={country} /> : 'Viajando ao país'}
        </div>
      </section>
    </main>
  );
}

export default CountryInfo;
