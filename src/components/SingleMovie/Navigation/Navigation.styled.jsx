import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const NavigationItem = styled.button`
  border: none;
  outline: transparent;
  background-color: transparent;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4em;
  color: ${(props) => props.theme.colors.white};

  cursor: pointer;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;
