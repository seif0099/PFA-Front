import React, { useState } from "react";
import CompanyNavbar from "../company/CompanyNavbar";
import Footer from "./../shared/Footer";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
import { addJob } from "../../services/offer/AddJob";
import { useNavigate } from "react-router-dom";
function CreateOffer() {
  const navigate = useNavigate();
  const handleExperience = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) setExpreience(value);
    else setExpreience("");
  };
  const handleSalaire = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) setSalaire(value);
    else setSalaire("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(title, salaire, description, type, experience, adresse, deadLine)
      .then((response) => {
        console.log(response);
        navigate("/company/home");
      })
      .catch((err) => console.log(err));
  };
  const [title, setTitle] = useState(null);
  const [salaire, setSalaire] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [experience, setExpreience] = useState(null);
  const [adresse, setAdresse] = useState(null);
  const [deadLine, setDeadLine] = useState(null);

  if (!isAuth() || !isCompany())
    return <Navigate to={"/company/login"} replace />;
  return (
    <div>
      <CompanyNavbar />
      <div className="detail-desc section">
        <section
          className="inner-header-title"
          style={{
            backgroundImage: "url('/assets/img/banner-5.jpg')",
          }}
        >
          <div className="container">
            <h1>Create Job</h1>
          </div>
        </section>
        <div className="clearfix"></div>

        <div className="container white-shadow">
          <div className="row">
            <div className="detail-pic js">
              <div className="box">
                <input
                  type="text"
                  name="upload-pic[]"
                  id="upload-pic"
                  className="inputfile"
                />
                <label for="upload-pic" style={{ cursor: "default" }}>
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <span></span>
                </label>
              </div>
            </div>
          </div>

          <div className="row bottom-mrg">
            <form className="add-feild">
              <h2 className="detail-title" style={{ width: "fit-content" }}>
                Job Requirement
              </h2>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="salaire"
                    onChange={handleSalaire}
                    value={salaire}
                  />
                </div>
              </div>

              <div className="col-md-12 col-sm-12">
                <textarea
                  className="form-control"
                  placeholder="Job Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Experience"
                    onChange={handleExperience}
                    value={experience}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Adresse"
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="DeadLine"
                    onChange={(e) => setDeadLine(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <button
              className="btn btn-success btn-primary small-btn"
              onClick={handleSubmit}
            >
              Submit The Offer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateOffer;
