import React from "react";
import Header from "../subComponents/Header";
import CreateTask from "../subComponents/CreateTask";
import AllTask from "../subComponents/AllTask";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full py-10 px-60 bg-gray-100">
      <Header />
<CreateTask/>
    <AllTask/>
    </div>
  );
};

export default AdminDashboard;
