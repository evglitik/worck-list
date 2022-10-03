import {
  ContainerCrement,
  CrementButton,
  CrementText,
  CrementValue,
} from './ButtonCrement.styled';

export const ButtonCrement = ({ title, value, type, setValue }) => {
  return (
    <ContainerCrement>
      <CrementButton type="button" onClick={() => setValue('incr', { type })}>
        -
      </CrementButton>
      <CrementText>{title} </CrementText>
      <CrementButton type="button" onClick={() => setValue('decr', { type })}>
        +
      </CrementButton>
      <CrementValue> {value}</CrementValue>
    </ContainerCrement>
  );
};
