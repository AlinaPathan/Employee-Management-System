import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({loggedInUserData,idx}) => {
   console.log(loggedInUserData)
  return (
    <div id='tasklist'  className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 p-4 w-full  mt-10'>
   {loggedInUserData.tasks.map((e)=>{
      if(e.active){
         return <AcceptTask key={idx}/>
      }
      if(e.NewTask){
         return <NewTask  key={idx}/>
      }
      if(e.completed){
         return <CompleteTask  key={idx}/>
      }
      if(e.failed){
         return <FailedTask  key={idx}/>
      }
   })} 
     </div>
  )
}

export default TaskList