import React, { useEffect, useState } from "react";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
import { Navigate } from "react-router-dom";
import { isAuth } from "../../services/shared/isAuth";
import { isCompany } from "../../services/company/IsCompany";
import { getUserToCompany } from "../../services/company/GetUsersToCompany";
import { accept, refuse } from "../../services/company/manageAcceptation";
import UserInfoModal from "./UserInfoModal";
import { getUserById } from "../../services/user/getUsers";
function ApplicantManager() {
  const [accepted, setAccepted] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});

  const handleClick = (id) => {
    setShowModal(true);
    getUserById(id)
      .then((response) => setUser(response))
      .catch((err) => console.log(err));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const acceptPost = (offre, user) => {
    accept(offre, user)
      .then((response) => {
        console.log(response.data);
        setAccepted(true);
      })
      .catch((err) => console.log(err));
  };
  const refusePost = (offre, user) => {
    refuse(offre, user)
      .then((response) => {
        console.log(response.data);
        setAccepted(false);
      })
      .catch((err) => console.log(err));
  };
  const dataOffer = [];
  const [data, setData] = useState([]);
  useEffect(() => {
    getUserToCompany()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, [accepted]);
  //  if (!isAuth() || !isCompany())
  //    return <Navigate to={"/company/login"} replace />;

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
                item.postules.map((result) => {
                  let user = {
                    offre: item.id,
                    user: result.id,
                    image: result.image,
                    email: result.email,
                    telephone: result.telephone,
                    titre: item.titre,
                    salaire: item.salaire,
                    experience: item.experience,
                  };
                  dataOffer.push(user);
                });
              })}
              {dataOffer.map((data, index) => (
                <>
                  <article key={index} onClick={() => handleClick(data.user)}>
                    <div className="mng-company">
                      <div className="col-md-2 col-sm-1">
                        <img
                          src={data.image}
                          className="img-responsive"
                          alt="image"
                          style={{ width: "6em" }}
                        />
                      </div>
                      <div className="col-md-3 col-sm-1">
                        <div className="mng-company-location">
                          <p style={{ fontWeight: "bolder" }}>{data.email}</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-1">
                        <div className="mng-company-location">
                          <p style={{ fontWeight: "bold" }}>{data.telephone}</p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-1">
                        <div className="mng-company-location">
                          <p style={{ fontWeight: "bold" }}>{data.titre} </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-1">
                        <div className="mng-company-location">
                          <p style={{ fontWeight: "bold" }}>
                            {data.salaire + " $"}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-1 col-sm-1">
                        <div className="mng-company-action">
                          <a
                            href="#"
                            data-toggle="tooltip"
                            title="Edit"
                            onClick={(e) => {
                              e.preventDefault();
                              acceptPost(data.offre, data.user);
                            }}
                          >
                            <i
                              style={{ color: "green" }}
                              className="fa fa-check"
                            ></i>
                          </a>
                          <a
                            href="#"
                            data-toggle="tooltip"
                            title="Delete"
                            onClick={(e) => {
                              e.preventDefault();
                              refusePost(data.offre, data.user);
                            }}
                          >
                            <i
                              style={{ color: "red" }}
                              className="fa fa-times"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <UserInfoModal
                    showModal={showModal}
                    closeModal={closeModal}
                    user={user}
                  />
                </>
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
