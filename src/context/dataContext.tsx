import React, { createContext, useContext, useState, useEffect } from 'react';

import { fetchTips, reportTip, addTip, fetchSchoolClasses, fetchAuthors } from '../data/tipService';
import { sendFeedback } from '../data/feedbackService';
import { getAllTodos } from '../data/todoService';
import { getAllCategories } from '../data/categoryService';

interface ChangeOptions {
  optionVerified?: DropdownSelectOption;
  optionDepartment?: DropdownSelectOption;
}

type FetchInitialTipsType = () => void;
type FetchMoreTipsType = (perPage?: number) => void;
type AddTipType = (tip: AddTipBody) => Promise<boolean>;
type ReportTipType = (id: number, title: string, message: string) => Promise<void>;
type SetSelectedTipType = (value: Tip) => void;
type SendFeedbackType = (message: string, messageType: string) => Promise<void>;
type GetAllTodosType = () => Promise<Todo[]>;
type SetSearchTermType = (value: string) => void;

type SetDepartmentOptionType = (value: DropdownSelectOption) => void;
type SetVerifiedOptionType = (value: DropdownSelectOption) => void;
type SetGenderOptionType = (value: DropdownSelectOption) => void;
type SetCategoryOptionType = (value: DropdownSelectOption) => void;
type SetAmountOptionType = (value: DropdownSelectOption) => void;
type SetOrderByOptionType = (value: DropdownSelectOption) => void;
type SetSchoolClassOptionType = (value: DropdownSelectOption) => void;
type SetAuthorOptionType = (value: DropdownSelectOption) => void;

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
  sendFeedback: SendFeedbackType;
  getAllTodos: GetAllTodosType;
  allCategories: DropdownSelectOption[];
  allSchoolClasses: DropdownSelectOption[];
  allAuthors: DropdownSelectOption[];

  searchTerm: string;
  setSearchTerm: SetSearchTermType;

  verifiedOption: DropdownSelectOption;
  departmentOption: DropdownSelectOption;
  genderOption: DropdownSelectOption;
  categoryOption: DropdownSelectOption;
  amountOption: DropdownSelectOption;
  orderByOption: DropdownSelectOption;
  schoolClassOption: DropdownSelectOption;
  authorOption: DropdownSelectOption;

  setVerifiedOption: SetVerifiedOptionType;
  setDepartmentOption: SetDepartmentOptionType;
  setGenderOption: SetGenderOptionType;
  setCategoryOption: SetCategoryOptionType;
  setAmountOption: SetAmountOptionType;
  setOrderByOption: SetOrderByOptionType;
  setSchoolClassOption: SetSchoolClassOptionType;
  setAuthorOption: SetAuthorOptionType;
}

const DataContext = createContext<Partial<DataContextValuesType>>(null);

export const DataProvider = (props: DataProviderPropsType) => {
  const [selectedTip, setSelectedTip] = useState<Tip>(null);
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsCount, setTipsCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [verifiedOption, setVerifiedOption] = useState<DropdownSelectOption>({ label: 'Alle', value: null });
  const [departmentOption, setDepartmentOption] = useState<DropdownSelectOption>({ label: 'Alle', value: '' });
  const [genderOption, setGenderOption] = useState<DropdownSelectOption>({ label: 'Alle', value: '' });
  const [categoryOption, setCategoryOption] = useState<DropdownSelectOption>({ label: 'Alle', value: null });
  const [allCategories, setAllCategories] = useState<DropdownSelectOption[]>([]);
  const [amountOption, setAmountOption] = useState<DropdownSelectOption>({ label: '15', value: '15' });
  const [orderByOption, setOrderByOption] = useState<DropdownSelectOption>({ label: 'Neueste', value: 'DESC' });
  const [schoolClassOption, setSchoolClassOption] = useState<DropdownSelectOption>({ label: 'Alle', value: '' });
  const [allSchoolClasses, setAllSchoolClasses] = useState<DropdownSelectOption[]>();
  const [authorOption, setAuthorOption] = useState<DropdownSelectOption>({ label: 'Alle', value: '' });
  const [allAuthors, setAllAuthors] = useState<DropdownSelectOption[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getAllCategories();
      const fetchedSchoolClasses = await fetchSchoolClasses();
      const fetchedAuthors = await fetchAuthors();

      const modifiedCategories = fetchedCategories.map<DropdownSelectOption>(category => {
        return {
          label: category.name,
          value: category.id.toString(),
        };
      });
      const modifiedSchoolClasses = fetchedSchoolClasses.map<DropdownSelectOption>(schoolClass => {
        return {
          label: schoolClass.schoolClass || 'Unbekannt',
          value: schoolClass.schoolClass,
        };
      });
      const modifiedAuthors = fetchedAuthors.map<DropdownSelectOption>(author => {
        return {
          label: author.author || 'Anonym',
          value: author.author,
        };
      });

      setAllCategories(modifiedCategories);
      setAllSchoolClasses(modifiedSchoolClasses);
      setAllAuthors(modifiedAuthors);
    };

    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const fetchInitialTips = (): void => {
    setIsLoading(true);

    fetchTips({
      searchTerm,
      verified: verifiedOption.value,
      department: departmentOption.value,
      gender: genderOption.value,
      category: categoryOption.value,
      schoolClass: schoolClassOption.value,
      author: authorOption.value,
      perPage: parseInt(amountOption.value, 10),
      orderBy: orderByOption.value,
    }).then(response => {
      setPage(0);
      setIsLoading(false);
      setTipsCount(response.count);
      setTips(response.rows);
    });
  };

  const fetchMoreTips = (): void => {
    if (!isLoading) {
      setIsLoading(true);
      fetchTips({
        searchTerm,
        verified: verifiedOption.value,
        department: departmentOption.value,
        gender: genderOption.value,
        category: categoryOption.value,
        schoolClass: schoolClassOption.value,
        author: authorOption.value,
        perPage: parseInt(amountOption.value, 10),
        offset: page + 1,
        orderBy: orderByOption.value,
      }).then(response => {
        setPage(page + 1);
        setIsLoading(false);
        setTips(tips.concat(response.rows));
        setTipsCount(response.count);
      });
    }
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
    searchTerm,
    setSearchTerm,
  };

  const valueTipsOptions = {
    verifiedOption,
    setVerifiedOption,
    departmentOption,
    setDepartmentOption,
    genderOption,
    setGenderOption,
    categoryOption,
    setCategoryOption,
    amountOption,
    setAmountOption,
    orderByOption,
    setOrderByOption,
    schoolClassOption,
    setSchoolClassOption,
    authorOption,
    setAuthorOption,
  };

  const value = {
    ...valueTips,
    ...valueTipsOptions,
    allCategories,
    allSchoolClasses,
    allAuthors,
    isLoading,
    verifiedOption,
    sendFeedback,
    getAllTodos,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
