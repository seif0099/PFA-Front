import React, { useEffect, useRef, useState } from "react";
import HomeNavbar from "./HomeNavbar";
import Footer from "../shared/Footer";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { apply } from "../../services/offer/ApplyToOffer";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
function JobInfo() {
  const location = useLocation();
  const { state } = location;
  const [job, setJob] = useState(state);
  const navigate = useNavigate();
  const handleApply = (id) => {
    apply(id)
      .then((response) => {
        navigate("/user/home", {
          replace: true,
        });
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  if (!job) {
    return <Navigate to={"/user/home"} replace />;
  }
  if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;
  return (
    <div>
      {console.log(job)}
      <HomeNavbar />
      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-7.jpg')" }}
      >
        <div className="container">
          <h1>Job Infos</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      {
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src={job.image} className="img" alt="" />
              </div>
            </div>

            <div className="row bottom-mrg">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <span className="designation"></span>
                  <div class="edit-pro">
                    <div class="col-md-4 col-sm-6">
                      <label>Job Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={job.titre}
                        disabled
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Experience</label>
                      <input
                        type="text"
                        class="form-control"
                        value={job.experience}
                        disabled
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Salaire</label>
                      <input
                        type="email"
                        class="form-control"
                        value={job.salaire}
                        disabled
                      />
                    </div>

                    <div
                      class="col-md-4 col-sm-6"
                      style={{ marginLeft: "31em" }}
                    >
                      <label>Adress</label>
                      <input
                        type="text"
                        class="form-control"
                        value={job.adresse}
                        disabled
                      />
                    </div>
                    <div class="col-md-12 col-sm-6">
                      <button
                        className="btn btn-success btn-primary small-btn"
                        onClick={() => handleApply(job.id)}
                      >
                        Submit The Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      <Footer />
    </div>
  );
}

export default JobInfo;
