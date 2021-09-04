// vitals
import React, { useState } from 'react';
// context
import MyContext from './MyContext';

function CountriesProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const globalState = {
    darkTheme,
    setDarkTheme,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default CountriesProvider;
