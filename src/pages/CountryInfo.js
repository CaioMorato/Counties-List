// vitals
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
// components
import Header from '../components/Header';
// context
import MyContext from '../context/MyContext';
// styles
import { HiArrowNarrowLeft } from 'react-icons/hi';

function CountryInfo({ match }) {
  const { darkTheme } = useContext(MyContext);
  const history = useHistory();

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
        <div>Info do país</div>
      </section>
    </main>
  );
}

export default CountryInfo;
