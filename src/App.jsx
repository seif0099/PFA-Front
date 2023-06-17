import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/shared/NotFound";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import UserForgetPassword from "./components/user/UserForgetPassword";
import UserHome from "./components/user/UserHome";
import CompanyLogin from "./components/company/CompanyLogin";
import CompanyRegister from "./components/company/CompanyRegister";
import CompanyForgetPassword from "./components/company/CompanyForgetPassword";
import CompanyResetPass from "./components/company/CompanyResetPass";
import CompanyHome from "./components/company/CompanyHome";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegister from "./components/admin/AdminRegister";
import AdminForgetPassword from "./components/admin/AdminForgetPassword";
import UserResetPass from "./components/user/UserResetPass";
import MainContainer from "./components/shared/MainContainer";
import SearchJob from "./components/user/SearchJob";
import CreateOffer from "./components/offer/CreateOffer";
import ApplicantManager from "./components/company/ApplicantManager";
import ManageProfile from "./components/user/ManageProfile";
import UserInfoModal from './components/company/UserInfoModal';
import CompanyProfile from "./components/company/CompanyProfile";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<MainContainer />} />

      <Route path="admin">
        <Route path="" element={<Navigate to="login" replace />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="register" element={<AdminRegister />} />
        <Route path="forgetpass" element={<AdminForgetPassword />} />
      </Route>

      <Route path="user">
        <Route path="" element={<Navigate to="login" replace />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="forgetpass" element={<UserForgetPassword />} />
        <Route path="home" element={<UserHome />} />
        <Route path="resetPass" element={<UserResetPass />} />
        <Route path="editprofile" element={<ManageProfile />} />
      </Route>

      <Route path="company">
        <Route path="" element={<Navigate to="login" replace />} />
        <Route path="login" element={<CompanyLogin />} />
        <Route path="register" element={<CompanyRegister />} />
        <Route path="forgetpass" element={<CompanyForgetPassword />} />
        <Route path="home" element={<CompanyHome />} />
        <Route path="resetPass" element={<CompanyResetPass />} />
        <Route path="createoffer" element={<CreateOffer />} />
        <Route path="applicant" element={<ApplicantManager />} />
        <Route path="editprofileCompany" element={<CompanyProfile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
