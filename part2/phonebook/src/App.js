import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const exists = persons.filter(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    )[0];

    if (exists) {
      alert(`${exists.name} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        })
      );
      setNewName('');
      setNewNumber('');
    }
  };

  const onNameChange = (event) => {
    setNewName(event.target.value.trim());
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value.trim());
  };

  const onFilteredChange = (event) => {
    setFiltered(event.target.value.trim());
  };

  const filteredPersons = () => {
    return persons.filter(({ name }) => {
      return (
        filtered === '' ||
        name.toLowerCase().indexOf(filtered.toLowerCase()) === 0
      );
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filtered} onChange={onFilteredChange} />
      </div>

      <h2>add a new</h2>
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
        {filteredPersons().map(({ name, number }) => (
          <li key={name}>
            {name} {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
