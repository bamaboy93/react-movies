import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { theme, muiTheme } from "./constants";

import App from "./App";

import "./styles/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

console.log(muiTheme);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/react-movies">
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
