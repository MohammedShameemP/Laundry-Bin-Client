import React, { useState } from 'react'
import "./Pickupdate.css"

const Pickupdate = () => {
    const [date,setDate]=useState('');
    console.log("date",date);
    const [slot,setSlot]=useState('');
    

    const handlechange=(e)=>{

        setDate(e.target.value)
        
    }
  return (
    <div className='pickupdatemain'><h1 className='pickupdateh1'>Pickupdate</h1>
    <div className='dateinput'>
    <input className='input1' type="date"   onChange={(e)=>handlechange(e)} placeholder='name' />
    <input className='input2' type="time" placeholder='Slot' /></div>


    </div>
  )
}

export default Pickupdate