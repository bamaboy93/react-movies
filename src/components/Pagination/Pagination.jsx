import Pagination from "@mui/material/Pagination";

import PropTypes from "prop-types";

import s from "./Pagination.module.scss";

export default function MoviePagination({ page, totalpages, onChange }) {
  const pages = totalpages > 500 ? 500 : totalpages;
  return (
    <div className={s.wrapper}>
      <Pagination count={pages} page={page} onChange={onChange} />
    </div>
  );
}

MoviePagination.propTypes = {
  totalpages: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
