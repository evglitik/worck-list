import { useState } from 'react';
import { ButtonCrement } from 'components/ButtonCrement/ButtonCrement';
import { addWorckDay } from 'service/api';

import {
  FormContainer,
  Input,
  ButtonDrupContainer,
  Buttons,
} from './AddLessons.styled';

export const AddLessons = ({ pushNewWorckEl }) => {
  const [individualLesson, setIndividualLesson] = useState(0);
  const [integralLesson, setIntegralLesson] = useState(0);
  const [dateWorck, setDateWorck] = useState(0);

  const chengValue = (operation, { type }) => {
    if (type === 'individual') {
      operation === 'incr'
        ? setIndividualLesson(individualLesson > 0 ? individualLesson - 1 : 0)
        : setIndividualLesson(individualLesson + 1);
    } else if (type === 'integral') {
      operation === 'incr'
        ? setIntegralLesson(integralLesson > 0 ? integralLesson - 1 : 0)
        : setIntegralLesson(integralLesson + 1);
    } else {
      console.log('Dont have type');
    }
  };

  const handleSubmit = () => {
    if (!dateWorck) {
      alert('Вибери дату!');
      return;
    }
    addWorckDay({
      date: dateWorck,
      individual: individualLesson,
      integral: integralLesson,
    }).then(r => pushNewWorckEl(r));

    reset();
  };

  const reset = () => {
    setIntegralLesson(0);
    setIndividualLesson(0);
  };

  return (
    <FormContainer>
      <Input
        type="date"
        label="Date mobile"
        required
        onChange={e => setDateWorck(e.currentTarget.value)}
      />

      <ButtonCrement
        title={'Індивідуальне заняття'}
        value={individualLesson}
        type={'individual'}
        setValue={chengValue}
      />
      <ButtonCrement
        title={'Інтегративна сесія'}
        value={integralLesson}
        type={'integral'}
        setValue={chengValue}
      />
      <ButtonDrupContainer>
        <Buttons type="button" onClick={() => handleSubmit()}>
          Додати
        </Buttons>
        <Buttons type="button" onClick={() => reset()}>
          Скинути
        </Buttons>
      </ButtonDrupContainer>
    </FormContainer>
  );
};
