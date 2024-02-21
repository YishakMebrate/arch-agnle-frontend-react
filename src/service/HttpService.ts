import axios from 'axios';

const baseUrl = '';

export const getRequest = (path: string, token: string, queryString = '') => {
  const headers = {
    Authorization: 'Bearer ' + token,
    ContentType: 'application/json',
    Accept: 'application/json',
  };

  return axios.get(baseUrl + path + queryString, { headers: headers });
};

export const postRequest = (path: string, token: string, payload: never, queryString = '') => {
  const headers = {
    Authorization: 'Bearer ' + token,
    ContentType: 'application/json',
    Accept: 'application/json',
  };
  return axios.post(baseUrl + path + queryString, payload, {
    headers: headers,
  });
};
