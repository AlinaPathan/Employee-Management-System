import React from 'react'
import Header from '../subComponents/Header'
import TaskListNumber from '../subComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 h-screen '>
        <Header/>
        <TaskListNumber/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard