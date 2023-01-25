import styled from 'styled-components';

export const Container = styled.section`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px auto;
  padding: 20px 50px;
  text-align: center;
  max-width: 300px;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;
`;
export const H1 = styled.h1`
  color: #3a7999;
  margin-bottom: 15px;
`;
export const H2 = styled.h2`
  color: #3a7999;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  display: block;
  width: 80px;
  height: 30px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 7px 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  /* :not(:last-child) {
    margin-right: 10px;
  } */

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
    transform: scale(1.05);
  }
`;
