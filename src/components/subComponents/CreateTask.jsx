import React from 'react'
import { useState } from 'react'
const CreateTask = () => {
 const [title, setTaskTitle] = useState('')
 const [taskDescription, setTaskDescription] = useState('')
 const [taskDate, setTaskDate] = useState('')
 const [assignTo, setAssignTo] = useState('')
 const [category, setCategory] = useState('')

const [newTask, setNewTask] = useState({})


 const submitHandler=(e)=>{
  e.preventDefault();
  
  if(!title || !taskDescription || !taskDate || !assignTo || !category){
    alert('Please fill all fields')
    return
  }
  
  const taskObject = {
    title,
    description: taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false
  }
  
  const data = JSON.parse(localStorage.getItem('employees')) || []
  let taskAssigned = false
  
  data.forEach(function(elem){
    if(assignTo === elem.firstName){
      elem.tasks.push(taskObject)
      elem.taskSummary.newTask = elem.taskSummary.newTask + 1
      taskAssigned = true
    }
  })
  
  if(!taskAssigned){
    alert('Employee not found')
    return
  }
  
  localStorage.setItem('employees', JSON.stringify(data))
  
  // Trigger a custom event to notify other components
  window.dispatchEvent(new Event('taskUpdated'))
  
  alert('Task created and assigned successfully!')
  
  setAssignTo("")
  setCategory("")
  setTaskDate("")
  setTaskDescription("")
  setTaskTitle("")
} 
  return (
    
          <div className="mt-8 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create New Task
        </h2>

        <form  onSubmit={(e)=>{submitHandler(e)}}  className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Task Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
               value={title}
               onChange={(e)=>{
                setTaskTitle(e.target.value)
               }}
                type="text"
                placeholder="Enter task title"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                  value={taskDescription}
               onChange={(e)=>{
                setTaskDescription(e.target.value)
                }}
                rows="6"
                placeholder="Enter task description"
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Due Date
              </label>
              <input
                  value={taskDate}
               onChange={(e)=>{
                setTaskDate(e.target.value)
               }}
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Assign To */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assign To
              </label>
              <input
                  value={assignTo}
               onChange={(e)=>{
                setAssignTo(e.target.value)
               }}
                type="text"
                placeholder="Employee name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <input
                  value={category}
               onChange={(e)=>{
                setCategory(e.target.value)
               }}
                type="text"
                placeholder="Design / Development / Testing"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold
                         hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    
  )
}

export default CreateTask