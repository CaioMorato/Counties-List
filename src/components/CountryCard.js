// vitals
import React from 'react';

function CountryCard({ flag, name, population }) {
  return (
    <div>
      <div>
        <img src={flag} alt={`Bandeira do ${name}`} width="200px" />
      </div>
      <div>{name}</div>
      <div>
        <p>Population: x</p>
        <p>Population: x</p>
        <p>Capital: x</p>
      </div>
    </div>
  );
}

export default CountryCard;
