import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;
`;

export const Label = styled.label`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 340px;
  padding: 12px;

  input {
    width: 75%;

    height: 20px;
    padding-left: 10px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    outline: none;
    :hover,
    :focus {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 40px;

  border: none;
  background: #3a7999;
  color: #f2f2f2;
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background: rgba(0, 0, 0, 0);
    color: #3a7999;
    box-shadow: inset 0 0 0 3px #3a7999;
  }
`;
