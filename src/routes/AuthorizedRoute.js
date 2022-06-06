import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "../screens/Dashboard";
import AdminPage from "../screens/AdminPage";
import UserPage from "../screens/UserPage";
const AuthorizedRoute = (props) => {
  return (
    <Routes>
      <Route element={<Dashboard role={props.role} />} path="/" />
      <Route element={<UserPage />} path="/user" />
      {props.role.includes("admin") && (
        <Route element={<AdminPage />} path="/admin" />
      )}
    </Routes>
  );
};
export default AuthorizedRoute;
