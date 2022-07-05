import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";

const Layout = lazy(() => import("./components/Layout"));

const HomeView = lazy(() => import("./views/HomeView"));

const QueryView = lazy(() => import("./views/QueryView"));

const TopRatedView = lazy(() => import("./views/TopRatedView"));

const UpcomingView = lazy(() => import("./views/UpcomingView"));

const MovieView = lazy(() => import("./views/MovieView"));

const UserList = lazy(() => import("./views/UserList"));

const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <>
      <Suspense fallback={<LinearProgress color="secondary" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/movies" />} />

            <Route path="/movies" element={<HomeView />} />
            <Route path="movies/:movieId" element={<MovieView />} />

            <Route path="search" element={<QueryView />} />
            <Route path="search/:movieId" element={<MovieView />} />

            <Route path="top_rated" element={<TopRatedView />} />
            <Route path="top_rated/:movieId" element={<MovieView />} />

            <Route path="upcoming" element={<UpcomingView />} />
            <Route path="upcoming/:movieId" element={<MovieView />} />

            <Route path="userlist" element={<UserList />} />
            <Route path="userlist/:movieId" element={<UserList />} />

            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
