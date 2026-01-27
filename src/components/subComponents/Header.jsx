import React from 'react'

const Header = ({loggedInUserData}) => {
//   const [username, setUsername] = useState('')

// if(!data){
//   setUsername('Admin')
// }else{
//   setUsername(data.firstName)
// }

const logOutUSer=()=>{
  localStorage.setItem("loggedInUser",'');
  window.location.reload()
}
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2x font-medium'>Hello <br /><span className='text-3xl font-semibold'>
            {loggedInUserData?.firstName}😊</span></h1>
        <button onClick={logOutUSer}  className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header