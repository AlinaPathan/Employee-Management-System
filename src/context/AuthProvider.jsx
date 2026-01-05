import React, { createContext ,useState ,useEffect } from 'react'
import { getLocalStorage ,setLocalStorage } from '../utils/localStorage'

export const AuthContext=createContext()//global context any componant can access the datawhat useeffect does explain


const AuthProvider = ({children}) => {
   const [userData, setUserData] = useState(null)

     useEffect(() => {
    
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const {employees,admin} = getLocalStorage();
    setUserData({employees,admin});
  }, []);



    return (
   
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
                
    </div>
  )
}

export default AuthProvider