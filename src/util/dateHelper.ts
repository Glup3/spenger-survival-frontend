const locale = 'de-DE';

export const getDate = (date: Date): string => {
  return date.toLocaleDateString(locale);
};

export const getTime = (date: Date): string => {
  return date.toLocaleTimeString(locale).slice(0, 5);
};
