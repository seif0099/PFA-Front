import React from 'react'
import { Link } from 'react-router-dom';

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
            <a className="navbar-brand" href="index-2.html">
              <img
                src="assets/img/logo-white.png"
                className="logo logo-display"
                alt=""
                style={{ position: "relative", right: "140vh" }}
              />
            </a>
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
                  style={{ right: "-138vh", top: "-6vh", color: "white" }}
                  className="signin"
                >
                  <i class="bi bi-people-fill"></i>
                  User
                </Link>
              </li>
              <li>
                <Link
                  to={"/company"}
                  style={{ right: "-138vh", top: "-6vh", color: "white" }}
                  className="signin"
                >
                  <i class="bi bi-briefcase-fill"></i>
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


export default Navbar
