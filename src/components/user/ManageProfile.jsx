import React, { useEffect, useRef, useState } from "react";
import { getUsers } from "../../services/user/getUsers";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate } from "react-router";
import { userUpdate } from "../../services/user/updateProfie";

function ManageProfile() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
    console.log(data);
  }, []);

  const handleUpdate = () => {
    console.log();
  };

  if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;

  return (
    <div>
      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h1>Employer Profilee</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      {data && (
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src={data.image} className="img" alt="" />
                <a href="#" className="detail-edit" title="edit">
                  <i className="fa fa-pencil"></i>
                </a>
              </div>
            </div>

            <div className="row bottom-mrg">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <h4>Info</h4>
                  <span className="designation">{data.usernamer}</span>
                  <div class="edit-pro">
                    <div class="col-md-4 col-sm-6">
                      <label>First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={data.prenom}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={data.nom}
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder={data.email}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Phone</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={data.telephone}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>Adress</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder={data.adresse}
                      />
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Old Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder={data.password}
                      />
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <label>New Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="*********"
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
      )}
    </div>
  );
}

export default ManageProfile;
