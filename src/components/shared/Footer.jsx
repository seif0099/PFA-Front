import React from 'react'
import { Link } from 'react-router-dom';

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
                  <strong>Call:</strong>{" "}
                  <a href="tel:+216">97-560-524</a>
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
              <h3 className="widgettitle widget-title">All Navigation</h3>

              <div className="textwidget">
                <div className="textwidget">
                  <ul className="footer-navigation">
                    <li>
                      <a href="manage-company.html" title="">
                        Front-end Design
                      </a>
                    </li>
                    <li>
                      <a href="manage-company.html" title="">
                        Android Developer
                      </a>
                    </li>
                    <li>
                      <a href="manage-company.html" title="">
                        CMS Development
                      </a>
                    </li>
                    <li>
                      <a href="manage-company.html" title="">
                        PHP Development
                      </a>
                    </li>
                    <li>
                      <a href="manage-company.html" title="">
                        IOS Developer
                      </a>
                    </li>
                    <li>
                      <a href="manage-company.html" title="">
                        Iphone Developer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget">
              <h3 className="widgettitle widget-title">All Categories</h3>

              <div className="textwidget">
                <ul className="footer-navigation">
                  <li>
                    <a href="manage-company.html" title="">
                      Front-end Design
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Android Developer
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      CMS Development
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      PHP Development
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      IOS Developer
                    </a>
                  </li>
                  <li>
                    <a href="manage-company.html" title="">
                      Iphone Developer
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
                      <Link to="user/login">Login</Link>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="container">
         
        </div>
      </div>
    </footer>
  );
}


export default Footer
