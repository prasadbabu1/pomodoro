import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Customise = () => {
    const navigate=useNavigate()
    const [input,setinput]=useState("")
    const [time,setTime]= useState("")
    const handleinput=(e)=>{
setinput(e.target.value)
setTime(e.target.value)
    }
    const movetotimer=()=>{
        if (input.length===0){
            alert("enter input value")
        } else{
            const timer = parseInt(time);
      navigate("/timer", { state: { timer } })
        }
    }
  return (
   <div className='maincell'>
      <div className='cell'>
        <h1>Customize Timer</h1>
        <input type='number' onChange={(e)=>{handleinput(e)}} value={input}/>

         <div style={{margin:"15px"}}>
         <button className='btn btn-danger mx-2' onClick={()=>{navigate("/timer")}}>cancel</button>
        <button className='btn btn-primary mx-2' onClick={()=>{setinput("")}}>clear</button>
        <button className='btn btn-success mx-2' onClick={movetotimer}>save</button>
         </div>
  </div>
   </div>
  )
}

export default Customise