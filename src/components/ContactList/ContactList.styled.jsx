import styled from 'styled-components';

export const List = styled.ul``;
export const Item = styled.li`
  list-style: disc;

  display: flex;
  align-items: center;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;

  margin-left: 120px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;
