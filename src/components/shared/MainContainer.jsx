import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainContainer() {
  return (
    <div>
      <div className="Loader"></div>
      <div className="wrapper">
        <Navbar />
        <div className="clearfix"></div>
        <div
          className="banner"
          style={{ backgroundImage: "url('assets/img/banner-9.jpg')" }}
        >
          <div className="container">
            <div className="banner-caption">
              <div className="col-md-12 col-sm-12 banner-text">
                <h1>7,000+ Browse Jobs</h1>

                <section
                  className="how-it-works"
                  style={{ background: "border-box" }}
                >
                  <div className="container">
                    <div className="row" data-aos="fade-up">
                      <div className="col-md-12">
                        <div className="main-heading">
                          <p style={{ color: "wheat" }}>Working Process</p>

                          <h2 style={{ color: "wheat" }}>
                            How It <span>Works</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-4">
                        <div className="working-process">
                          <span className="process-img">
                            <img
                              src="assets/img/step-1.png"
                              className="img-responsive"
                              alt=""
                            />
                            <span className="process-num">01</span>
                          </span>
                          <h4 style={{ color: "wheat" }}>Create An Account</h4>

                          <p
                            style={{ color: "#fff", fontFamily: "sans-serif" }}
                          >
                            Create an account or login 
                            
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="working-process">
                          <span className="process-img">
                            <img
                              src="assets/img/step-2.png"
                              className="img-responsive"
                              alt=""
                            />
                            <span className="process-num">02</span>
                          </span>
                          <h4 style={{ color: "wheat" }}>Search Jobs</h4>

                          <p
                            style={{ color: "#fff", fontFamily: "sans-serif" }}
                          >
                            Search the job you dream of !!
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="working-process">
                          <span className="process-img">
                            <img
                              src="assets/img/step-3.png"
                              className="img-responsive"
                              alt=""
                            />
                            <span className="process-num">03</span>
                          </span>
                          <h4 style={{ color: "wheat" }}>Save & Apply</h4>

                          <p
                            style={{ color: "#fff", fontFamily: "sans-serif" }}
                          >
                           Wait for you recruitement & 
                           Good Luck !!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="company-brand">
            <div className="container">
              <div id="company-brands" className="owl-carousel">
                <div className="brand-img">
                  <img
                    src="assets/img/microsoft-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/img-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/mothercare-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/paypal-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/serv-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/xerox-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/yahoo-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div className="brand-img">
                  <img
                    src="assets/img/mothercare-home.png"
                    className="img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <section>
          <div className="container">
            <div className="row">
              <div className="main-heading">
                <p>200 New Jobs</p>

                <h2>
                  New & Random <span>Jobs</span>
                </h2>
              </div>
            </div>
            <div className="row extra-mrg">
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="part-time">Part Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-2.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-3.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="enternship">Enternship</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-4.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="full-time">Full Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-5.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="part-time">Part Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-6.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="full-time">Full Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-7.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img
                      src="assets/img/com-1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                  <div className="brows-job-position">
                    <h3>
                      <a href="job-detail.html">Web Developer</a>
                    </h3>

                    <p>
                      <span>Google</span>
                    </p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="enternship">Enternship</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p>
                          <i className="fa fa-map-marker"></i>QBL Park, C40
                        </p>
                      </div>
                    </li>
                    <li>
                      <p>
                        <span className="brows-job-sallery">
                          <i className="fa fa-money"></i>$110 - 200
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
        <section
          className="video-sec dark"
          id="video"
          style={{ backgroundImage: "url('assets/img/banner-10.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="main-heading">
                <p>Best For Your Projects</p>

                <h2>
                  Watch Our <span>video</span>
                </h2>
              </div>
            </div>
            <div className="video-part">
              <a
                href="#"
                data-toggle="modal"
                data-target="#my-video"
                className="video-btn"
              >
                <i className="fa fa-play"></i>
              </a>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>

        <div className="clearfix"></div>
        <section className="testimonial" id="testimonial">
          <div className="container">
            <div className="row">
              <div className="main-heading">
                <p>What Say Our Client</p>

                <h2>
                  Our Success <span>Stories</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div id="client-testimonial-slider" className="owl-carousel">
                <div className="client-testimonial">
                  <div className="pic">
                    <img src="assets/img/client-1.jpg" alt="" />
                  </div>
                  <p className="client-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor et dolore magna aliqua.
                  </p>

                  <h3 className="client-testimonial-title">Lacky Mole</h3>
                  <ul className="client-testimonial-rating">
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star"></li>
                  </ul>
                </div>
                <div className="client-testimonial">
                  <div className="pic">
                    <img src="assets/img/client-2.jpg" alt="" />
                  </div>
                  <p className="client-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor et dolore magna aliqua.
                  </p>

                  <h3 className="client-testimonial-title">Karan Wessi</h3>
                  <ul className="client-testimonial-rating">
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star"></li>
                    <li className="fa fa-star"></li>
                  </ul>
                </div>
                <div className="client-testimonial">
                  <div className="pic">
                    <img src="assets/img/client-3.jpg" alt="" />
                  </div>
                  <p className="client-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor et dolore magna aliqua.
                  </p>

                  <h3 className="client-testimonial-title">Roul Pinchai</h3>
                  <ul className="client-testimonial-rating">
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star"></li>
                  </ul>
                </div>
                <div className="client-testimonial">
                  <div className="pic">
                    <img src="assets/img/client-1.jpg" alt="" />
                  </div>
                  <p className="client-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor et dolore magna aliqua.
                  </p>

                  <h3 className="client-testimonial-title">Adam Jinna</h3>
                  <ul className="client-testimonial-rating">
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star-o"></li>
                    <li className="fa fa-star"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-heading">
                  <p>Top Freelancer</p>

                  <h2>
                    Hire Expert <span>Freelancer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="freelance-container style-2">
                  <div className="freelance-box">
                    <span className="freelance-status">Available</span>
                    <h4 className="flc-rate">$17/hr</h4>

                    <div className="freelance-inner-box">
                      <div className="freelance-box-thumb">
                        <img
                          src="assets/img/can-5.jpg"
                          className="img-responsive img-circle"
                          alt=""
                        />
                      </div>
                      <div className="freelance-box-detail">
                        <h4>Agustin L. Smith</h4>
                        <span className="location">Australia</span>
                      </div>
                      <div className="rattings">
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star-half fill"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    <div className="freelance-box-extra">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                    </div>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-default"
                    >
                      View Detail
                    </a>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-info"
                    >
                      View Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="freelance-container style-2">
                  <div className="freelance-box">
                    <span className="freelance-status bg-warning">At Work</span>
                    <h4 className="flc-rate">$22/hr</h4>

                    <div className="freelance-inner-box">
                      <div className="freelance-box-thumb">
                        <img
                          src="assets/img/can-5.jpg"
                          className="img-responsive img-circle"
                          alt=""
                        />
                      </div>
                      <div className="freelance-box-detail">
                        <h4>Delores R. Williams</h4>
                        <span className="location">United States</span>
                      </div>
                      <div className="rattings">
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star-half fill"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    <div className="freelance-box-extra">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                    </div>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-default"
                    >
                      View Detail
                    </a>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-info"
                    >
                      View Detail
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="freelance-container style-2">
                  <div className="freelance-box">
                    <span className="freelance-status">Available</span>
                    <h4 className="flc-rate">$19/hr</h4>

                    <div className="freelance-inner-box">
                      <div className="freelance-box-thumb">
                        <img
                          src="assets/img/can-5.jpg"
                          className="img-responsive img-circle"
                          alt=""
                        />
                      </div>
                      <div className="freelance-box-detail">
                        <h4>Daniel Disroyer</h4>
                        <span className="location">Bangladesh</span>
                      </div>
                      <div className="rattings">
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star fill"></i>
                        <i className="fa fa-star-half fill"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    <div className="freelance-box-extra">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui.
                      </p>
                      <ul>
                        <li>Php</li>
                        <li>Android</li>
                        <li>Html</li>
                        <li className="more-skill bg-primary">+3</li>
                      </ul>
                    </div>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-default"
                    >
                      View Detail
                    </a>
                    <a
                      href="freelancer-detail.html"
                      className="btn btn-freelance-two bg-info"
                    >
                      View Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="text-center">
                  <a href="freelancers-2.html" className="btn btn-primary">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>

        <div className="clearfix"></div>
        <div
          className="modal fade"
          id="signup"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="tab" role="tabpanel">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a href="#login" role="tab" data-toggle="tab">
                        Sign In
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#register" role="tab" data-toggle="tab"></a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myModalLabel2">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="login"
                    >
                      <img
                        src="/assets/img/logo.png"
                        className="img-responsive"
                        alt=""
                      />

                      <div className="subscribe wow fadeInUp">
                        <form className="form-inline" method="post">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Username"
                                required=""
                              />
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                required=""
                              />

                              <div className="center">
                                <button
                                  type="submit"
                                  id="login-btn"
                                  className="submit-btn"
                                >
                                  {" "}
                                  Login
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      className="tab-pane fade"
                      id="register"
                    >
                      <img
                        src="assets/img/logo.png"
                        className="img-responsive"
                        alt=""
                      />

                      <form className="form-inline" method="post">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Your Name"
                              required=""
                            />

                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Your Email"
                              required=""
                            />
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Username"
                              required=""
                            />
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              required=""
                            />

                            <div className="center">
                              <button
                                type="submit"
                                id="subscribe"
                                className="submit-btn"
                              >
                                {" "}
                                Create Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainContainer;
