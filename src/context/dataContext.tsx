import React, { createContext, useContext, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import ResponseTips from '../types/responseTips';
import Tip from '../types/tip';

type FetchTipsType = (searchTerm: string, page?: number, perPage?: number) => Promise<void>;
type setTipsType = (value: string) => any;

interface DataProviderPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

interface DataContextValuesType {
  tips: Tip[];
  loading: boolean;
  tipsCount: number;
  fetchTips: FetchTipsType;
}

const DataContext = createContext<Partial<DataContextValuesType>>(null);

export const DataProvider = (props: DataProviderPropsType) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsCount, setTipsCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTips = async (searchTerm: string, page = 0, perPage = 15): Promise<void> => {
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

    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await axios.get<any, AxiosResponse<ResponseTips>>(
      `${process.env.REACT_APP_BACKEND_URL}/tips?page=${page}&perPage=${perPage}${
        searchTerm != null ? `&q=${searchTerm}` : ''
      }`
    );

    setTips(result.data.rows);
    setTipsCount(result.data.count);
    setLoading(false);
  };

  useEffect(() => {
    fetchTips(null);
  }, []);

  const value = {
    tips,
    loading,
    tipsCount,
    fetchTips,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
