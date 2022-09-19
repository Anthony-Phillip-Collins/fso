import axios from 'axios';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value.trim());
  };

  const filteredCountries = () => {
    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(search.toLowerCase()) === 0
    );
  };

  const filtered = filteredCountries();

  return (
    <>
      <div>
        find countries <input value={search} onChange={onSearchChange} />
      </div>
      <div>
        {filtered.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <Countries countries={filtered} />
        )}
      </div>
    </>
  );
};

export default App;
