import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

export const getAll = async () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export const create = async (person) => {
  return axios.post(baseUrl, person).then((response) => response.data);
};
