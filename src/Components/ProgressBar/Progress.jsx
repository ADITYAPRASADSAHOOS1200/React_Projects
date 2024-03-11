import React, { useEffect, useState } from 'react'

import ProgressBar from './ProgressBar'

import './Progress.css'

const Progress = () => {

const[value,setValue]=useState(0)
const[Success,setSuccess]=useState(false)

useEffect(()=>{
 setInterval(()=>{
   setValue((value)=>value+1)
 },500)

},[value])


  return (
    <div className='Progress'>
     <span className='Header'>ProgressBar</span>
     <ProgressBar 
     onComplete={()=>setSuccess(true)}
      value={value}
        />
        <span>{ Success ? " success" : "Loading !!!...."}</span>

    </div>
  )
}

export default Progress
