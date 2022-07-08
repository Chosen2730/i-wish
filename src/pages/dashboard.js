import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <form action=''>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' />
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
          <input type='submit' value='login' />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
