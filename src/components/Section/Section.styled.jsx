import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SectionWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 40px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.red};
`;
