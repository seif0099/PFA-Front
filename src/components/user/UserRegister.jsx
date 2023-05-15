import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { register } from "../../services/user/Register";
function UserRegister() {
  const [errMssg, setErrMsg] = useState(null);
  const Register = (e) => {
    e.preventDefault();
    register(
      username,
      lastname,
      firstname,
      password,
      email,
      address,
      age,
      phone,
      image,
      cv,
      cover
    )
      .then((res) => {
        setEndRegister(true);
        console.log(res);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
        console.log(errMssg);
        setEndRegister(false);
      });
  };
  //STATES
  const [username, setUsername] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [image, setImage] = useState(null);
  const [cv, setCv] = useState(null);
  const [cover, setCover] = useState(null);
  const [endRegister, setEndRegister] = useState(null);

  const disableBtn =
    username === null ||
    lastname === null ||
    firstname === null ||
    password === null ||
    confirmPass === null ||
    email === null ||
    address === null ||
    age === null ||
    phone === null ||
    username === "" ||
    lastname === "" ||
    firstname === "" ||
    password === "" ||
    confirmPass === "" ||
    email === "" ||
    address === "" ||
    age === "" ||
    phone === "" ||
    password !== confirmPass;
  //ALERTS
  const alreadyExistAlert = (
    <div className="alert alert-danger" role="alert" style={{ marginTop: 15 }}>
      {`${errMssg} !`}
    </div>
  );
  const alertUsername = (
    <div className="alert alert-danger" role="alert">
      You should fill username field !
    </div>
  );
  const alertLastname = (
    <div className="alert alert-danger" role="alert">
      You should fill lastName field !
    </div>
  );
  const alertFirstName = (
    <div className="alert alert-danger" role="alert">
      You should fill firstName field !
    </div>
  );
  const alertPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill password field !
    </div>
  );
  const alertConfirmPassword = (
    <div className="alert alert-danger" role="alert">
      You should fill confirm password field !
    </div>
  );
  const alertEmail = (
    <div className="alert alert-danger" role="alert">
      You should fill email field !
    </div>
  );
  const alertAddress = (
    <div className="alert alert-danger" role="alert">
      You should fill address field !
    </div>
  );
  const alertAge = (
    <div className="alert alert-danger" role="alert">
      You should fill age field !
    </div>
  );
  const alertPhone = (
    <div className="alert alert-danger" role="alert">
      You should fill phone field !
    </div>
  );
  const wrongConfirmPass = (
    <div className="alert alert-danger" role="alert">
      Password confirmation doesn't match
    </div>
  );
  const handleAgeChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setAge(value);
    } else {
      setAge("");
    }
  };

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
                {username === "" && alertUsername}
                <input
                  type="text"
                  className="form-control"
                  placeholder="FirstName"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {firstname === "" && alertFirstName}
                <input
                  type="text"
                  className="form-control"
                  placeholder="LastName"
                  onChange={(e) => setLastname(e.target.value)}
                />
                {lastname === "" && alertLastname}
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
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {email === "" && alertEmail}
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
                  placeholder="Age"
                  onChange={handleAgeChange}
                  value={age}
                />
                {age === "" && alertAge}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  onChange={handlePhoneChange}
                  value={phone}
                />
                {phone === "" && alertPhone}
                <label>Choose Profile Image</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label>Choose CV</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="cv"
                  onChange={(e) => setCv(e.target.files[0])}
                />
                <label>Choose Cover Letter</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg,.png,.JPEG"
                  name="cover"
                  onChange={(e) => setCover(e.target.files[0])}
                />

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
      {endRegister === true && <Navigate to={"/user/login"} replace />}
    </div>
  );
}

export default UserRegister;
