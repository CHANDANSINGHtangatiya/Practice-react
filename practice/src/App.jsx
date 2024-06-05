import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

export default function App() {
  const [users, setusers] = useState([]);
  const formhandlesubmitData=(data)=>{
setusers([...users,data])
  }
  const remove=(id)=>{
setusers(()=>users.filter((item, index)=> index !== id))
  }
  return (
    <>
    <div className="h-screen w-full bg-zinc-400 flex items-center justify-center">
      <div className=" container mx-auto">
        <Cards users={users} remove={remove}/>
        <Form formhandlesubmitData={formhandlesubmitData}/>
      </div>
    </div>
    </>
  )
}
