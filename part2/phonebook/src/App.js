import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import { getAll, create, remove, update } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    getAll()
      .then((persons) => {
        setPersons(persons);
      })
      .catch((error) => {
        showNotification('Something went wrong. Can’t connect to database.');
      });
  }, []);

  const showNotification = (message) => {
    setMessage(message);
    setTimeout(() => setMessage(''), 3000);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    const exists = persons.find(
      ({ name }) => name.toLowerCase() === newPerson.name.toLowerCase()
    );

    if (exists) {
      if (
        window.confirm(
          `${exists.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        update({ ...exists, ...newPerson })
          .then((updated) => {
            setPersons(persons.map((p) => (p.id === exists.id ? updated : p)));
            setNewName('');
            setNewNumber('');
            showNotification(
              `${updated.name}’s phone number has been updated.`
            );
          })
          .catch((error) => {
            showNotification('Person doesn’t exist in the database!');
          });
      }
    } else {
      create(newPerson)
        .then((person) => {
          setPersons(persons.concat(person));
          setNewName('');
          setNewNumber('');
          showNotification(`${person.name} has been created`);
        })
        .catch((error) => {
          showNotification(error.message);
        });
    }
  };

  const onDelete = ({ name, number, id }) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      remove(id)
        .then((response) => {
          const remaining = persons.filter((person) => person.id !== id);
          setPersons([...remaining]);
          showNotification(`${name} has been deleted.`);
        })
        .catch((error) => {
          showNotification('Person doesn’t exist in the database!');
        });
    }
  };

  const onNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilteredChange = (event) => {
    setFiltered(event.target.value);
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

      <Notification message={message} />

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
