import { createBrowserRouter } from "react-router-dom";
import Error from "../components/pages/error-page/Error";
import Home from "../components/pages/home/Home";
import Root from "./Root";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
