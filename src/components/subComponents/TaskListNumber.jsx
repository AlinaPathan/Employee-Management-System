import React from 'react'
import { useState, useEffect } from 'react'

const TaskListNumber = ({loggedInUserData}) => {
  const [userData, setUserData] = useState(loggedInUserData)
  
  useEffect(() => {
    const handleTaskUpdate = () => {
      const employees = JSON.parse(localStorage.getItem('employees')) || []
      const updated = employees.find(emp => emp.id === loggedInUserData.id)
      if(updated) {
        setUserData(updated)
      }
    }
    
    window.addEventListener('taskUpdated', handleTaskUpdate)
    return () => window.removeEventListener('taskUpdated', handleTaskUpdate)
  }, [loggedInUserData.id])
  
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className=' w-[45%] bg-blue-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{userData.taskSummary.newTask}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] bg-yellow-500 rounded-xl px-10 py-5 text-black'>
            <h2 className='text-3xl font-semibold'>{userData.taskSummary.active}</h2>
            <h2 className='text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className=' w-[45%] bg-red-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{userData.taskSummary.failed}</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
        <div className=' w-[45%] bg-green-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{userData.taskSummary.completed}</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber