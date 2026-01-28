import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext, useState, useEffect } from 'react'
const AllTask = ({}) => {
    const authData=useContext(AuthContext)
    const [employees, setEmployees] = useState(authData?.employees || [])
    
    useEffect(() => {
      const handleTaskUpdate = () => {
        const data = JSON.parse(localStorage.getItem('employees')) || []
        setEmployees(data)
      }
      
      window.addEventListener('taskUpdated', handleTaskUpdate)
      return () => window.removeEventListener('taskUpdated', handleTaskUpdate)
    }, [])
    
  return (

    <div  id="allTask" className='p-5 rounded mt-5 h-60  text-white'>
         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded items-center text-lg'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
            {employees.map(function(elem,idx){
           return <div key={idx} className=' mb-2 py-2 px-4 flex justify-between rounded items-center border-2 border-gray-500'>
            <h2 className='w-1/5 text-black font-semibold text-md'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-blue-400 font-semibold  text-lg'>{elem.taskSummary.newTask}</h3>
             <h5 className='w-1/5 text-yellow-500 font-semibold text-lg'>{elem.taskSummary.active}</h5>
            <h5 className='w-1/5 text-green-500 font-semibold text-lg'>{elem.taskSummary.completed}</h5>
            <h5 className='w-1/5 text-red-500 font-semibold text-lg'>{elem.taskSummary.failed}</h5>
        </div>
        })}
        </div>
      
    </div>
  )
}

export default AllTask