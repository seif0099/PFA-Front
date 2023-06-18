import React, { useRef, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
import { isCompany } from "../../services/company/IsCompany";
import { isAuth } from "../../services/shared/isAuth";
const UserInfo = () => {
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState(state);

  if (!user) {
    return <Navigate to={"/company/applicant"} replace />;
  }
  if (!isAuth() || !isCompany())
    return <Navigate to={"/company/login"} replace />;
  return (
    <div>
      <CompanyNavbar />
      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-7.jpg')" }}
      >
        <div className="container">
          <h1>User Infos</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      {
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src={user.image} className="img" alt="" />
              </div>
            </div>

            <div className="row bottom-mrg">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <h4>Info</h4>
                  <span className="designation"></span>
                  <div class="edit-pro">
                    <div class="col-md-4 col-sm-6">
                      <label>First Name</label>
                      <input
                        style={{ cursor: "pointer" }}
                        type="text"
                        class="form-control"
                        value={user.nom}
                        disabled
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Last Name</label>
                      <input
                        style={{ cursor: "pointer" }}
                        type="text"
                        class="form-control"
                        value={user.prenom}
                        disabled
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Adress</label>
                      <input
                        style={{ cursor: "pointer" }}
                        type="email"
                        class="form-control"
                        value={user.adresse}
                        disabled
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Email</label>
                      <input
                        style={{ cursor: "pointer" }}
                        type="email"
                        class="form-control"
                        value={user.email}
                        disabled
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>User CV</label>
                      <Link to={user.cv} target="_blank">
                        <input
                          style={{ cursor: "pointer" }}
                          type="email"
                          class="form-control"
                          value="Click Here"
                          disabled
                        />
                      </Link>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>User Cover</label>
                      <Link to={user.lettreMotivation} target="_blank">
                        <input
                          style={{ cursor: "pointer" }}
                          type="email"
                          class="form-control"
                          value="Click Here"
                          disabled
                        />
                      </Link>
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
};

export default UserInfo;
