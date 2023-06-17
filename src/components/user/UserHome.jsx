import React, { useEffect, useRef, useState } from "react";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import HomeNavbar from "./HomeNavbar";
import { getAllJob } from "../../services/user/getAllJob";
import { getJobById } from "../../services/user/getJobById";
const UserHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchField = useRef(searchQuery);
  const [data, setData] = useState([]);
  const [filtredData, setFiltedData] = useState([]);
  const navigate = useNavigate();
  const handleClickedJob = (id) => {
    getJobById(id)
      .then((response) => {
        navigate("/user/jobInfo", {
          replace: true,
          state: response,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllJob()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    const currentValue = searchField.current.value;
    const filtred = data.filter(
      (item) =>
        item.titre.toLowerCase().startsWith(currentValue.toLowerCase()) ||
        item.typee.toLowerCase().startsWith(currentValue.toLowerCase())
    );
    setFiltedData(filtred);
  }, [data, searchQuery]);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleClick = () => {
    navigate("/user/JobInfo");
  };

  if (!isAuth() || !isUser()) return <Navigate to={"/user/login"} replace />;

  return (
    <div>
      <HomeNavbar />
      <div className="clearfix"></div>
      <section
        className="inner-header-title no-br advance-header-title"
        style={{ backgroundImage: "url('/assets/img/banner-10.jpg')" }}
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
                ref={searchField}
                className="form-control"
                placeholder="Job Title Or Type"
                style={{ color: "White" }}
                onChange={handleSearch}
              />
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
                  <div className="col-md-4 col-sm-4 small-padd"></div>
                </div>
              </div>

              <div className="card-body">
                {filtredData.map((item, index) => (
                  <article
                    key={index}
                    onClick={() => handleClickedJob(item.id)}
                  >
                    <div className="mng-company">
                      <div className="col-md-2 col-sm-1">
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
                      <div className="col-md-1 col-sm-1">
                        <div className="mng-company-location">
                          <p style={{ fontWeight: "bold" }}>
                            {item.experience} years
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserHome;
