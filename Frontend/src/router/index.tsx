import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error page";
import Home from "../pages/home";
import LoginPage from "../pages/login";
import Register from "../pages/register";
import Root from "../pages/root";
import UnAuthedRoute from "./UnAuthedRoute";
import History from "../pages/history";
import requireAuth from "./requireAuth";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AppRouter = () => {
  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user) {
      axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`;
    } else axios.defaults.headers.common["Authorization"] = "";
  }, [user]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: requireAuth(Root),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
    {
      path: "/",
      element: <UnAuthedRoute />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
