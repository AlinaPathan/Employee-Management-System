import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
const App = () => {
  
  //calling this functions side by side by useEffect
  // useEffect(() => {
  //   setLocalStorage() 
  //   getLocalStorage() 
  
  // })
  const[user ,setUser]=useState(null)
  
  const handleLogin=(email,password)=>{
    if(email=="admin@example.com"&& password=="123"){
      console.log("Admin ")
      setUser("admin")
    }else if(email=="user@example.com"&& password=="123"){
         setUser("employee")
      console.log("this is user")
    }else{
      alert("Invalid Credentials")
    }
  }
  return (
<>
    
   {!user? <Login handleLogin={handleLogin}/>:''}
   {user=="admin"?<AdminDashboard/>:<EmployeeDashboard/>  } 
     
    </>

  )
}

export default App