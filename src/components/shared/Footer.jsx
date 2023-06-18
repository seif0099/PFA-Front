import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="row lg-menu">
        <div className="container">
          <div className="col-md-4 col-sm-4">
            <img
              src="/assets/img/footer-logo.png"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row no-padding">
        <div className="container">
          <div className="col-md-3 col-sm-12">
            <div className="footer-widget">
              <h3 className="widgettitle widget-title">About Job Stock</h3>

              <div className="textwidget">
                <p>Petite Ariana</p>

                <p>
                  <strong>Email:</strong> Support@gmail.com
                </p>

                <p>
                  <strong>Call:</strong> <a href="tel:+216">97-560-524</a>
                </p>
                <ul className="footer-social">
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
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget">
              <h3 className="widgettitle widget-title">User Navigation</h3>

              <div className="textwidget">
                <div className="textwidget">
                  <ul className="footer-navigation">
                    <li>
                      <a href="#" title="">
                        User Home
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        User History
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        User Application
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        User Login
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        User Register
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        User Forget-Password
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget">
              <h3 className="widgettitle widget-title">Company Navigation</h3>

              <div className="textwidget">
                <ul className="footer-navigation">
                  <li>
                    <a href="manage-company.html" title="">
                      Company Home
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Company Manage-Applicants
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Company Profile
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Company Login
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Company Register
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Company Forget-Password
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget">
              <h3 className="widgettitle widget-title">Connect Us</h3>

              <div className="textwidget">
                <form className="footer-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    <span>
                      <Link to="#" style={{ color: "white" }}>
                        Send
                      </Link>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="container"></div>
      </div>
    </footer>
  );
}

export default Footer;
