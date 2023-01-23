import styled from "@emotion/styled/macro";

export const Form = styled.form`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

export const Input = styled.input`
  height: 48px;
  width: 48px;
  padding: 8px;
  border-style: none;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: rgba(41, 41, 41, 0.76);
  padding-right: 40px;
  color: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 767px) {
    background-color: transparent;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 18px;
    letter-spacing: 2px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }

  :focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    @media screen and (max-width: 767px) {
      width: 200px;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0px;
  width: 48px;
  height: 48px;
  border-style: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.red};
  background-color: transparent;
  pointer-events: painted;

  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme.colors.mainText};
  }

  :focus + ${Input} {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
    @media screen and (max-width: 767px) {
      width: 200px;
    }
  }
`;
