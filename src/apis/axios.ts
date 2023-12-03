import axios, { AxiosRequestConfig } from "axios";

const axiosJsonConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json,",
  },
};

export const instance = axios.create(axiosJsonConfig);

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
