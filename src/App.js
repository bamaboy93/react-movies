import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));

const MovieView = lazy(() => import("./views/MovieView/MovieView"));

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route path="/movies/:movieId" element={<MovieView />} />
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
