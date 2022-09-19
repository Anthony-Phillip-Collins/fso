import axios from 'axios';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import Search from './components/Search';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

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

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <>
      <Search value={search} onChange={onSearchChange} />
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
