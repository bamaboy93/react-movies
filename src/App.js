import { LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));

const HomeView = lazy(() => import("./views/HomeView"));

const QueryView = lazy(() => import("./views/QueryView"));

const TopRatedView = lazy(() => import("./views/TopRatedView"));

const UpcomingView = lazy(() => import("./views/UpcomingView"));

const PopularView = lazy(() => import("./views/PopularView"));

const MovieView = lazy(() => import("./views/MovieView"));

const FavList = lazy(() => import("./views/FavouritesView"));

const ErrorView = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                showHeader={[
                  "/",
                  "/search",
                  "/popular",
                  "/top_rated",
                  "/upcoming",
                  "/favourites",
                ]}
              />
            }
          >
            <Route path="/" element={<HomeView />} />
            <Route path=":movieId" element={<MovieView />} />

            <Route path="search" element={<QueryView />} />
            <Route path="search/:movieId" element={<MovieView />} />

            <Route path="popular" element={<PopularView />} />
            <Route path="popular/:movieId" element={<MovieView />} />

            <Route path="top_rated" element={<TopRatedView />} />
            <Route path="top_rated/:movieId" element={<MovieView />} />

            <Route path="upcoming" element={<UpcomingView />} />
            <Route path="upcoming/:movieId" element={<MovieView />} />

            <Route path="favourites" element={<FavList />} />
            <Route path="favourites/:movieId" element={<MovieView />} />
          </Route>
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
