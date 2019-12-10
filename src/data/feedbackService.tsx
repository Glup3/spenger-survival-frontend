import { axiosInstance } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const sendFeedback = async (message: string, messageType: string): Promise<void> => {
  axiosInstance.post('/feedbacks', {
    message,
    messageType,
  });
};
