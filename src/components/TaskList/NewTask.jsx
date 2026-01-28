import React from 'react'

const NewTask = ({task}) => {
  const markAsAccepted = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    
    employees.forEach(emp => {
      emp.tasks.forEach(t => {
        if(t.title === task.title && t.taskDate === task.taskDate) {
          t.newTask = false
          t.active = true
          emp.taskSummary.newTask = Math.max(0, emp.taskSummary.newTask - 1)
          emp.taskSummary.active = emp.taskSummary.active + 1
        }
      })
    })
    
    localStorage.setItem('employees', JSON.stringify(employees))
    window.dispatchEvent(new Event('taskUpdated'))
    alert('Task accepted!')
  }

  return (
    
   <div className='bg-blue-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4>{task.taskDate}</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>{task.title}</h2>

<p className='text-sm text-white mt-2'>{task.description}</p>
<div  className='mt-8 text-black'>
  <button onClick={markAsAccepted} className='bg-yellow-500 py-1 px-2 text-sm rounded-lg hover:bg-yellow-600'>Mark as accepted</button>
</div>

   </div>
  )
}

export default NewTask