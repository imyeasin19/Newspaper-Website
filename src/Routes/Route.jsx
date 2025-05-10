import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            index: true,
            Component:Home,
        },
        {
            path:'/category/:id',
            Component:CategoryNews,
            loader: () => fetch('/news.json')
        },
        {
            path: "/about",
            element: <div>About</div>
        },
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          Component: Login,
        },
        {
          path: '/auth/register',
          Component: Register,
        }
      ]
    },
    {
      path: '/news-details/:id',
      element: 
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: () => fetch('/news.json'),
      hydrateFallbackElement: true,

    }
    
  ]);

export default router;