import React from 'react'

const CompleteTask = () => {
  return (
      <div className='bg-green-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4>20 feb 2024</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>New Task id to make video.</h2>

   <p className='text-sm text-white mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, molestias?</p>
<div className='mt-4'>
    <button className='w-full text-md font-semibold text-white'>Completed!!!</button>
</div>
   </div>
  )
}

export default CompleteTask