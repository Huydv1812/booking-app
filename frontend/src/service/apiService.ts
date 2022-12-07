import axios from "axios";
import config from "../config";

//axios configuration

export const apiClient = axios.create(config.api);

// request interceptor

axios.interceptors.request.use(
  function (config) {
    //to do something
    return config;
  },
  function (error) {
    //to do something
    return Promise.reject(error);
  }
);

//response interceptor

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      //clear token
    }
    return Promise.reject(error);
  }
);
