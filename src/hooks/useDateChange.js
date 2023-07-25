export const useDateChange = (Date) => {
  const Year = Date.toDate().getFullYear();

  const Month = Date.toDate().getMonth() + 1;

  const Day = Date.toDate().getDate();

  return { Year, Month, Day };
};
