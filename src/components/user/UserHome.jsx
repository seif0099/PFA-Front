import React from "react";
import { isUser } from "../../services/user/IsUser";
import { isAuth } from "../../services/shared/isAuth";
import { Navigate } from "react-router-dom";
const UserHome = () => {
  if (!isAuth() || !isUser()) {
    return <Navigate to={"/user/login"} />;
  }

  return <div>UserHome</div>;
};

export default UserHome;
