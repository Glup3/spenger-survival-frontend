import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import ResponseTips from '../types/responseTips';
import Tip from '../types/tip';
import AddTipBody from '../types/add-tip-body';

axios.interceptors.response.use(
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

type FetchInitialTipsType = (searchTerm: string) => void;
type FetchMoreTipsType = (perPage?: number) => void;
type AddTipType = (tip: AddTipBody) => Promise<boolean>;

interface DataProviderPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

interface DataContextValuesType {
  tips: Tip[];
  tipsCount: number;
  fetchInitialTips: FetchInitialTipsType;
  fetchMoreTips: FetchMoreTipsType;
  addTip: AddTipType;
}

const DataContext = createContext<Partial<DataContextValuesType>>(null);

const perPageDefault = 15;

const fetchTips = async (searchTerm: string, offset = 0, perPage = perPageDefault): Promise<ResponseTips> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await axios.get<any, AxiosResponse<ResponseTips>>(
    `${process.env.REACT_APP_BACKEND_URL}/tips?page=${offset}&perPage=${perPage}${
      searchTerm != null ? `&q=${searchTerm}` : ''
    }`
  );

  return result.data;
};

const addTip = async (tip: AddTipBody): Promise<boolean> => {
  const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/tips`, tip);

  if (result.data.responseCode === 200) {
    return true;
  }

  return false;
};

export const DataProvider = (props: DataProviderPropsType) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsCount, setTipsCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);

  const fetchInitialTips = (searchTerm: string): void => {
    fetchTips(searchTerm).then(response => {
      setPage(0);
      setSearchInput(searchTerm);
      setTipsCount(response.count);
      setTips(response.rows);
    });
  };

  const fetchMoreTips = (perPage = perPageDefault): void => {
    fetchTips(searchInput, page + 1, perPage).then(response => {
      setPage(page + 1);
      setTips(tips.concat(response.rows));
      setTipsCount(response.count);
    });
  };

  const value = {
    tips,
    tipsCount,
    fetchInitialTips,
    fetchMoreTips,
    addTip,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
