import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
const UserInfo = () => {
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState(state);
  console.log(user)

  if (!user) {
    
    return <Navigate to={"/company/applicant"} replace />;
  }
  return (
    <div>
      <CompanyNavbar />
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
                  <img src={user.image} className="img" alt="" />
                  <input
                    type="file"
                    //   ref={uploadImg}
                    id="fileInput"
                    style={{ display: "none" }}
                    //   onChange={handleuploadImage}
                  />
                  <a
                    href="#"
                    className="detail-edit"
                    title="edit"
                    //   onClick={() => uploadImg.current.click()}
                  >
                    <i className="fa fa-pencil"></i>
                  </a>
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
                          type="text"
                          class="form-control"
                          value={user.nom}
                          disabled
                        />
                      </div>
                      <div class="col-md-4 col-sm-6">
                        <label>last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.prenom}
                          disabled
                        />
                      </div>

                      <div class="col-md-4 col-sm-6">
                        <label>adresse</label>
                        <input
                          type="email"
                          class="form-control"
                          value={user.adresse}
                          disabled
                        />
                      </div>

                      <div class="col-md-4 col-sm-6">
                        <label>cv</label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.cv}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row no-padd">
                <div className="detail pannel-footer">
                  <div className="col-md-5 col-sm-5">
                    <ul className="detail-footer-social">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
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
