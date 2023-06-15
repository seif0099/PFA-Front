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
        style={{ backgroundImage: "url('assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h2>
            <span>Work There.</span> Find the dream job
          </h2>
          <p>
            <span>704</span> new job in the last <span>7</span> days.
          </p>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="bottom-search-form">
        <div className="container">
          <form className="bt-form">
            <div className="col-md-3 col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Skills, Designations, Keyword"
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Searc By location"
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <select className="form-control">
                <option>By Category</option>
                <option>Information Technology</option>
                <option>Mechanical</option>
                <option>Hardware</option>
              </select>
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
                  <div className="col-md-4 col-sm-4">
                    <select
                      className="selectpicker form-control"
                      multiple
                      title="Job Type"
                    >
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Freelancer</option>
                      <option>Internship</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-4 small-padd">
                    <select
                      className="selectpicker form-control"
                      multiple
                      title="All Categories"
                    >
                      <option>Teacher Jobs</option>
                      <option>Consultant Jobs</option>
                      <option>IT Jobs</option>
                      <option>Sales Jobs</option>
                      <option>Graphic Designer Jobs</option>
                    </select>
                  </div>
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

              <div className="card-body">
                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-2.jpg"
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
                            src="assets/img/com-6.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Project Manager</h4>
                        </a>
                        <span>Vertue Ltd</span>
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
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-7.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Database Designer</h4>
                        </a>
                        <span>Twitter Ltd</span>
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
                        href="#"
                        className="btn applied advance-search"
                        title="applied"
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                        Applied
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
                            src="assets/img/com-2.jpg"
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
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-5.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Human Resource</h4>
                        </a>
                        <span>Skype Ltd</span>
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
                        href="#"
                        className="btn applied advance-search"
                        title="applied"
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                        Applied
                      </a>
                    </div>
                  </div>
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-6.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Project Manager</h4>
                        </a>
                        <span>Vertue Ltd</span>
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
                        title="applied"
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
                            src="assets/img/com-7.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>CEO & Manager</h4>
                        </a>
                        <span>Twitter</span>
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
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-4.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Product Designer</h4>
                        </a>
                        <span>Microsoft Ltd</span>
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
                        href="#"
                        className="btn applied advance-search"
                        title="applied"
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                        Applied
                      </a>
                    </div>
                  </div>
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-3.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>PHP Developer</h4>
                        </a>
                        <span>Honda Ltd</span>
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
                </article>

                <article className="advance-search-job">
                  <div className="row no-mrg">
                    <div className="col-md-6 col-sm-6">
                      <a href="new-job-detail.html" title="job Detail">
                        <div className="advance-search-img-box">
                          <img
                            src="assets/img/com-1.jpg"
                            className="img-responsive"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="advance-search-caption">
                        <a href="new-job-detail.html" title="Job Dtail">
                          <h4>Web Designer</h4>
                        </a>
                        <span>Autodesk Ltd</span>
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
                        href="#"
                        className="btn applied advance-search"
                        title="applied"
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                        Applied
                      </a>
                    </div>
                  </div>
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

            <div className="row">
              <div className="ad-banner">
                <img
                  src="http://via.placeholder.com/728x90"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12">
            <div className="sidebar right-sidebar">
              <div className="side-widget">
                <h2 className="side-widget-title">Job Alert</h2>
                <div className="job-alert">
                  <div className="widget-text">
                    <form>
                      <input
                        type="text"
                        name="keyword"
                        className="form-control"
                        placeholder="Job Keyword"
                      />
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email ID"
                      />
                      <button type="submit" className="btn btn-alrt">
                        Add Alert
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="side-widget">
                <h2 className="side-widget-title">Advertisment</h2>
                <div className="widget-text padd-0">
                  <div className="ad-banner">
                    <img
                      src="http://via.placeholder.com/320x285"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="side-widget">
                <h2 className="side-widget-title">Compensation</h2>
                <div className="widget-text padd-0">
                  <ul>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </span>
                      Under $10,000
                      <span className="pull-right">102</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="2" />
                        <label for="2"></label>
                      </span>
                      $10,000 - $15,000
                      <span className="pull-right">78</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="3" />
                        <label for="3"></label>
                      </span>
                      $15,000 - $20,000
                      <span className="pull-right">12</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="4" />
                        <label for="4"></label>
                      </span>
                      $20,000 - $30,000
                      <span className="pull-right">85</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="5" />
                        <label for="5"></label>
                      </span>
                      $30,000 - $40,000
                      <span className="pull-right">307</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="side-widget">
                <h2 className="side-widget-title">
                  <a href="#designation" data-toggle="collapse">
                    Designation
                    <i
                      className="pull-right fa fa-angle-double-down"
                      aria-hidden="true"
                    ></i>
                  </a>
                </h2>
                <div className="widget-text padd-0 collapse" id="designation">
                  <ul>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </span>
                      Web Designer
                      <span className="pull-right">102</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="2" />
                        <label for="2"></label>
                      </span>
                      Php Developer
                      <span className="pull-right">78</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="3" />
                        <label for="3"></label>
                      </span>
                      Project Manager
                      <span className="pull-right">12</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="4" />
                        <label for="4"></label>
                      </span>
                      Human Resource
                      <span className="pull-right">85</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="5" />
                        <label for="5"></label>
                      </span>
                      CMS Developer
                      <span className="pull-right">307</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="6" />
                        <label for="6"></label>
                      </span>
                      App Developer
                      <span className="pull-right">256</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="side-widget">
                <h2 className="side-widget-title">
                  <a href="#job-location" data-toggle="collapse">
                    Location
                    <i
                      className="pull-right fa fa-angle-double-down"
                      aria-hidden="true"
                    ></i>
                  </a>
                </h2>
                <div className="widget-text padd-0 collapse" id="job-location">
                  <ul>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </span>
                      Mohali
                      <span className="pull-right">102</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="2" />
                        <label for="2"></label>
                      </span>
                      Chandigarh
                      <span className="pull-right">78</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="3" />
                        <label for="3"></label>
                      </span>
                      Chennai
                      <span className="pull-right">12</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="4" />
                        <label for="4"></label>
                      </span>
                      Delhi
                      <span className="pull-right">85</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="5" />
                        <label for="5"></label>
                      </span>
                      Noida
                      <span className="pull-right">307</span>
                    </li>

                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="6" />
                        <label for="6"></label>
                      </span>
                      Chhatisgarh
                      <span className="pull-right">256</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="side-widget">
                <h2 className="side-widget-title">
                  <a href="#job-type" data-toggle="collapse">
                    Job type
                    <i
                      className="pull-right fa fa-angle-double-down"
                      aria-hidden="true"
                    ></i>
                  </a>
                </h2>
                <div className="widget-text padd-0 collapse" id="job-type">
                  <ul>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="1" />
                        <label for="1"></label>
                      </span>
                      Full Time
                      <span className="pull-right">102</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="2" />
                        <label for="2"></label>
                      </span>
                      Part Time
                      <span className="pull-right">78</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="3" />
                        <label for="3"></label>
                      </span>
                      Internship
                      <span className="pull-right">12</span>
                    </li>
                    <li>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="4" />
                        <label for="4"></label>
                      </span>
                      Freelancer
                      <span className="pull-right">85</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UserHome;
