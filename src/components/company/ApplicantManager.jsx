import React, { useEffect, useState } from "react";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
import { getUserToCompany } from "../../services/company/GetUsersToCompany";
function ApplicantManager() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUserToCompany()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!isAuth() || !isCompany())
    return <Navigate to={"/company/login"} replace />;

  return (
    <div>
      <CompanyNavbar />
      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-2.jpg')" }}
      >
        <div className="container">
          <h1>Applicants Manager</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="manage-company gray">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{
                top: "-6vh",
              }}
            >
              <h3>Jobs Requests to our company</h3>
              {data.map((item) => {
                item.postules.map((user, index) => {
                  return (
                    <article key={index}>
                      <div className="mng-company">
                        <div className="col-md-2 col-sm-1">
                          <img
                            src={user.image}
                            className="img-responsive"
                            alt="image"
                            style={{ width: "10em" }}
                          />
                        </div>
                        <div className="col-md-2 col-sm-1">
                          <div className="mng-company-location">
                            <p style={{ fontWeight: "bolder" }}>{user.email}</p>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-1">
                          <div className="mng-company-location">
                            <p style={{ fontWeight: "bold" }}>
                              {user.telephone}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-1">
                          <div className="mng-company-location">
                            <p style={{ fontWeight: "bold" }}>{item.titre} </p>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-1">
                          <div className="mng-company-location">
                            <p style={{ fontWeight: "bold" }}>
                              {item.salaire + " $"}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-1">
                          <div className="mng-company-location">
                            <p style={{ fontWeight: "bold" }}>
                              {item.experience} years
                            </p>
                          </div>
                        </div>
                        <div className="col-md-1 col-sm-1">
                          <div className="mng-company-action">
                            <a href="#" data-toggle="tooltip" title="Edit">
                              <i className="fa fa-edit"></i>
                            </a>
                            <a href="#" data-toggle="tooltip" title="Delete">
                              <i className="fa fa-trash-o"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ApplicantManager;
