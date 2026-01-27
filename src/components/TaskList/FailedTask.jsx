import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className='bg-red-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4>{task.taskDate}</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>{task.title}</h2>

<p className='text-sm text-white mt-2'>{task.description}</p>

<div className='mt-4'>
    <button className='w-full text-md font-semibold text-white'>Failed!!!</button>
</div>
   </div>
  )
}

export default FailedTask