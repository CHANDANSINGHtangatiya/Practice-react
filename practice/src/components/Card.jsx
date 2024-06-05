import React from 'react'

export default function Card({users,remove,id}) {
  return (
   <>
   <div  className="w-[12vw]  rounded-lg bg-zinc-300 flex flex-col items-center p-1 ">
        <div className="image w-14 h-14  rounded-full bg-blue-900 mx-auto overflow-hidden">
            <img className='w-full h-full object-cover ' src={users.image} alt="" />
            
    
        </div>
        <h2>{users.name}</h2>
        <h1 className='opacity-60 text-sm mt-2 mb-1'>{users.email}</h1>
        <p className='text-sm tracking-tight text-center'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit.</p>
        <button onClick={()=>remove(id)} className='bg-red-700 text-white px-4 py-1 rounded-md mt-4 text-sm text-semibold'>Remove It</button>
        
       </div>
   </>
  )
}
