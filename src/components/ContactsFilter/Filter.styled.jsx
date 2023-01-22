import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;

  input {
    margin-top: 10px;
    width: 97%;

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
