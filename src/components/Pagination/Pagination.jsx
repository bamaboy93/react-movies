import { Pagination } from "@mui/material";

export default function MoviePagination({ page, count, onChange }) {
  return (
    <Pagination
      count={count}
      size="medium"
      page={page}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  );
}
