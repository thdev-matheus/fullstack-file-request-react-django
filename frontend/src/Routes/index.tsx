import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>barra</h1>,
    errorElement: <h1>Erro</h1>,
  },
]);
