/* eslint-disable import/no-unresolved */
/* global fetch:false */
import cacheService from '../utils/cache';
import storage from '../utils/storage';
import { STORAGE_KEY } from '../constants';

export const config = {
  baseUrl: 'https://api.themoviedb.org/3'
};

export const STATUS_CODE = {
  OK: 200,
  NOT_FOUND: 404,
  NO_CONTENT: 204
};

const fetchData = async (url, params, customHeaders, cachedControll) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Basic a3BrazQ6c21rYmlzYQ==',
    ...customHeaders
  };

  const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
  if (token.length >= 100) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`
    };
  } else {
    headers = {
      ...headers,
      Authorization: 'Basic a3BrazQ6c21rYmlzYQ=='
    };
  }
  // const tokens = await tokenService.get();
  // if (tokens) {
  //   headers = {
  //     ...headers,
  //     Authorization: `Bearer ${tokens.accessToken}`
  //   };
  // }

  const response = await fetch(url, {
    ...params,
    headers
  });
  // for DELETE method caseurl
  if (response.status === STATUS_CODE.NO_CONTENT) return {};
  const json = await response.json();
  // if (!response.ok) {
  //   if (json && json.message) {
  //     if (json.data) {
  //       const error = new Error(json.message);
  //       error.code = json.data.errorCode;
  //       throw error;
  //     } else {
  //       throw new Error(json.message);
  //     }
  //   }
  //   throw new Error('unknownError');
  // }
  if (cachedControll) {
    await cacheService.set(cachedControll, json);
  }
  return json;
};

const get = async (endpoint, params = {}, headers = {}) => {
  let queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }
  const url = `${config.baseUrl}${endpoint}${queryString}`;
  const fetchParams = {
    method: 'GET'
  };
  return fetchData(url, fetchParams, headers);
};

const post = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'POST',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const patch = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PATCH',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const put = async (endpoint, params = {}, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'PUT',
    body: JSON.stringify(params)
  };
  return fetchData(url, fetchParams, headers);
};

const remove = async (endpoint, headers = {}) => {
  const url = `${config.baseUrl}${endpoint}`;
  const fetchParams = {
    method: 'DELETE'
  };
  return fetchData(url, fetchParams, headers);
};

export { get, post, put, patch, remove };