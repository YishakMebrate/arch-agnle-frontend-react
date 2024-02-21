import axios from 'axios';

const baseUrl = 'https://restcountries.com';

export const getRequest = (path: string, queryString = '') => {
  const headers = {
    ContentType: 'application/json',
    Accept: 'application/json',
  };

  return axios.get(baseUrl + path + queryString, { headers: headers });
};

export const postRequest = (path: string, payload: never, queryString = '') => {
  const headers = {
    ContentType: 'application/json',
    Accept: 'application/json',
  };
  return axios.post(baseUrl + path + queryString, payload, {
    headers: headers,
  });
};
