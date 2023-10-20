import { alpha, styled, AppBar, Box, Stack, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const AppBarLine = styled(AppBar)(({ theme }) => ({
  height: "65px",
  // top: visible ? "0" : "-65px",
  backgroundColor: theme.palette.primary.main,
  transition: "top 0.4s ease-out",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",

  "@media all": {
    minHeight: 65,
  },
}));

export const Logo = styled(NavLink)(({ theme }) => ({
  fontFamily: theme.typography.logoFont,
  fontWeight: "bold",
  fontSize: "32px",
  lineHeight: "1",

  color: theme.palette.secondary.main,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignSelf: "center",
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const PageLink = styled(NavLink)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "1",

  color: theme.palette.common.white,

  transition: theme.transitions.create(["color"], {
    duration: theme.transitions.duration.short,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover, &:focus": {
    color: theme.palette.secondary.main,
  },
}));

// export const HeaderLine = styled.header`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 999;
//   width: 100%;
//   background-color: ${(props) => props.theme.colors.header};
//   backdrop-filter: blur(10px);
//   -webkit-backdrop-filter: blur(10px);
// `;

// export const Nav = styled.nav`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const NavList = styled.ul`
//   display: none;
//   @media screen and (min-width: 1280px) {
//     display: flex;
//   }
// `;

// export const NavListItem = styled.li`
//   :not(:last-child) {
//     margin-right: ${(props) => props.theme.space[6]}px;
//   }
// `;

// export const ActiveButtons = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const HomeLink = styled.p`
//   display: flex;
//   align-items: center;
//   padding: 24px 0;
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   font-size: ${(props) => props.theme.fontSizes.ms};
//   cursor: pointer;
//   transition: ${(props) => props.theme.animation.main};
//   &:focus,
//   &:hover {
//     color: ${(props) => props.theme.colors.hover};
//   }

//   svg {
//     width: 20px;
//     height: 20px;
//   }
// `;

// export const LinkTo = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   padding: 24px 0;
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   font-size: ${(props) => props.theme.fontSizes.ms};
//   cursor: pointer;
//   transition: ${(props) => props.theme.animation.main};
//   &:focus,
//   &:hover {
//     color: ${(props) => props.theme.colors.hover};
//   }

//   svg {
//     width: 20px;
//     height: 20px;
//   }
// `;

// export const Dropdown = styled.div`
//   position: absolute;
//   width: 800px;
//   background-color: #0f0f0ff0;

//   z-index: 777;
//   top: 100%;
//   left: 100%;
//   transform: translate(-40%, 15px);
//   visibility: hidden;
//   opacity: 0;
//   transition: all 350ms ease-in;

//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//     rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
// `;

// export const DropdownWrapper = styled.div`
//   position: relative;
//   height: 100%;
//   &:hover ${Dropdown}, &:focus ${Dropdown} {
//     opacity: 1;
//     visibility: visible;
//     transform: translate(-40%, 0);
//   }
// `;

// export const DropdownList = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   padding: 40px 0;
// `;

// export const DropdownListItem = styled.li`
//   width: 100px;
//   height: 160px;
//   font-weight: ${(props) => props.theme.fontWeights.bold};
//   font-size: ${(props) => props.theme.fontSizes.s};
//   text-align: center;
//   background-image: url(${(props) => props.img});
//   background-color: grey;
//   cursor: pointer;
//   transition: ${(props) => props.theme.animation.main};

//   @media screen and (min-width: 1280px) {
//     width: 180px;
//     height: 240px;
//   }

//   &:hover {
//     transform: translateY(-1rem);
//   }
// `;

// export const DropdownListLink = styled(NavLink)`
//   display: block;
//   margin-bottom: ${(props) => props.theme.space[1]}px;
//   width: 100%;
//   height: 100%;
// `;

// export const LoginBlock = styled.div`
//   display: flex;
//   align-items: center;
// `;
