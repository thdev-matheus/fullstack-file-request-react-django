import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Error } from "../pages/ErrorPage";
import { InitialPage } from "../pages/InitialPage";
import { Store } from "../pages/Store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path: "/pages/:storeName",
    element: <Store />,
    errorElement: <Error />,
  },
]);
