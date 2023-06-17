import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { logout } from "../../services/shared/Logout";
function HomeNavbar() {
  const Logout = () => {
    logout();
    return true;
  };
  const currentLocation1 = useLocation();
  const shouldDisplayHomeButton = currentLocation1.pathname !== "/user/home";

  const currentLocation3 = useLocation();
  const shouldDisplayProfileButton =
    currentLocation3.pathname !== "/user/editprofile";

  const currentLocation2 = useLocation();
  const shouldDisplayApplicantButton =
    currentLocation2.pathname !== "/company/applicant";
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="navbar-header">
            <div className="navbar-brand">
              <img
                src="/assets/img/logo-white.png"
                className="logo logo-display"
                alt=""
                style={{ position: "relative", right: "140vh" }}
              />
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
              style={{
                display: "inline-block",
                position: "relative",
                right: "105rem",
              }}
            >
              <li>
                <Link
                  to={"/"}
                  style={{ right: "-138vh", top: "-6vh", color: "white" }}
                  className="signin"
                  onClick={logout}
                >
                  <i className="bi bi-power"></i>
                  Disconnect
                </Link>
                {Logout && <Navigate to={""} />}
              </li>
              {shouldDisplayProfileButton && (
                <li>
                  <Link
                    to={"/user/editprofile"}
                    style={{ right: "-138vh", top: "-6vh", color: "white" }}
                    className="signin"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                    Edit Profile
                  </Link>
                </li>
              )}
              {shouldDisplayHomeButton && (
                <li>
                  <Link
                    to={"/user/home"}
                    style={{ right: "-138vh", top: "-6vh", color: "white" }}
                    className="signin"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                    Home
                  </Link>
                </li>
              )}
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            ></ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;
