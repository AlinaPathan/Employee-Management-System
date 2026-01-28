import React from 'react'

const AcceptTask = ({task}) => {
  const markAsCompleted = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    
    employees.forEach(emp => {
      emp.tasks.forEach(t => {
        if(t.title === task.title && t.taskDate === task.taskDate) {
          t.active = false
          t.completed = true
          emp.taskSummary.active = Math.max(0, emp.taskSummary.active - 1)
          emp.taskSummary.completed = emp.taskSummary.completed + 1
        }
      })
    })
    
    localStorage.setItem('employees', JSON.stringify(employees))
    window.dispatchEvent(new Event('taskUpdated'))
    alert('Task marked as completed!')
  }

  const markAsFailed = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    
    employees.forEach(emp => {
      emp.tasks.forEach(t => {
        if(t.title === task.title && t.taskDate === task.taskDate) {
          t.active = false
          t.failed = true
          emp.taskSummary.active = Math.max(0, emp.taskSummary.active - 1)
          emp.taskSummary.failed = emp.taskSummary.failed + 1
        }
      })
    })
    
    localStorage.setItem('employees', JSON.stringify(employees))
    window.dispatchEvent(new Event('taskUpdated'))
    alert('Task marked as failed!')
  }

  return (
  <div className='bg-yellow-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4>{task.taskDate}</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>{task.title}</h2>

<p className='text-sm text-white mt-2'>{task.description}</p>
<div className='flex justify-between items-center mt-8 text-white'>
    <button onClick={markAsCompleted} className='bg-green-500 py-1 px-2 text-sm rounded-lg hover:bg-green-600'>Mark as completed</button>
    <button onClick={markAsFailed} className='bg-red-600 py-1 px-2 text-sm rounded-lg hover:bg-red-700'>Mark as failed</button>
</div>
   </div>    
)
}

export default AcceptTask