import { monthList } from 'utils/montchLiast';
import { MoonListContainer, MoonListItem } from './MonList.styled';

export const MonthList = ({ setInterval, setMontch, togleMontch }) => {
  const handleClick = (m, i) => {
    let numMontch = (i += 1);

    setInterval(numMontch);
    setMontch(m);
    togleMontch();
  };

  return (
    <MoonListContainer>
      {monthList.map((m, i) => (
        <MoonListItem key={i} onClick={() => handleClick(m, i)}>
          {m}
        </MoonListItem>
      ))}
    </MoonListContainer>
  );
};
