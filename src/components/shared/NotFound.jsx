import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <section class="simple-bg-screen big-wrap">
        <div class="container">
          <div class="error-page">
            <h2>
              4<span>0</span>4
            </h2>
            <p>Oops...looks like we got lost</p>
            <Link class="btn btn-success small-btn">Let's Go Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
