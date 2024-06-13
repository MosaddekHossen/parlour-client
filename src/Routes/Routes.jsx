import { createBrowserRouter } from "react-router-dom";
import Error from "../components/pages/error-page/Error";
import Home from "../components/pages/home/Home";
import Root from "./Root";
import Portfolio from "../components/pages/portfolio/Portfolio";

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
      {
        path: "/ourPortfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

export default Routes;
