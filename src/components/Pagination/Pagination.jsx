import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import s from "./Pagination.module.scss";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#e50914",
          fontWeight: "700",
        },
      },
    },
  },
});

export default function MoviePagination({ page, totalpages, onChange }) {
  const pages = totalpages > 500 ? 500 : totalpages;
  return (
    <div className={s.wrapper}>
      <ThemeProvider theme={theme}>
        <Pagination
          count={pages}
          page={page}
          onChange={onChange}
          size="large"
        />
      </ThemeProvider>
    </div>
  );
}

MoviePagination.propTypes = {
  totalpages: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
