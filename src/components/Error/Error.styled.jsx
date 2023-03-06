import styled from "@emotion/styled";
import error from "../../styles/images/error.png";

export const Wrapper = styled.div`
  margin-top: 60px;
  background-image: url(${error});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 70vh;

  @media (min-width: 768px) {
    margin-top: 80px;
  }

  @media (min-width: 1280px) {
    margin-top: 100px;
  }
`;
