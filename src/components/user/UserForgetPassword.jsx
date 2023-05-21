import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendResetMail } from "../../services/user/ResetPass";
function UserForgetPassword() {
  const [email, setEmail] = useState(null);
  const [validate, setValidate] = useState();
  const SendResetMail = (e) => {
    e.preventDefault();
    sendResetMail(email)
      .then((res) => {
        setValidate(res);
      })
      .catch((err) => setValidate(err));
  };

  let disabledBtn = email === null || email === "";
  const alertEmail = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertSuccess = (
    <div className="alert alert-success" role="alert" style={{ marginTop: 40 }}>
      {validate}
    </div>
  );
  const alertFail = (
    <div className="alert alert-danger" role="alert" style={{ marginTop: 15 }}>
      {validate}
    </div>
  );
  if (validate === "Check your Email !") {
    return (
      <div className="simple-bg-screen" style={{ minHeight: "100vh" }}>
        <div className="Loader"></div>
        <div className="wrapper">
          <section className="lost-ps-screen-sec">
            <div className="container">
              <div className="lost-ps-screen">
                <a href="index-2.html">
                  <img
                    src="/assets/img/logo.png"
                    className="img-responsive"
                    alt="logo"
                  />
                </a>
                {alertSuccess}
                <span>
                  Have You Account?
                  <Link to={"/user/login"}>Login</Link>
                </span>
                <span>
                  You Have No Account?
                  <Link to={"/user/register"}> Create An Account</Link>
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
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email === "" && alertEmail}
                <button
                  className="btn btn-login"
                  disabled={disabledBtn}
                  onClick={SendResetMail}
                >
                  Send Mail
                </button>
                {validate === "User does not exist !" && alertFail}
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
