import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        },
        {
            path: "/about",
            element: <div>About</div>
        },
      ]
    },
    
  ]);

export default router;