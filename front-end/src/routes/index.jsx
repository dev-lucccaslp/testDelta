import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";

import AuthRoutes from "./authRoutes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<AuthRoutes />}>
          <Route index element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


