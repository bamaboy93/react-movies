import Pagination from "@mui/material/Pagination";

import PropTypes from "prop-types";

import { Wrapper } from "./Pagination.styled";

export default function MoviePagination({ page, totalpages, onChange }) {
  const pages = totalpages > 500 ? 500 : totalpages;
  return (
    <Wrapper>
      <Pagination count={pages} page={page} onChange={onChange} />
    </Wrapper>
  );
}

MoviePagination.propTypes = {
  totalpages: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
