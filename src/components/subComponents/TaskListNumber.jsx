import React from 'react'

const TaskListNumber = ({loggedInUserData}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className=' w-[45%] bg-blue-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskSummary.newTask}</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] bg-yellow-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskSummary.active}</h2>
            <h2 className='text-xl font-medium'>Active Task</h2>
        </div>
        <div className=' w-[45%] bg-red-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskSummary.failed}</h2>
            <h2 className='text-xl font-medium'>Failed Task</h2>
        </div>
        <div className=' w-[45%] bg-green-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>{loggedInUserData.taskSummary.completed}</h2>
            <h2 className='text-xl font-medium'>Completed Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber