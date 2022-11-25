import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { InitialPage } from "../pages/InitialPage";
import { Store } from "../pages/Store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <h1>Erro</h1>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <h1>Erro</h1>,
  },
  {
    path: "/pages/:storeName",
    element: <Store />,
    errorElement: <h1>Erro</h1>,
  },
]);
