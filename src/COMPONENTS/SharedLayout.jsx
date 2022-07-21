import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/Navbar";

export default function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
