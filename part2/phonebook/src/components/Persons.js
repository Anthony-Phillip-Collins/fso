const Person = ({ name, number }) => (
  <li>
    {name} {number}
  </li>
);

const Persons = ({ persons }) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {persons.map(({ name, number }) => (
        <Person key={name} {...{ name, number }} />
      ))}
    </ul>
  );
};

export default Persons;
