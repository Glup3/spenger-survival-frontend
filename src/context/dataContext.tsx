import React, { createContext, useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import ResponseTips from '../types/responseTips';
import Tip from '../types/tip';
import AddTipBody from '../types/add-tip-body';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:80/api/v1',
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

type FetchInitialTipsType = (searchTerm: string) => void;
type FetchMoreTipsType = (perPage?: number) => void;
type AddTipType = (tip: AddTipBody) => Promise<boolean>;
type ReportTipType = (id: number, title: string, message: string) => Promise<void>;
type SetSelectedTip = (value: Tip) => void;

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
  reportTip: ReportTipType;
  selectedTip: Tip;
  setSelectedTip: SetSelectedTip;
  isLoading: boolean;
}

const DataContext = createContext<Partial<DataContextValuesType>>(null);

const perPageDefault = 15;

const fetchTips = async (searchTerm: string, offset = 0, perPage = perPageDefault): Promise<ResponseTips> => {
  try {
    const url = `/tips?page=${offset}&perPage=${perPage}${searchTerm != null ? `&q=${searchTerm}` : ''}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await axiosInstance.get<any, AxiosResponse<ResponseTips>>(url, {});

    return result.data;
  } catch (e) {
    console.log('ERROR', e);
  }

  return { rows: [], count: 0 };
};

const addTip = async (tip: AddTipBody): Promise<boolean> => {
  const result = await axiosInstance.post('/tips', tip);

  if (result.status === 200) {
    return true;
  }

  return false;
};

const reportTip = async (id: number, title: string, message: string): Promise<void> => {
  await axiosInstance.post('/tips/report', {
    id,
    title,
    message,
  });
};

export const DataProvider = (props: DataProviderPropsType) => {
  const [selectedTip, setSelectedTip] = useState<Tip>(null);
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsCount, setTipsCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchInitialTips = (searchTerm: string): void => {
    setIsLoading(true);
    fetchTips(searchTerm).then(response => {
      setPage(0);
      setIsLoading(false);
      setSearchInput(searchTerm);
      setTipsCount(response.count);
      setTips(response.rows);
    });
  };

  const fetchMoreTips = (perPage = perPageDefault): void => {
    setIsLoading(true);
    fetchTips(searchInput, page + 1, perPage).then(response => {
      setPage(page + 1);
      setIsLoading(false);
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
    reportTip,
    selectedTip,
    setSelectedTip,
    isLoading,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
