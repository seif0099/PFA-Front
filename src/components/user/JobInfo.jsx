import React, { useEffect, useRef, useState } from "react";
import { getUsers } from "../../services/user/getUsers";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate } from "react-router";
import { userUpdate } from "../../services/user/updateProfie";
import HomeNavbar from "./HomeNavbar";
import Footer from "../shared/Footer";

function JobInfo() {
  const [title, setJobTitle] = useState("");
  const [salaire, setSalaire] = useState("");
    const [experience, setExperience] = useState("");
  const [adresse, setAdresse] = useState("");
    const [image, setImage] = useState("");




//   if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;

  return (
    <div>
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
                <img src="" className="img" alt="" />
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
                      <label>Job Title</label>
                      <input
                        type="text"
                        class="form-control"
                        value={title}
                        disabled
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Experience</label>
                      <input
                        type="text"
                        class="form-control"
                        value={experience}
                        disabled
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Salaire</label>
                      <input
                        type="email"
                        class="form-control"
                        value={salaire}
                        disabled
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Adress</label>
                      <input
                        type="text"
                        class="form-control"
                        value={adresse}
                        disabled
                      />
                    </div>


                    <div class="col-sm-12">
                      <button
                        type="button"
                        class="update-btn"
                        // onClick={handleUpdate}
                      >
                        Submit
                      </button>
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
      <Footer/>
    </div>
  );
}

export default JobInfo;
