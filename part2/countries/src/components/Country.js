import { useState } from 'react';

const Country = ({
  expand = false,
  country: {
    area,
    capital,
    flag,
    languages,
    name: { common },
  },
}) => {
  const [show, setShow] = useState(expand);
  const toggleShow = () => setShow(!show);

  return (
    <li>
      {show ? <h2>{common}</h2> : <span>{common} </span>}

      <button onClick={toggleShow} style={{ display: 'inline' }}>
        {show ? 'collapse' : 'expand'}
      </button>

      {show && (
        <>
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
        </>
      )}
    </li>
  );
};

export default Country;
