import React from "react";
import CompanyNavbar from "../company/CompanyNavbar";
import Footer from "./../shared/Footer";
import { Link, Navigate } from "react-router-dom";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
function CreateOffer() {
  if (!isAuth() || !isCompany())
    return <Navigate to={"/company/login"} replace />;
  return (
    <div class="detail-desc section">
      <CompanyNavbar />
      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-5.jpg')" }}
      >
        <div className="container">
          <h1>Create Job</h1>
        </div>
      </section>
      <div class="clearfix"></div>

      <div class="container white-shadow">
        <div class="row">
          <div class="detail-pic js">
            <div class="box">
              <input
                type="text"
                name="upload-pic[]"
                id="upload-pic"
                class="inputfile"
              />
              <label for="upload-pic">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span></span>
              </label>
            </div>
          </div>
        </div>

        <div class="row bottom-mrg">
          <form class="add-feild">
            <h2 class="detail-title" style={{ width: "fit-content" }}>
              Job Requirement
            </h2>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Job Title"
                />
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="salaire" />
              </div>
            </div>

            <div class="col-md-12 col-sm-12">
              <textarea
                class="form-control"
                placeholder="Job Description"
              ></textarea>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type" />
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Experience"
                />
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Adresse" />
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="DeadLine"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <section class="full-detail">
        <div class="container">
          <div class="row bottom-mrg extra-mrg">
            <form>
              <h2 class="detail-title">Company Information</h2>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-flag"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-pencil"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Tagline"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company Email"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Local E.g. It Park New"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-globe"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-birthday-cake"></i>
                  </span>
                  <input
                    type="text"
                    id="company-dob"
                    data-lang="en"
                    data-large-mode="true"
                    data-min-year="2017"
                    data-max-year="2020"
                    data-disabled-days="08/17/2017,08/18/2017"
                    data-id="datedropper-0"
                    data-theme="my-style"
                    class="form-control"
                    readonly=""
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <form>
              <h2 class="detail-title">Social Profile</h2>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-facebook"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-google-plus"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-instagram"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-linkedin"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-dribbble"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Profile Link"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <form>
              <div class="col-md-12 col-sm-12">
                <textarea
                  class="form-control textarea"
                  placeholder="About Company"
                ></textarea>
              </div>
              <div class="col-md-12 col-sm-12">
                <button class="btn btn-success btn-primary small-btn">
                  Submit The Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CreateOffer;
