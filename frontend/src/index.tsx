import ReactDOM from "react-dom/client";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Context } from "./contexts";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
    />
    <GlobalStyle />
    <RouterProvider router={router} />
  </Context>
);
