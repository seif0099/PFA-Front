import React from "react";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
const UserHome = () => {
  if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;


  return (
    <div>
      <Navbar />
      <div className="clearfix"></div>

      <section
        className="inner-header-title no-br advance-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h2>
            <span>Work There.</span> Find the dream job
          </h2>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="bottom-search-form">
        <div className="container">
          <form
            className="bt-form"
            style={{
              right: "25vh",
              position: "relative",
            }}
          >
            <div className="col-md-3 col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Searc By location"
              />
            </div>

            <div className="col-md-3 col-sm-6">
              <button type="submit" className="btn btn-primary">
                Search Job
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="brows-job-category gray-bg">
        <div className="container">
          <div className="col-md-9 col-sm-12">
            <div className="full-card">
              <div className="card-header">
                <div className="row mrg-0">
                  <div className="col-md-4 col-sm-4"></div>
                  <div className="col-md-4 col-sm-4">
                    <ol className="breadcrumb pull-right">
                      <li>
                        <a href="#">
                          <i className="fa fa-home"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">Full Time</a>
                      </li>
                      <li className="active">IT Jobs</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div
                className="card-body"
                style={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       height: "100vh" /* Adjust the height as needed */


                }}
              >
                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="/assets/img/com-2.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Product Designer</h4>
                        </a>
                        <span>Google Ltd</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="advance-search-job-locat">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <a
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#apply-job"
                        className="btn advance-search"
                        title="apply"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="/assets/img/com-2.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Product Designer</h4>
                        </a>
                        <span>Google Ltd</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="advance-search-job-locat">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <a
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#apply-job"
                        className="btn advance-search"
                        title="apply"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </article>
              </div>
            </div>

            <div className="row">
              <ul className="pagination">
                <li>
                  <a href="#">&laquo;</a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-ellipsis-h"></i>
                  </a>
                </li>
                <li>
                  <a href="#">&raquo;</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserHome;
