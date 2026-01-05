import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { useEffect,useState } from 'react'
import { useContext  } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  // console.log(authData);
  
  //calling this functions side by side by useEffect
  // useEffect(() => {
    //   setLocalStorage() 
    //   getLocalStorage() 
    
    // })
    
    const[user ,setUser]=useState(null)
    const authData=useContext(AuthContext)
 
    // useEffect(() => {
      
    // if(authData){
    //   const loggedInUser=localStorage.getItem("loggedInUser")
    //   if(loggedInUser){
    //     setUser(loggedInUser.role)
    //   }
    
    // }
     
    // }, [authData])
    




  
  const handleLogin=(email,password)=>{
    if(email=="admin@example.com"&& password=="123"){
      console.log("Admin ")
      setUser("admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>e.email==email && password==e.password
  )){
    setUser("employee")
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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