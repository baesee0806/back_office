export const useDateChange = (Date) => {
  const Year = Date.toDate().getFullYear().toString();

  const Month = Date.toDate().getMonth() + 1;

  const Day = Date.toDate().getDate().toString();

  return { Year, Month, Day };
};
