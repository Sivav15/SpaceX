import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="w-full h-[10vh]">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="w-full min-h-full  bg-[#F3F4F6]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
