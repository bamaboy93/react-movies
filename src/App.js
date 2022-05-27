import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppBar from "./components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));

function App() {
  return (
    <>
      <AppBar />

      <HomeView />
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
