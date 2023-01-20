import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  z-index: 44;
  top: 50%;
  right: 15%;
  transform: translate(-50%);
  border: none;
  outline: transparent;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  opacity: 0.7;
  cursor: pointer;

  @media (max-width: 1279px) {
    right: 5%;
  }

  &:hover {
    opacity: 1;

    svg {
      scale: 1.4;
    }
  }

  svg {
    width: 150px;
    height: 150px;
    fill: currentColor;
    transition: scale 250ms ease;
    @media (max-width: 1279px) {
      width: 100px;
      height: 100px;
    }
  }
`;
