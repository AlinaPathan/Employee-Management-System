import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-blue-600 rounded-xl p-10">
        <form action="" className="flex flex-col justify-center items-center">
          <input type="email" placeholder=" Enter your email" name="" id=""  className="border-2 border-blue-600 rounded-xl py-3 px-3 text-lg outline-none bg-transparent placeholder:text-gray-600 mb-5"/>

          <input
            type="password"
            name=""
            id=""
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
