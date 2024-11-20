import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import Register from "./pages/Register";
import Test from "./pages/Test"
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: "",
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
    errorElement: "",
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: "",
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: "",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_partialHydration: true }} />
  </StrictMode>
);
