import { useAuthState } from "react-firebase-hooks/auth";
import { Box, IconButton, LinearProgress } from "@mui/material";
import { MoreVert, Google } from "@mui/icons-material";
import Container from "../../Container";
import { auth, signInWithGoogle } from "../../../services/firebase";
import useScrollDirection from "../../../hooks/useScroll";
import { NavBar, Wrapper } from "./HeaderMobile.styled";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu";

export default function HeaderMobile() {
  const [user, loading] = useAuthState(auth);
  const scrollDirection = useScrollDirection();

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Wrapper
      direction={scrollDirection ? scrollDirection.toString() : undefined}
    >
      <Container>
        <NavBar>
          <Box>
            <Menu />
          </Box>
          <Box>
            <SearchForm />
          </Box>
          <Box>
            {user ? (
              <IconButton color="inherit" sx={{ p: 0 }}>
                <MoreVert fontSize="large" />
              </IconButton>
            ) : (
              <IconButton
                color="inherit"
                sx={{ p: 0 }}
                onClick={signInWithGoogle}
              >
                <Google fontSize="medium" />
              </IconButton>
            )}
          </Box>
        </NavBar>
      </Container>
    </Wrapper>
  );
}
