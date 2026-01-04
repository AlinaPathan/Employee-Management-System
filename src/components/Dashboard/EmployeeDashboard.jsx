import React from 'react'
import Header from '../subComponents/Header'
import TaskListNumber from '../subComponents/TaskListNumber'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 h-screen '>
        <Header/>
        <TaskListNumber/>
    </div>
  )
}

export default EmployeeDashboard