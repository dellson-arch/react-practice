import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "../layout/DashboardLayout";
import HomePage from "../../features/DashBoard/ui/pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useEffect } from "react";
import { storage } from "../../utils/localStorage";
import { dispatch } from "../store/store";
import { loginUser, registerUser } from "../../features/auth/state/authSlice";
import { usePlayer } from "../../features/player/hooks/usePlayer";

const Approutes = () => {
usePlayer();
  useEffect(() => {
  const users = storage.get("users");
  if (users) {
    dispatch(registerUser(users));
  }

  const loggedUser = storage.get("loggedInUser");
  if (loggedUser) {
    dispatch(loginUser(loggedUser));
  }
}, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
