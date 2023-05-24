import React, { useEffect, useState } from "react";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
import { getOffre } from "./../../services/company/offer";
function ApplicantManager() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = getOffre();
    for (var i = 0; i <= res.length; i++) {
      data[i] = res[i];
      console.log(data[i], "aa");
    }
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

              {data.map((item) => (
                <article>
                  <div className="mng-company">
                    <div className="col-md-2 col-sm-2">
                      <div className="mng-company-pic">
                        <img
                          src={item.image}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="mng-company-name">
                        <h4>
                          {item.title}
                          <span className="cmp-tagline">{item.experience}</span>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="mng-company-location">
                        <p>
                          <i className="fa fa-map-marker"></i> {item.address}
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ApplicantManager;
