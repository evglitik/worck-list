import { useEffect } from 'react';
import { useState } from 'react';
import { todayStatistick } from 'service/todayStaistick';
import { pay } from 'service/countPayDay';
import { whatDay } from 'service/todayStaistick';
import {
  InputTodayStat,
  LabelTodayStat,
  ContainerTodayStat,
  TextTodayStat,
} from './TodayStatystick.styled';

export const TodayStatystick = ({ worckList }) => {
  const [dateData, setToday] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setToday(todayStatistick(worckList, date));
  }, [worckList, date]);

  return (
    <>
      {dateData && (
        <ContainerTodayStat>
          <TextTodayStat>
            Заннять за {date ? whatDay(date) : 'сьогодні'}:{' '}
            {dateData ? dateData.ind + dateData.int : 0}
          </TextTodayStat>
          <TextTodayStat>
            Індив. Зан.: {dateData.ind} | Інтегр. Сес.: {dateData.int}
          </TextTodayStat>
          <TextTodayStat>
            Сумма за день: {pay(dateData.ind, dateData.int)}
          </TextTodayStat>
          <LabelTodayStat>
            <span>Змінити день:</span>
            <InputTodayStat
              type="date"
              label="Date mobile"
              value={date}
              onChange={e => setDate(e.currentTarget.value)}
            />
          </LabelTodayStat>
        </ContainerTodayStat>
      )}
    </>
  );
};
