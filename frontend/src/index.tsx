import ReactDOM from "react-dom/client";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
