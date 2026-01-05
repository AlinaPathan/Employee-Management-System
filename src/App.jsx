import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // console.log(authData);

  //calling this functions side by side by useEffect
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()

  // })

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {

  // if(authData){
  //   const loggedInUser=localStorage.getItem("loggedInUser")
  //   if(loggedInUser){
  //     setUser(loggedInUser.role)
  //   }

  // }

  // }, [authData])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
        setLoggedInUserData(admin)
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
          JSON.stringify({ role: "employee" })
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
