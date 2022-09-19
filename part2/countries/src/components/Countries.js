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
  return (
    <li>
      <h2>{common}</h2>
      {expand && (
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

const Countries = ({ countries }) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {countries.map((country) => (
        <Country
          country={country}
          expand={countries.length === 1}
          key={country.name.common}
        />
      ))}
    </ul>
  );
};

export default Countries;
