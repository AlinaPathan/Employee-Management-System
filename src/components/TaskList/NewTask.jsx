import React from 'react'

const NewTask = () => {
  return (
    
   <div className='bg-blue-500 rounded-xl w-[300px] h-full flex-shrink-0 p-5'>
   <div className='flex justify-between items-center text-white'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
    <h4>20 feb 2024</h4>
   </div>
   <h2 className='mt-5 text-2xl font-semibold text-white'>New Task id to make video.</h2>

<p className='text-sm text-white mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, molestias?</p>
<div  className='mt-8 text-black'>
  <button className='bg-yellow-500 py-1 px-2 text-sm rounded-lg'>Mark as accepted</button>
</div>

   </div>
  )
}

export default NewTask