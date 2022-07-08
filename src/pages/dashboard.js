import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Main from "../components/main/index.js";

const Dashboard = () => {
  const [page, setPage] = React.useState({
    dash: true,
    orders: false,
    categories: false,
    notifications: false,
    vendors: false,
    users: false,
  });
  return (
    <>
      <Sidebar {...page} />
      <Navbar />
      <Main {...page} />
    </>
  );
};

export default Dashboard;
