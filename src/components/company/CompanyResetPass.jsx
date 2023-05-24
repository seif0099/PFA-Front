import React, { useState } from "react";
import { resetPassword } from "../../services/company/ResetPass";
import { Link } from "react-router-dom";

const CompanyResetPass = () => {
  const ResetPassword = (e) => {
    e.preventDefault();
    resetPassword(password)
      .then((res) => {
        setValidate(res);
      })
      .catch((err) => {
        setValidate(err);
        console.log(err);
      });
  };
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [validate, setValidate] = useState(null);
  const disableBtn =
    password === null ||
    password === "" ||
    confirmPass === null ||
    confirmPass === "" ||
    password !== confirmPass;
  const passMatchAlert = (
    <div className="alert alert-danger" role="alert" style={{ marginTop: 15 }}>
      Password confirmation doesn't match
    </div>
  );
  const alerteConfirmPass = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill password field !
    </div>
  );
  const alertSuccess = (
    <div className="alert alert-success" role="alert" style={{ marginTop: 40 }}>
      {validate}
    </div>
  );
  const alertFail = (
    <div className="alert alert-danger" role="alert" style={{ marginTop: 40 }}>
      {validate}
    </div>
  );
  if (validate === "Password was changed !") {
    return (
      <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
        <div className="Loader"></div>
        <div className="wrapper">
          <section className="lost-ps-screen-sec">
            <div className="container">
              <div className="lost-ps-screen">
                <Link to={"/"}>
                  <img
                    src="/assets/img/logo.png"
                    className="img-responsive"
                    alt="logo"
                  />
                </Link>
                {alertSuccess}
                <span>
                  Have You Account?
                  <Link to={"/company/login"}>Login</Link>
                </span>
                <span>
                  You Have No Account?
                  <Link to={"/company/register"}> Create An Account</Link>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  if (validate === "Company does not exist !") {
    return (
      <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
        <div className="Loader"></div>
        <div className="wrapper">
          <section className="lost-ps-screen-sec">
            <div className="container">
              <div className="lost-ps-screen">
                <Link to={"/"}>
                  <img
                    src="/assets/img/logo.png"
                    className="img-responsive"
                    alt="logo"
                  />
                </Link>
                {alertFail}
                <span>
                  Have You Account?
                  <Link to={"/company/login"}>Login</Link>
                </span>
                <span>
                  You Have No Account?
                  <Link to={"/company/register"}> Create An Account</Link>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
      <div className="Loader"></div>
      <div className="wrapper">
        <section className="login-screen-sec">
          <div className="container">
            <div className="login-screen">
              <Link to={"/"}>
                <img
                  src="/assets/img/logo.png"
                  className="img-responsive"
                  alt="logo"
                />
              </Link>
              <form>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password === "" && alertPassword}

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                {confirmPass === "" && alerteConfirmPass}
                {confirmPass && password !== confirmPass && passMatchAlert}

                <button
                  className="btn btn-login"
                  onClick={ResetPassword}
                  disabled={disableBtn}
                >
                  Reset Password
                </button>
              </form>
              <span>
                Have You Account?
                <Link to={"/company/login"}>Login</Link>
              </span>
              <span>
                You Have No Account?
                <Link to={"/company/register"}> Create An Account</Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompanyResetPass;
