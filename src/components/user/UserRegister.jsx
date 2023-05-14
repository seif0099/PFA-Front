import React, { useState } from "react";
import { Link } from "react-router-dom";
function UserRegister() {
  //STATES
  const [username, setUsername] = useState("username");
  const [lastname, setLastname] = useState("lastname");
  const [firstname, setFirstname] = useState("firstname");
  const [password, setPassword] = useState("password");
  const [confirmPass, setConfirmPass] = useState("password");
  const [email, setEmail] = useState("email");
  const [address, setAddress] = useState("address");
  const [age, setAge] = useState("age");
  const [phone, setPhone] = useState("phone");
  //ALERTS
  const alertUsername = (
    <div class="alert alert-danger" role="alert">
      You should fill username field !
    </div>
  );
  const alertLastname = (
    <div class="alert alert-danger" role="alert">
      You should fill lastName field !
    </div>
  );
  const alertFirstName = (
    <div class="alert alert-danger" role="alert">
      You should fill firstName field !
    </div>
  );
  const alertPassword = (
    <div class="alert alert-danger" role="alert">
      You should fill password field !
    </div>
  );
  const alertConfirmPassword = (
    <div class="alert alert-danger" role="alert">
      You should fill confirm password field !
    </div>
  );
  const alertEmail = (
    <div class="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertAddress = (
    <div class="alert alert-danger" role="alert">
      You should fill address field !
    </div>
  );
  const alertAge = (
    <div class="alert alert-danger" role="alert">
      You should fill age field !
    </div>
  );
  const alertPhone = (
    <div class="alert alert-danger" role="alert">
      You should fill phone field !
    </div>
  );
  const wrongConfirmPass = (
    <div class="alert alert-danger" role="alert">
      Password confirmation doesn't match
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
                  placeholder="Useraname"
                  onChange={(e) => setUsername(e.target.value)}
                />
                {!username && alertUsername}
                <input
                  type="text"
                  className="form-control"
                  placeholder="FirstName"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {!firstname && alertFirstName}
                <input
                  type="text"
                  className="form-control"
                  placeholder="LastName"
                  onChange={(e) => setLastname(e.target.value)}
                />
                {!lastname && alertLastname}
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
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!email && alertEmail}
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
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
                {!age && alertAge}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {!phone && alertPhone}
                <label>Choose Profile Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="image"
                />
                <label>Choose CV</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="cv"
                />
                <label>Choose Cover Letter</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="cover"
                />

                <button className="btn btn-login">Register</button>
                <span>
                  Have You Account?
                  <Link to={"/user/login"}>Login</Link>
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

export default UserRegister;
