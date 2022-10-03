import { format } from 'date-fns';

const TODAY = format(new Date(), 'yyyy-MM-dd');

export const todayStatistick = (worckList, date) => {
  const todayStat = {
    ind: 0,
    int: 0,
  };
  let dateSearch = setDate(date);

  worckList
    .filter(e => e.date === dateSearch)
    .map(e => {
      todayStat.ind += e.individual;
      todayStat.int += e.integral;
      return e;
    });
  return todayStat;
};

const setDate = date => (!date ? TODAY : date);

// 2022 - 09 - 29;

export const whatDay = date => {

  return date === TODAY ? 'сьогодні' : date;
};
