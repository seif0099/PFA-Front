import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../services/company/Register";

function CompanyRegister() {
  const companyRegister = (e) => {
  e.preventDefault();
  register(companyName,description,phone,siteWeb,companyCode,email, password,address,confirmPass)
    .then((res) => {
      console.log(res);
      Cookies.set("jwt", res.jwt);
    })
    .catch((err) => console.log(err));
};



const [companyName, setCompanyName] = useState("companyName");
  const [description, setDescription] = useState("description");
  const [phone, setPhone] = useState("phone");
  const [siteWeb, setSiteWeb] = useState("siteWeb");
  const [companyCode, setCompanyCode] = useState("companyCode");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("address");
    const [confirmPass, setConfirmPass] = useState("confirmPass");
  const [address, setAddress] = useState("address");




 const alertCompanyName = (
    <div class="alert alert-danger" role="alert">
      You should fill the company name !
    </div>
  );
  const alertDescription = (
    <div class="alert alert-danger" role="alert">
      You should fill the description !
    </div>
  );

  const alertPhone = (
    <div class="alert alert-danger" role="alert">
      You should fill telephone !
    </div>
  );
  const alertSiteWeb = (
    <div class="alert alert-danger" role="alert">
      You should fill the web site name !
    </div>
  );
  const alertCompanyCode = (
    <div class="alert alert-danger" role="alert">
      You should fill the company code field !
    </div>
  );
    const alertEmail = (
    <div class="alert alert-danger" role="alert">
      You should fill email field !
    </div>
    );
      const alertPassword = (
    <div class="alert alert-danger" role="alert">
      You should fill email field !
    </div>
      );
        const alertAddress = (
          <div class="alert alert-danger" role="alert">
            You should fill address field !
          </div>
        );
          const wrongConfirmPass = (
            <div class="alert alert-danger" role="alert">
              Password confirmation doesn't match
            </div>
          );
           const alertConfirmPassword = (
             <div class="alert alert-danger" role="alert">
               You should fill confirm password field !
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
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                {!companyName && alertCompanyName}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                {!description && alertDescription}

                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!email && alertEmail}

                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!password && alertPassword}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
                {!confirmPass && alertConfirmPassword}
                {!confirmPass && password !== confirmPass && wrongConfirmPass}

                <input
                  type="text"
                  className="form-control"
                  placeholder="site web"
                  onChange={(e) => setSiteWeb(e.target.value)}
                />
                {!siteWeb && alertSiteWeb}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {!address && alertAddress}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {!phone && alertPhone}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Code"
                  onChange={(e) => setCompanyCode(e.target.value)}
                />
                {!companyCode && alertCompanyCode}

                <button className="btn btn-login"
                onClick={companyRegister}
                >
                  
                  Register
                
                </button>
                <span>
                  Have You Account?
                  <Link to={"/company/login"}>Login</Link>
                </span>
                <span>
                  <Link to={"/user/forgetpass"}>Forget Password</Link>
                </span>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}





export default CompanyRegister;
