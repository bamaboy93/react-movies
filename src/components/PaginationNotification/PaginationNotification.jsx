import { Typography, CircularProgress } from "@mui/material";
import { NotificationWrapper } from "./PaginationNotification.styled";

export default function PaginationNotification({
  isFetchingNextPage,
  hasNextPage,
}) {
  return (
    <NotificationWrapper>
      {isFetchingNextPage && <CircularProgress color="secondary" />}

      {!hasNextPage && (
        <Typography>You have viewed all available movies</Typography>
      )}
    </NotificationWrapper>
  );
}
