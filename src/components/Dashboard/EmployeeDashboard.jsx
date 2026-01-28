import React from 'react'
import Header from '../subComponents/Header'
import TaskListNumber from '../subComponents/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-20 h-screen '>
        <Header   changeUser={props.changeUser}   loggedInUserData={props.loggedInUserData}/>
        <TaskListNumber loggedInUserData={props.loggedInUserData}/>
        <TaskList loggedInUserData={props.loggedInUserData}/>
    </div>
  )
}

export default EmployeeDashboard