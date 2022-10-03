import { format } from 'date-fns';
import { monthList } from 'utils/montchLiast';

const INTEGRAL_PRAICE = 20;
const INDIVIDUAL_PRICE = 35;
const PAY_INTEGR = 820;
const PAY_INDIVIDUAL = 550;
const DATE_NOW = format(new Date(), 'MM');

export const countPayDay = (worcks, dateInterval) => {
  let integralAll = 0;
  let individualAll = 0;
  let date = '';

  if (!dateInterval) {
    date = DATE_NOW;
  } else {
    date = validFormatDate(dateInterval);
  }

  worcks
    .filter(el => {
      let interval = format(new Date(el.date), 'MM');
      return interval === date;
    })
    .map(el => {
      integralAll += el.integral;
      individualAll += el.individual;
      return el;
    });

  let allMoneyPay = pay(individualAll, integralAll);
  return allMoneyPay;
};

const validFormatDate = d => {
  let date = d.toString();

  if (date.length > 1) {
    return date;
  } else {
    return [0, date].join('');
  }
};

export const cauntDateNow = () => {
  return monthList[DATE_NOW - 1];
};

export const pay = (ind, int) => {
  let indPay = ((ind * PAY_INDIVIDUAL) / 100) * INDIVIDUAL_PRICE;
  let intPay = ((int * PAY_INTEGR) / 100) * INTEGRAL_PRAICE;
  return indPay + intPay;
};
