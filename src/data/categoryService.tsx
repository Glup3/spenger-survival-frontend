import { axiosInstance } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getAllCategories = async (): Promise<Category[]> => {
  return axiosInstance.get('/categories').then(resp => resp.data);
};
