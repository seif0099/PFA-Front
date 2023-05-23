import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";

const CompanyHome = () => {
  return (
    <div>
      <CompanyNavbar />

      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h1>Company Home</h1>
        </div>
      </section>
      <div className="clearfix"></div>

      <section className="manage-company gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="search-filter" style={{ background: "none" }}>
                <div className="col-md-4 col-sm-5">
                  <div className="filter-form">
                    <div className="input-group">
                      <span className="input-group-btn">
                        <Link to={"/company/createoffer"}>
                          <button
                            type="button"
                            className="btn btn-default"
                            style={{ left: "105vh", top: "-6vh" }}
                          >
                            Create Job Offer
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-12"
              style={{
                top: "-6vh",
              }}
            >
              <h3>Jobs Available in our company</h3>

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Autodesk{" "}
                        <span className="cmp-tagline">(Software Company)</span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Google{" "}
                        <span className="cmp-tagline">(Software Company)</span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Honda{" "}
                        <span className="cmp-tagline">(Motor Agency)</span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Microsoft{" "}
                        <span className="cmp-tagline">(Software Company)</span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-5.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Skype{" "}
                        <span className="cmp-tagline">(Software Company)</span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-6.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Virtue{" "}
                        <span className="cmp-tagline">
                          (Development Company)
                        </span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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

              <article>
                <div className="mng-company">
                  <div className="col-md-2 col-sm-2">
                    <div className="mng-company-pic">
                      <img
                        src="assets/img/com-7.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5">
                    <div className="mng-company-name">
                      <h4>
                        Twitter{" "}
                        <span className="cmp-tagline">
                          (Social Media Company)
                        </span>
                      </h4>
                      <span className="cmp-time">10 Hour Ago</span>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="mng-company-location">
                      <p>
                        <i className="fa fa-map-marker"></i> Street #210, Make
                        New London
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
      </section>

      <Footer />
    </div>
  );
};

export default CompanyHome;
