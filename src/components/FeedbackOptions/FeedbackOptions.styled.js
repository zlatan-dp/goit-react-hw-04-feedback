import styled from 'styled-components';

export const Button = styled.button`
  background-color: white;
  border-color: gray;
  border-radius: 3px;
  padding: 5px;
  font-size: 16px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    background-color: tomato;
  }
`;
