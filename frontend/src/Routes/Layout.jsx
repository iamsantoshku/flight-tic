import React from "react";
import { Outlet } from "react-router-dom";
// import Adminhome from "../admin/Components/Adminhome"; // If you want the Admin sidebar
import Adminhome from "../admin/Components/Adminhome";

const Layout = () => {
  return (
    <div className="flex">
      <Adminhome /> {/* Sidebar component */}
      <main className="flex-1">
        <Outlet /> {/* Child routes will be rendered here */}
      </main>
    </div>
  );
};

export default Layout;
