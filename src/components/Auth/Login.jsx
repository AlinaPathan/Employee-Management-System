import React from "react";
import { useState } from "react";
const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   const formSubmitHandler=(e)=>{
    e.preventDefault()
    console.log("from submitterd")
   }


  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-blue-600 rounded-xl p-10">
        <form action=""
        onSubmit={(e)=>{
            formSubmitHandler(e)
            console.log("Email is",email);
            console.log("Password is",password);
        }}
        className="flex flex-col justify-center items-center">
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          type="email" 
          placeholder=" Enter your email"
           className="border-2 border-blue-600 rounded-xl py-3 px-3 text-lg outline-none bg-transparent placeholder:text-gray-600 mb-5"/>

          <input
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
            type="password"
            required
            placeholder="Enter your password"
              className="border-2 border-blue-600 rounded-xl py-3 px-3 text-lg outline-none bg-transparent placeholder:text-gray-600 mb-5"
          />


          <button  required className="rounded-xl py-3 px-3 text-lg outline-none bg-blue-600 placeholder:text-gray-600 text-white mt-3 w-full hover:bg-blue-500">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
