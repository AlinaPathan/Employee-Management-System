import React from 'react'

const NewTask = ({task}) => {
  return (
    
   <div className='bg-blue-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
    <h4>{task.taskDate}</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>{task.title}</h2>

<p className='text-sm text-white mt-2'>{task.description}</p>
<div  className='mt-8 text-black'>
  <button className='bg-yellow-500 py-1 px-2 text-sm rounded-lg'>Mark as accepted</button>
</div>

   </div>
  )
}

export default NewTask