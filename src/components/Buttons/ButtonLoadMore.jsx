import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";

export default function ButtonLoadMore({
  ref,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
      <LoadingButton
        ref={ref}
        onClick={() => fetchNextPage()}
        loading={isFetchingNextPage}
        disabled={!hasNextPage}
        variant="filled"
        color="secondary"
        size="large"
      >
        Load More
      </LoadingButton>
    </Box>
  );
}
