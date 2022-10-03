import styled from 'styled-components';

export const FormContainer = styled.div`
  /* margin-bottom: 8px; */
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  margin-bottom: 12px;
  font-size: 22px;
  padding: 4px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #434343;
  }
`;

export const ButtonDrupContainer = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 12px;
`;

export const Buttons = styled.button`
  height: 42px;
  width: 86px;
  border-radius: 5px;
  background-color: #2c2c2e;
  text-align: center;
  box-shadow: 0px 1px 0px #000000;
  border: none;
  cursor: pointer;
  color: currentColor;
  /* font-family: Arial; */
  /* font-size: 20px; */
  /* font-weight: bold; */
  /* padding: 13px 32px; */

  &:hover {
    background-color: #434343;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
