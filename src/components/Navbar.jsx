import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import authServices from "./Services/AuthServices";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [userType, setUserType] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    if (authServices.getLoggedInUser() != null) {
      var type = authServices.getLoggedInUser().userType;
      setUserType(type);
    } else {
      setUserType("patient");
    }

    setIsLoggedIn(authServices.isLoggedIn());
  }, []);
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <div class="container">
        <Link class="navbar-brand" href="#" to="/">
          AR MEDICARE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {userType == "doctor" ? (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/doctorAppointments"
                  >
                    Appointments
                  </Link>
                </li>
              </>
            ) : userType == "respondant" ? (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/respondantRequests"
                  >
                    Requests
                  </Link>
                  </li>
                  <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/respondant/AcceptedRequests"
                  >
                    Accepted
                  </Link>
                </li>
              </>
            ) : isLoggedIn && userType == "patient" ? (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/doctors"
                  >
                    Doctors
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/respondants"
                  >
                    Respondants
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/medicines"
                  >
                    Medicines
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {isLoggedIn ? (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/login"
                    onClick={(e) => {
                      authServices.logout();
                      setIsLoggedIn(false);
                    }}
                  >
                    Sign out
                  </Link>
                </li>
                <li 
                
                    class=" nav-item nav-link active"
                    aria-current="page"
                    href="#"
                   
                  >
                    Hi, <strong>{authServices.getLoggedInUser().username}</strong>
                
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/doctors"
                  >
                    Doctors
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/respondants"
                  >
                    Respondants
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/medicines"
                  >
                    Medicines
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
