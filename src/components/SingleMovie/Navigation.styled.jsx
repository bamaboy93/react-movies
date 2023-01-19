import styled from "@emotion/styled";

export const NavigationWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const NavigationItem = styled.button`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4em;

  cursor: pointer;
  &:not(:last-child) {
    margin-right: 45px;
  }
`;
