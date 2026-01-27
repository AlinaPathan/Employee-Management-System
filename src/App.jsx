import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser=localStorage.getItem("loggedInUser")

    if (loggedInUser) {
    const userData = JSON.parse(loggedInUser);
    setUser(userData.role);
    setLoggedInUserData(userData.data);
    }

  }, []); 
  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
        setLoggedInUserData('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData.employees) {
      const employee = authData.employees.find(
        (e) => e.email == email && password == e.password
      );
      if (employee) {
        // setUser({ role: "employee" });
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee",data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user ==="employee" ?  <EmployeeDashboard loggedInUserData={loggedInUserData} /> : null)}
    </>
  );
};

export default App;
