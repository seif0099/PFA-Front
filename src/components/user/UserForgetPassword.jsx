import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuth } from "../../services/user/IsAuth";
function UserForgetPassword() {
  const [email, setEmail] = useState("email");
  const alertEmail = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  if (!isAuth()) {
    return <Navigate to={"/user/login"} replace />;
  }
  return (
    <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
      <div className="Loader"></div>
      <div className="wrapper">
        <section className="lost-ps-screen-sec">
          <div className="container">
            <div className="lost-ps-screen">
              <a href="index-2.html">
                <img
                  src="../../assets/img/logo.png"
                  className="img-responsive"
                  alt="logo"
                />
              </a>
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!email && alertEmail}
                <button className="btn btn-login">Submit</button>
                <span>
                  Have You Account?
                  <Link to={"/user/login"}>Login</Link>
                </span>
                <span>
                  You Have No Account?
                  <Link to={"/user/register"}> Create An Account</Link>
                </span>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserForgetPassword;
