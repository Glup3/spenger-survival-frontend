import React, { createContext, useContext } from 'react';
import axios, { AxiosResponse } from 'axios';

import ResponseTips from '../types/responseTips';

type GetTipsType = (page?: number, perPage?: number) => Promise<ResponseTips>;

interface DataProviderPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  getTips: GetTipsType;
}

const DataContext = createContext<Partial<DataProviderPropsType>>(null);

const getTips = async (page = 0, perPage = 15): Promise<ResponseTips> => {
  axios.interceptors.response.use(
    (response: AxiosResponse<ResponseTips>) => {
      for (let i = 0; i < response.data.rows.length; i++) {
        response.data.rows[i].issueDate = new Date(response.data.rows[i].issueDate);
      }

      return response;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await axios.get<any, AxiosResponse<ResponseTips>>(
    `${process.env.REACT_APP_BACKEND_URL}/tips?page=${page}&perPage=${perPage}`
  );

  return result.data;
};

export const DataProvider = (props: DataProviderPropsType) => {
  const value = {
    getTips: props.getTips || getTips,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
