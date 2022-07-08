import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Main from "../components/main/index.js";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Main />
    </>
  );
};

export default Dashboard;
