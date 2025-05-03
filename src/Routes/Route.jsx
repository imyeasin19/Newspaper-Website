import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            index: true,
            element: <div>Home</div>
        },
        {
            path: "/about",
            element: <div>About</div>
        }
      ]
    },
    
  ]);

export default router;