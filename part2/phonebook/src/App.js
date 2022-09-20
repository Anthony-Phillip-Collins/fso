import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import { getAll, create, remove } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const exists = persons.filter(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    )[0];

    if (exists) {
      alert(`${exists.name} is already added to phonebook`);
    } else {
      const person = {
        name: newName,
        number: newNumber,
      };
      create(person).then((person) => {
        setPersons(persons.concat(person));
        setNewName('');
        setNewNumber('');
      });
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

  const onDelete = ({ name, number, id }) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      remove(id).then((response) => {
        const remaining = persons.filter((person) => person.id !== id);
        setPersons([...remaining]);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filtered} onChange={onFilteredChange} />

      <h2>add a new</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        onSubmit={onSubmit}
        onNameChange={onNameChange}
        onNumberChange={onNumberChange}
      />

      <h2>Numbers</h2>

      <Persons persons={filteredPersons()} onDelete={onDelete} />
    </div>
  );
};

export default App;
