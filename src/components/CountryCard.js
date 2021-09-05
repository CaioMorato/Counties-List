// vitals
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
// context
import MyContext from '../context/MyContext';

function CountryCard({ flag, name, population, region, capital }) {
  const { darkTheme } = useContext(MyContext);
  const history = useHistory();

  return (
    <div
      className={`${darkTheme ? 'card-dark' : 'card-light'} country-card`}
      onClick={() => history.push(`/country/${name}`)}
    >
      <div className="flag-container">
        <img src={flag} alt={`Bandeira do ${name}`} />
      </div>
      <div className="info-container">
        <h3>{name}</h3>
        <div>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
