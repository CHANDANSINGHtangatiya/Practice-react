import React from 'react'
import Card from './Card'

export default function Cards({users,remove}) {
  return (
    <>
   <div className="w-full  max-h-[50vh] overflow-x-auto rounded-lg p-4  flex justify-center gap-9 flex-wrap">
{users.map((item,index)=>{
   return <Card users={item} key={index} remove={remove} id={index}/>
})}



   </div>
   
   </>
  )
}
