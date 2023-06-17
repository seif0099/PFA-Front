import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CompanyNavbar from "./CompanyNavbar";
import Footer from "../shared/Footer";
const UserInfo = () => {
  const location = useLocation();
  const { state } = location;
  const [user, setUser] = useState(state);

  if (!user) {
    return <Navigate to={"/company/applicant"} replace />;
  }
  return (
    <div>
      <CompanyNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {user.nom}
      <Footer />
    </div>
  );
};

export default UserInfo;
