import { AxiosResponse } from 'axios';

import { axiosInstance } from './axios';

interface FetchTipsArgs {
  searchTerm: string;
  verified?: string;
  department?: string;
  offset?: number;
  perPage?: number;
}

export const fetchTips = async ({
  searchTerm,
  verified,
  department,
  offset = 0,
  perPage = 15,
}: FetchTipsArgs): Promise<ResponseTips> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await axiosInstance.post<any, AxiosResponse<ResponseTips>>('/tips', {
      page: offset,
      perPage,
      searchTerm,
      verified,
      department,
    });

    return result.data;
  } catch (e) {
    console.log('ERROR', e);
  }

  return { rows: [], count: 0 };
};

export const addTip = async (tip: AddTipBody): Promise<boolean> => {
  const result = await axiosInstance.post('/tips/add', tip);

  if (result.status === 200) {
    return true;
  }

  return false;
};

export const reportTip = async (id: number, title: string, message: string): Promise<void> => {
  await axiosInstance.post('/tips/report', {
    id,
    title,
    message,
  });
};
