import { Link, useLocation } from "react-router-dom";

export const AuthNavbar = () => {
  const location = useLocation();
  const isSignup = location.pathname.startsWith("/signup");

  return (
    <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center px-5 py-3 ">
      <div className="d-flex align-items-center">
        <Link to="/" className="navbar-brand fs-2 h1 m-0 p-0">
          αlpha
        </Link>
      </div>
      <div className="d-flex align-items-center">
        {isSignup ? (
          <Link
            to="/"
            className=" signup-login-button text-decoration-none fw-semibold btn btn-dark rounded-5"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/signup"
            className=" signup-login-button text-decoration-none fw-semibold btn btn-dark rounded-5"
          >
            Signup
          </Link>
        )}
      </div>
    </nav>
  );
};
