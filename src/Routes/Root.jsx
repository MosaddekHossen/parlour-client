import Footer from "../components/pages/error-page/Footer";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
