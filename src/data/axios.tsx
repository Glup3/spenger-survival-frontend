import axios, { AxiosResponse } from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || '/api/v1',
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ResponseTips>) => {
    if (response.data.rows !== undefined) {
      for (let i = 0; i < response.data.rows.length; i++) {
        response.data.rows[i].issueDate = new Date(response.data.rows[i].issueDate);
      }
    }

    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
