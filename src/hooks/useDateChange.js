export const useDateChange = (Date, num) => {
  const Year = Date.toDate().getFullYear().toString();

  const Month = Date.toDate().getMonth() + 1;

  const Day = Date.toDate().getDate().toString();

  const Hour = Date.toDate().getHours().toString();

  const Minute = Date.toDate().getMinutes().toString();

  if (num === 3) {
    return `${Year.slice(2)}.${Month}.${Day}`;
  }

  if (num === 5) {
    return `${Year}-${Month}-${Day} ${Hour}:${Minute}`;
  }
};
