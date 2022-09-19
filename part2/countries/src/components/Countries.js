import Country from './Country';

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
