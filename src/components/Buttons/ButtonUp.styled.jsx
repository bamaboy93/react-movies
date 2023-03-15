import styled from "@emotion/styled";

export const ButtonToTop = styled.button`
  outline: none;
  border: none;
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 20px;
  border-radius: 50%;
  padding: 16px;
  min-width: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.red};

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
