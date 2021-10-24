// vitals
import React, { useEffect, useState } from 'react';
// context
import MyContext from './MyContext';
// import fetchAPI from '../context/fetchAPI';

function CountriesProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const requestCountryList = await fetch('https://restcountries.com/v2/all');
      const countryListJSON = await requestCountryList.json();
      setCountriesList(countryListJSON);
    };
    fetchAPI();
  }, []);

  const globalState = {
    darkTheme,
    setDarkTheme,
    countriesList,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default CountriesProvider;
