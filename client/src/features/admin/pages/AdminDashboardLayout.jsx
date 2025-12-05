import { Outlet } from "react-router-dom";
import ScrollToTop from "../../../common/components/ScrollToTop";
import { AdminDashboardNavbar } from "../components/AdminDashboardNavbar";
import { Footer } from "../../../common/components/Footer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const AdminDashboardLayout = () => {
  return (
    <ScrollToTop>
      <AdminDashboardNavbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
