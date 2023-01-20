import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  background: transparent;
  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  transform: rotate(180deg);

  circle {
    transition: stroke-dashoffset 0.3s ease;
    stroke-dasharray: 95;
    stroke-dashoffset: 95;
  }

  &:hover circle {
    stroke-dashoffset: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;
