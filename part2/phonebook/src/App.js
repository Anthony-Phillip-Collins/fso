import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39445323523' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const exists = persons.filter(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    )[0];

    if (exists) {
      alert(`${exists.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName('');
      setNewNumber('');
    }
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type='submit' disabled={newName === '' || newNumber === ''}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {persons.map(({ name, number }) => (
          <li key={name}>
            {name} {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
