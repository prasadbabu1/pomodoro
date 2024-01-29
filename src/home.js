import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate= useNavigate()
  return (
    <div className='maincell'>
    <div className='cell'>
        <h1>POMODORO APP</h1>
        <p>if you want you this app click get started</p>
        <button className="btn btn-primary" onClick={()=>{navigate("/timer")}}>GET STARTED</button>
    </div>
    </div>
  )
}

export default Home