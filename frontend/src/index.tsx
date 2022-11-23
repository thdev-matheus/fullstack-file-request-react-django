import ReactDOM from "react-dom/client";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Context } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Context>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Context>
);
