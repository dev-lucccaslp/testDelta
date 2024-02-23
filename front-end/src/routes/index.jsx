import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";

import AuthRoutes from "./authRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AuthRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


