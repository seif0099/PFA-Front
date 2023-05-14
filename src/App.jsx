import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/shared/NotFound";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import UserForgetPassword from "./components/user/UserForgetPassword";
import CompanyLogin from "./components/company/CompanyLogin";
import CompanyRegister from "./components/company/CompanyRegister";
import CompanyForgetPassword from "./components/company/CompanyForgetPassword";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegister from "./components/admin/AdminRegister";
import AdminForgetPassword from "./components/admin/AdminForgetPassword";

const App = () => (
  <BrowserRouter>
    <Routes>
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
      </Route>

      <Route path="company">
        <Route path="" element={<Navigate to="login" replace />} />
        <Route path="login" element={<CompanyLogin />} />
        <Route path="register" element={<CompanyRegister />} />
        <Route path="forgetpass" element={<CompanyForgetPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
