import { Outlet } from "react-router-dom";
import ScrollToTop from "../../../common/components/ScrollToTop";
import { Footer } from "../../../common/components/Footer";
import { SignupNavbar } from "../components/SignupNavbar";

export const SignupLayout = () => {
  return (
    <ScrollToTop>
      <SignupNavbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
