import React from 'react'
import { useForm} from "react-hook-form"
export default function Form({formhandlesubmitData}) {
const{register,handleSubmit,reset}=useForm()
const handleform=(data)=>{
    formhandlesubmitData(data)
    reset();
}
  return (
    <>
    <div className="mt-10 flex justify-center">
        <form action="" className='flex gap-4 ' onSubmit={handleSubmit(handleform)}>
            <input {...register("name")} className='px-6 py-1 rounded-lg outline-none text-sm font-bold' type="text" name="name" id="" placeholder='name' />
            <input {...register("email")} className='px-6 py-1 rounded-lg outline-none text-sm font-bold' type="text" name="email" id="" placeholder='email'/>
            <input {...register("image")} className='px-6 py-1 rounded-lg outline-none text-sm font-bold' type="text" name="image" id="" placeholder='image url' />
            <input className='rounded-full text-white font-semibold bg-blue-500 px-5 py-1 ' type="submit" name="submit" id="" />

        </form>
    </div>
    </>
  )
}
