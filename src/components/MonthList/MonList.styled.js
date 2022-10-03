import styled from 'styled-components';

export const MoonListContainer = styled.ul`
  list-style: none;
  margin: 0;

  padding-left: 8px;
  padding-right: 8px;
  margin-top: 8px;
  background-color: #2c2c2e;
  border-radius: 13px;
`;

export const MoonListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #1c1c1e;
  cursor: pointer;
  &:hover {
    color: #808080;
  }
`;
