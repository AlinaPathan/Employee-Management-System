import React from 'react'
import { useState, useEffect } from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ loggedInUserData }) => {
  const [tasks, setTasks] = useState(loggedInUserData?.tasks || [])
  
  useEffect(() => {
    const handleTaskUpdate = () => {
      const employees = JSON.parse(localStorage.getItem('employees')) || []
      const updated = employees.find(emp => emp.id === loggedInUserData.id)
      if(updated) {
        setTasks(updated.tasks || [])
      }
    }
    
    window.addEventListener('taskUpdated', handleTaskUpdate)
    return () => window.removeEventListener('taskUpdated', handleTaskUpdate)
  }, [loggedInUserData.id])
  
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center overflow-x-auto justify-start gap-5 p-4 w-full mt-10"
    >
      {tasks?.map((task, index) => {
        if (task.active) {
          return <AcceptTask key={index} task={task} />
        }

        if (task.newTask) {
          return <NewTask key={index} task={task} />
        }

        if (task.completed) {
          return <CompleteTask key={index} task={task}/>
        }

        if (task.failed) {
          return <FailedTask key={index} task={task}/>
        }

        return null
      })}
    </div>
  )
}

export default TaskList
