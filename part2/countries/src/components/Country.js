import { useState } from 'react';
import Weather from './Weather';

const ToggleButton = ({ onClick, show }) => (
  <button onClick={onClick} style={{ display: 'inline' }}>
    {show ? 'collapse' : 'expand'}
  </button>
);

const CountryExpanded = ({
  country: {
    area,
    capital,
    flag,
    languages,
    name: { common },
  },
}) => (
  <>
    <h2>{common}</h2>
    <div>capital: {capital[0]}</div>
    <div>area: {area}</div>
    <p>
      <b>languages:</b>
    </p>
    <ul>
      {Object.values(languages).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
    <div
      style={{
        fontSize: '10rem',
      }}
    >
      {flag}
    </div>
    <Weather capital={capital} />
  </>
);

const Country = ({ expand = false, country }) => {
  const [show, setShow] = useState(expand);
  const toggleShow = () => setShow(!show);
  const {
    name: { common },
  } = country;

  return (
    <li>
      {!show && <span>{common} </span>}

      <ToggleButton onClick={toggleShow} show={show} />

      {show && <CountryExpanded country={country} />}
    </li>
  );
};

export default Country;
