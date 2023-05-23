import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/company/Login";
import Cookies from "js-cookie";
function CompanyLogin() {
  const companyLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        console.log(res);
        Cookies.set("jwt", res.jwt);
      })
      .catch((err) => console.log(err));
  };

  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const alertemail = (
    <div class="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill password field !
    </div>
  );
  return (
    <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
      <div className="Loader"></div>
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
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
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!email && alertemail}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!password && alertPassword}

                <button className="btn btn-login" onClick={companyLogin}>
                  Login
                </button>
                <span>
                  You Have No Account?
                  <Link to={"/company/register"}> Create An Account</Link>
                </span>
                <span>
                  <Link to={"/company/forgetpass"}>Forget Password</Link>
                </span>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CompanyLogin;
