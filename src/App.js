import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout/Layout"));

const HomeView = lazy(() => import("./views/HomeView/HomeView"));

const TrendingView = lazy(() => import("./views/TrendingView/TrendingView"));

const UpcomingView = lazy(() => import("./views/UpcomingView/UpcomingView"));

const MovieView = lazy(() => import("./views/MovieView/MovieView"));

const NotFoundView = lazy(() => import("./views/NotFoundView/NotFoundView"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path=":movieId" element={<MovieView />} />

            <Route path="trending" element={<TrendingView />} />
            <Route path="trending/:movieId" element={<MovieView />} />

            <Route path="upcoming" element={<UpcomingView />} />
            <Route path="upcoming/:movieId" element={<MovieView />} />

            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
