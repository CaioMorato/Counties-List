// vitals
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
// context
import MyContext from '../context/MyContext';

function GeneralInfoCard({ country }) {
  const { darkTheme } = useContext(MyContext);
  const history = useHistory();
  return (
    <div className="countryinfo-info-container">
      <h2>{country.name}</h2>
      <div className="countryinfo-specifics">
        <div className="general-info left-side-info">
          <p>
            Native Name: <span>{country.nativeName}</span>
          </p>
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Sub Region: <span>{country.subregion}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
        <div className="general-info right-side-info">
          <p>
            Top Level Domain:{' '}
            {country.topLevelDomain.map((info) => (
              <span>{info}</span>
            ))}
          </p>
          <p>
            Currencies:{' '}
            {country.currencies.map((info) => (
              <span>{info.name}</span>
            ))}
          </p>
          <p>
            Languages:{' '}
            {country.languages.map((info) => (
              <span>{info.name}</span>
            ))}
          </p>
        </div>
      </div>
      <div className="border-info">
        <p>
          Border Countries:{' '}
          {country.borders.map((info) => (
            <button
              type="button"
              className={`${darkTheme ? 'button-dark' : 'button-light'} border-button`}
              onClick={() => history.push(process.env.PUBLIC_URL + `/country/${info}/`)}
            >
              {info}
            </button>
          ))}
        </p>
      </div>
    </div>
  );
}

export default GeneralInfoCard;
