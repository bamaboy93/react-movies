import { useState } from "react";
import { LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout"));

const HomeView = lazy(() => import("./views/HomeView"));

const QueryView = lazy(() => import("./views/QueryView"));

const TopRatedView = lazy(() => import("./views/TopRatedView"));

const UpcomingView = lazy(() => import("./views/UpcomingView"));

const PopularView = lazy(() => import("./views/PopularView"));

const MovieView = lazy(() => import("./views/MovieView"));

const FavList = lazy(() => import("./views/FavList"));

const ErrorView = lazy(() => import("./components/NotFound"));

function App() {
  const [movieName, setMovieName] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (query) => {
    if (query === movieName) return;
    setMovieName(query);

    navigate("/search");
  };

  // useEffect(() => {
  //   if (location.search === "") {
  //     return;
  //   }

  //   const newSearch = new URLSearchParams(location.search).get("query");

  //   setMovieName(newSearch);
  //   navigate({
  //     search: `query=${newSearch}`,
  //   });
  // }, [location.search, navigate]);

  return (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                onSubmit={handleFormSubmit}
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

            <Route path="search" element={<QueryView name={movieName} />} />
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
