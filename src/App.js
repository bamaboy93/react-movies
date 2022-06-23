import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));

const TrendingView = lazy(() => import("./views/TrendingView/TrendingView"));

const UpcomingView = lazy(() => import("./views/UpcomingView/UpcomingView"));

const MovieView = lazy(() => import("./views/MovieView/MovieView"));

const NotFoundView = lazy(() => import("./views/NotFoundView/NotFoundView"));

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />

          <Route path="/movies" element={<HomeView />} />
          <Route path="/movies/:movieId" element={<MovieView />} />

          <Route path="/trending" element={<TrendingView />} />
          <Route path="/trending/:movieId" element={<MovieView />} />

          <Route path="/upcoming" element={<UpcomingView />} />
          <Route path="/upcoming/:movieId" element={<MovieView />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>

      <ToastContainer
        autoClose={2000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
