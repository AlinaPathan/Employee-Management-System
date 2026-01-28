import React from "react"

const Header = (props) => {

const logOutUSer=()=>{
  localStorage.removeItem("loggedInUser");
  props.changeUser("")
}
  return (
    <div className="flex items-end justify-between ">
        <h1 className="text-2x font-medium">Hello <br /><span className="text-3xl font-semibold">
            {props.loggedInUserData?.firstName || "Admin"} 
</span></h1>
        <button onClick={logOutUSer}  className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm hover:bg-red-600">Log Out</button>
    </div>
  )
}

export default Header
