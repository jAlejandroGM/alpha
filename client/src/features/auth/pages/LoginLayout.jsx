import { Outlet } from "react-router-dom";
import ScrollToTop from "../../../common/components/ScrollToTop";
import { Footer } from "../../../common/components/Footer";
import { LoginNavbar } from "../components/LoginNavbar";

export const LoginLayout = () => {
  return (
    <ScrollToTop>
      <LoginNavbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
