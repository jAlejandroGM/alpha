import { Outlet } from "react-router-dom";
import ScrollToTop from "../../../common/components/ScrollToTop";
import { AlumnosDashboardNavbar } from "../components/AlumnosDashboardNavbar";
import { Footer } from "../../../common/components/Footer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const AlumnosDashboardLayout = () => {
  return (
    <ScrollToTop>
      <AlumnosDashboardNavbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
