import { useEffect, useState } from "react";
import { Zoom } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

import { StyledFab } from "./ButtonUp.styled";

export default function ButtonUp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 800 ? setShow(true) : setShow(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    <>
      {show && (
        <Zoom in={show}>
          <StyledFab
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <UpIcon color="inherit" />
          </StyledFab>
        </Zoom>
      )}
    </>
  );
}
