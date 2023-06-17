import React, { useEffect, useRef, useState } from "react";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate } from "react-router";
import { companyUpdate } from "../../services/company/updateCompany";
import { getCompanyInfo } from "../../services/company/getCompanyInfo";
import { isCompany } from "../../services/company/IsCompany";

function CompanyProfile() {
  const handleuploadImage = (e) => {
    setImage(e.target.files[0]);
  };
  const [companyName, setCompanyName] = useState("");
  const [image, setImage] = useState(null);

  const [description, setDesciprtion] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [code, setCode] = useState("");
  const uploadImg = useRef(null);

  useEffect(() => {
    getCompanyInfo()
      .then((response) => {
        setCompanyName(response.nomEntreprise);
        setDesciprtion(response.description);
        setCode(response.codeEntreprise);
        setEmail(response.email);
        setTelephone(response.telephone);
        setAdresse(response.adresse);
        setPassword(response.password);
        setImage(response.image);
      })
      .catch((err) => console.log(err));
  }, []);

 if (!isAuth() || !isCompany()) return <Navigate to={"/company/login"} replace />;

  const handleUpdate = (e) => {
     e.preventDefault();
    companyUpdate(
      companyName,
      description,
      password,
      email,
      adresse,
      code,
      telephone,
      image
    )
      .then((response) => {
        console.log("Profile updated successfully", response);
      })
      .catch((err) => {
        console.error("Error updating profile", err);
      });
  };

  return (
    <div>
      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h1>Company Profile</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      {
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src={image} className="img" alt="" />
                <input
                  type="file"
                  ref={uploadImg}
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleuploadImage}
                />
                <a
                  href="#"
                  className="detail-edit"
                  title="edit"
                  onClick={() => uploadImg.current.click()}
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
                      <label>Company Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Description</label>
                      <input
                        type="text"
                        class="form-control"
                        value={description}
                        onChange={(e) => setDesciprtion(e.target.value)}
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Adress</label>
                      <input
                        type="text"
                        class="form-control"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Company Code</label>
                      <input
                        type="text"
                        class="form-control"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Old Password</label>
                      <input type="password" class="form-control" />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div class="col-sm-12">
                      <button
                        type="button"
                        class="update-btn"
                        onClick={handleUpdate}
                      >
                        Update Now
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
    </div>
  );
}

export default CompanyProfile;
