import styled from 'styled-components';

export const ContainerCrement = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CrementButton = styled.button`
  height: 42px;
  width:42px;
  border-radius: 5px;
  background-color: #2c2c2e;
  text-align: center;
  box-shadow: 0px 1px 0px #000000;
  border: none;
  cursor: pointer;
  color: currentColor;

  font-size: 24px;

  &:hover {
    background-color: #434343;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const CrementText = styled.span`
  margin-right: auto;
  padding: 8px;
  font-size: 18px;
`;

export const CrementValue = styled.span`
  margin-left: 12px;
  font-size: 18px;
`;