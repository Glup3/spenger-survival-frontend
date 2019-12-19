import React, { createContext, useContext, useState } from 'react';

import { fetchTips, reportTip, addTip } from '../data/tipService';
import { sendFeedback } from '../data/feedbackService';
import { getAllTodos } from '../data/todoService';

type FetchInitialTipsType = (searchTerm: string) => void;
type FetchMoreTipsType = (perPage?: number) => void;
type AddTipType = (tip: AddTipBody) => Promise<boolean>;
type ReportTipType = (id: number, title: string, message: string) => Promise<void>;
type SetSelectedTipType = (value: Tip) => void;
type SetVerifiedOptionType = (value: DropdownSelectOption) => void;
type SendFeedbackType = (message: string, messageType: string) => Promise<void>;
type GetAllTodosType = () => Promise<Todo[]>;
type ChangeSearchOptionsAndSearchType = (value) => void;

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
  setSelectedTip: SetSelectedTipType;
  isLoading: boolean;
  verifiedOption: DropdownSelectOption;
  sendFeedback: SendFeedbackType;
  getAllTodos: GetAllTodosType;
  changeSearchOptionsAndSearch: ChangeSearchOptionsAndSearchType;
}

const DataContext = createContext<Partial<DataContextValuesType>>(null);

export const DataProvider = (props: DataProviderPropsType) => {
  const [selectedTip, setSelectedTip] = useState<Tip>(null);
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsCount, setTipsCount] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let verifiedOption: DropdownSelectOption = { label: 'Alle', value: '' };

  const fetchInitialTips = (searchTerm: string): void => {
    setIsLoading(true);
    fetchTips(searchTerm, verifiedOption.value).then(response => {
      setPage(0);
      setIsLoading(false);
      setSearchInput(searchTerm);
      setTipsCount(response.count);
      setTips(response.rows);
    });
  };

  const fetchMoreTips = (perPage = 15): void => {
    setIsLoading(true);
    fetchTips(searchInput, verifiedOption.value, page + 1, perPage).then(response => {
      setPage(page + 1);
      setIsLoading(false);
      setTips(tips.concat(response.rows));
      setTipsCount(response.count);
    });
  };

  const changeSearchOptionsAndSearch = value => {
    if (value != null) {
      verifiedOption = value;
    }

    fetchInitialTips(searchInput);
  };

  const valueTips = {
    tips,
    tipsCount,
    fetchInitialTips,
    fetchMoreTips,
    addTip,
    reportTip,
    selectedTip,
    setSelectedTip,
  };

  const value = {
    ...valueTips,
    isLoading,
    verifiedOption,
    changeSearchOptionsAndSearch,
    sendFeedback,
    getAllTodos,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
