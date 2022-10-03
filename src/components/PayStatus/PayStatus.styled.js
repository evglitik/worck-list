import styled from 'styled-components';

export const ContainerPayStatus = styled.div`
  width: 200px;
  border-top: 1px solid #434343;
`;

export const TextPayStatus = styled.p`
    margin: 0;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const ButtonPayStatus = styled.button`
  width: 75%;
  height: 32px;
  margin-top: 4px;
  border: none;
  background-color: #2c2c2e;
  text-align: left;
  border-radius: 13px;
  cursor: pointer;
  color: currentColor;
  padding-left: 14px;
  &:hover {
    background-color: #434343;
  }
`;

export const TextButtonPayStatus = styled.p`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 4px;
`;