import { Grid } from "@mui/material";

export default function DataGrid({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, lg: 3 }}
      columns={{ xs: 12, sm: 8, md: 10 }}
    >
      {children}
    </Grid>
  );
}
