import { axiosInstance } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getAllTodos = async (): Promise<Todo[]> => {
  return axiosInstance.get('/todos').then(resp => resp.data);
};
