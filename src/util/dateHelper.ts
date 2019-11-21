export const getDate = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};

export const getTime = (date: Date): string => {
  return date.toISOString().slice(11, 16);
};
