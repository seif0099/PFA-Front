import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { logout } from "../../services/shared/Logout";
import ManageProfile from "./../user/ManageProfile";
function CompanyNavbar() {
  const Logout = () => {
    logout();
    return true;
  };
  const currentLocation1 = useLocation();
  const shouldDisplayHomeButton = currentLocation1.pathname !== "/company/home";

  const currentLocation3 = useLocation();
  const shouldDisplayProfileButton =
    currentLocation3.pathname !== "/company/editprofileCompany";

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
              {shouldDisplayApplicantButton && (
                <li>
                  <Link
                    to={"/company/applicant"}
                    style={{ right: "-138vh", top: "-6vh", color: "white" }}
                    className="signin"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                    The applicants
                  </Link>
                </li>
              )}
              {shouldDisplayHomeButton && (
                <li>
                  <Link
                    to={"/company/home"}
                    style={{ right: "-138vh", top: "-6vh", color: "white" }}
                    className="signin"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                    Home
                  </Link>
                </li>
              )}
              {shouldDisplayProfileButton && (
                <li>
                  <Link
                    to={"/company/editprofileCompany"}
                    style={{ right: "-138vh", top: "-6vh", color: "white" }}
                    className="signin"
                  >
                    <i className="bi bi-briefcase-fill"></i>
                    Edit Profile
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

export default CompanyNavbar;
