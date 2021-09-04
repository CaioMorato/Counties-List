// vitals
import CountriesProvider from './context/CountriesProvider';
// components
import Routes from './Routes';
// styles
import './css/main.css';

function App() {
  return (
    <CountriesProvider>
      <Routes />
    </CountriesProvider>
  );
}

export default App;
