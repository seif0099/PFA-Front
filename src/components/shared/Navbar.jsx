import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
            <div className="navbar-brand" to={"/"}>
              <img
                src="/assets/img/logo-white.png"
                className="logo logo-display"
                alt=""
                style={{ position: "relative", right: "136rem" }}
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
                right: "100vh",
              }}
            >
              <li>
                <Link
                  to={"/user"}
                  style={{ right: "-127rem", top: "-6rem", color: "white" }}
                  className="signin"
                >
                  <i className="bi bi-people-fill"></i>
                  User
                </Link>
              </li>
              <li>
                <Link
                  to={"/company"}
                  style={{ right: "-127rem", top: "-6rem", color: "white" }}
                  className="signin"
                >
                  <i className="bi bi-briefcase-fill"></i>
                  Company
                </Link>
              </li>
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

export default Navbar;
