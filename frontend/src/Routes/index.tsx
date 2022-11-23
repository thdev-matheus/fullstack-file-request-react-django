import { createBrowserRouter } from "react-router-dom";
import { InitialPage } from "../pages/InitialPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <h1>Erro</h1>,
  },
]);
