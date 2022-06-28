import Pagination from "@mui/material/Pagination";

import PropTypes from "prop-types";

import s from "./Pagination.module.scss";

export default function MoviePagination({ page, onChange }) {
  return (
    <div className={s.wrapper}>
      <Pagination count={500} size="small" page={page} onChange={onChange} />
    </div>
  );
}

MoviePagination.propTypes = {
  page: PropTypes.number,
  onChange: PropTypes.func,
};
