import React, { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import { Navigate } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import { isAuth } from "../../services/shared/isAuth";
import { isUser } from "../../services/user/IsUser";
import {
  deleteApplication,
  getApplyHistory,
} from "../../services/user/ApplyHistory";
const ApplyHistory = () => {
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);
  const DeleteApplication = (id) => {
    deleteApplication(id)
      .then((response) => {
        setRender(!render);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApplyHistory()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
        setData([]);
      });
  }, [render]);
  if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;
  return (
    <div>
      <HomeNavbar />

      <div className="clearfix"></div>

      <section
        className="inner-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
      >
        <div className="container">
          <h1>User History</h1>
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
              <h3>User Application History</h3>

              {data.map((item, index) => (
                <article key={index}>
                  <div className="mng-company">
                    <div className="col-md-1 col-sm-1">
                      <img
                        src={item.image}
                        className="img-responsive"
                        alt="hello"
                        style={{ width: "10em" }}
                      />
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bolder" }}>{item.titre}</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.salaire} $</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.typee} </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>{item.deadLine} </p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-1">
                      <div className="mng-company-location">
                        <p style={{ fontWeight: "bold" }}>
                          {item.experience} years
                        </p>
                      </div>
                    </div>
                    <div className="col-md-1 col-sm-1">
                      <div className="mng-company-action">
                        <a
                          href="#"
                          data-toggle="tooltip"
                          title="Delete"
                          onClick={() => DeleteApplication(item.id)}
                        >
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
};

export default ApplyHistory;
