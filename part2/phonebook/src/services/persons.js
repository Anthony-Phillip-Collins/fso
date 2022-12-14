import axios from 'axios';

const baseUrl = '/api/persons';

export const getAll = async () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export const create = async (person) => {
  if (!person.name || !person.number) {
    throw new Error('Please provide a name and number');
  }

  return getAll().then((persons) => {
    const ids = persons.map(({ id }) => id);
    person.id = Math.max(...ids) + 1;
    return axios.post(baseUrl, person).then((response) => response.data);
  });
};

export const update = async (person) => {
  return axios
    .put(`${baseUrl}/${person.id}`, person)
    .then((response) => response.data);
};

export const remove = async (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};
