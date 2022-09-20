import Person from './Person';

const Persons = ({ persons, onDelete }) => {
  return (
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {persons.map(({ name, number, id }) => (
        <Person key={name} {...{ name, number, id, onDelete }} />
      ))}
    </ul>
  );
};

export default Persons;
