import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className=' w-[45%] bg-red-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] bg-blue-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] bg-yellow-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] bg-green-500 rounded-xl px-10 py-5 text-white'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='text-xl font-medium'>New Task</h2>
        </div>
    </div>
  )
}

export default TaskListNumber