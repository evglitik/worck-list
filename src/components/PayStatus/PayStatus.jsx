import { useState } from 'react';
import { MonthList } from 'components/MonthList/MonthList';
import { useEffect } from 'react';
import { cauntDateNow } from 'service/countPayDay';
import {
  ContainerPayStatus,
  TextPayStatus,
  ButtonPayStatus,
} from './PayStatus.styled';

export const PayStatus = ({ price, setInterval }) => {
  const [changeMonth, setMontch] = useState('');
  const [montchList, setMontchList] = useState(false);

  const togleMontch = () => {
    setMontchList(!montchList);
  };

  useEffect(() => {
    setMontch(cauntDateNow());
  }, []);

  return (
    <ContainerPayStatus>
      <TextPayStatus>Сумма: {price} </TextPayStatus>

      <ButtonPayStatus type="button" onClick={() => togleMontch()}>
        {!changeMonth ? 'Вибрати місяць' : changeMonth}
      </ButtonPayStatus>

      {montchList && (
        <MonthList
          setInterval={setInterval}
          togleMontch={togleMontch}
          setMontch={setMontch}
        />
      )}
    </ContainerPayStatus>
  );
};
