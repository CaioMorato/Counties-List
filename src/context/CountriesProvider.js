// vitals
import React from 'react';
// context
import MyContext from './MyContext';

function CountriesProvider({ children }) {
  return <MyContext.Provider>{children}</MyContext.Provider>;
}

export default CountriesProvider;
