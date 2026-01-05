import React from 'react'
import Header from '../subComponents/Header'
import TaskListNumber from '../subComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({loggedInUserData}) => {
  return (
    <div className='p-20 h-screen '>
        <Header loggedInUserData={loggedInUserData}/>
        <TaskListNumber loggedInUserData={loggedInUserData}/>
        <TaskList loggedInUserData={loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard