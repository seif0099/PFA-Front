import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../services/company/Register";

function CompanyRegister() {
  const Register = (e) => {
    e.preventDefault();
    register(
      companyName,
      description,
      phone,
      siteWeb,
      companyCode,
      email,
      password,
      address,
      image
    )
      .then((res) => {
        setEndRegister(true);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        setEndRegister(false);
      });
  };

  const [companyName, setCompanyName] = useState(null);
  const [description, setDescription] = useState(null);
  const [phone, setPhone] = useState(null);
  const [siteWeb, setSiteWeb] = useState(null);
  const [companyCode, setCompanyCode] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [address, setAddress] = useState(null);
  const [image, setImage] = useState(null);
  const [endRegister, setEndRegister] = useState(null);
  const [errMssg, setErrMsg] = useState(null);

  const disableBtn =
    companyName === null ||
    companyName === "" ||
    description === null ||
    description === "" ||
    phone === null ||
    phone === "" ||
    siteWeb === null ||
    siteWeb === "" ||
    companyCode === null ||
    companyCode === "" ||
    email === null ||
    email === "" ||
    password === null ||
    password === "" ||
    confirmPass === null ||
    confirmPass === "" ||
    address === null ||
    address === "" ||
    image === null;

  const alreadyExistAlert = (
    <div className="alert alert-danger" role="alert" style={{ marginTop: 15 }}>
      {`${errMssg} !`}
    </div>
  );
  const alertCompanyImage = (
    <div className="alert alert-info" role="alert">
      You should choose the Company Image !
    </div>
  );

  const alertCompanyName = (
    <div className="alert alert-danger" role="alert">
      You should fill the company name !
    </div>
  );
  const alertDescription = (
    <div className="alert alert-danger" role="alert">
      You should fill the description !
    </div>
  );

  const alertPhone = (
    <div className="alert alert-danger" role="alert">
      You should fill telephone !
    </div>
  );
  const alertSiteWeb = (
    <div className="alert alert-danger" role="alert">
      You should fill the web site name !
    </div>
  );
  const alertCompanyCode = (
    <div className="alert alert-danger" role="alert">
      You should fill the company code field !
    </div>
  );
  const alertEmail = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertAddress = (
    <div className="alert alert-danger" role="alert">
      You should fill address field !
    </div>
  );
  const wrongConfirmPass = (
    <div className="alert alert-danger" role="alert">
      Password confirmation doesn't match
    </div>
  );
  const alertConfirmPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill confirm password field !
    </div>
  );

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setPhone(value);
    } else {
      setPhone("");
    }
  };

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
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {companyName === "" && alertCompanyName}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                {description === "" && alertDescription}

                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email === "" && alertEmail}

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
                {confirmPass === "" && alertConfirmPassword}
                {confirmPass && password !== confirmPass && wrongConfirmPass}

                <input
                  type="text"
                  className="form-control"
                  placeholder="site web"
                  onChange={(e) => setSiteWeb(e.target.value)}
                />
                {siteWeb === "" && alertSiteWeb}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {address === "" && alertAddress}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={handlePhoneChange}
                  value={phone}
                />
                {phone === "" && alertPhone}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Code"
                  onChange={(e) => setCompanyCode(e.target.value)}
                />
                {companyCode === "" && alertCompanyCode}
                <label>Choose Company Cover</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image === null && alertCompanyImage}
                <button
                  className="btn btn-login"
                  disabled={disableBtn}
                  onClick={Register}
                >
                  Register
                </button>
                {errMssg && alreadyExistAlert}
                <span>
                  Have You Account?
                  <Link to={"/company/login"}>Login</Link>
                </span>
                <span>
                  <Link to={"/company/forgetpass"}>Forget Password</Link>
                </span>
              </form>
            </div>
          </div>
        </section>
      </div>
      {endRegister === true && <Navigate to={"/company/login"} replace />}
    </div>
  );
}

export default CompanyRegister;
