import React, { useEffect, useState } from 'react'
import './ProgressBar.jsx'
import { MIN,MAX } from './Constants.jsx';




const ProgressBar = ({value = 0,onComplete}) => {

  const [percent,setPercent]=useState(value);

  useEffect(()=>{

   setPercent(Math.min(MAX,Math.max(value,MIN)))
   if(value >= MAX){
    onComplete();
   }

  },[value])

  return (
    <div className='progressBar'>
    <span
      style={{color:percent > 49 ? 'white':'black'}}
    >{percent.toFixed()}%</span>
     <div 
     role='progressbar'
    //  style={{width:`${percent}%`}}
     style={{transform:`scaleX(${percent/MAX})`,transformOrigin:'left' }}
     aria-valuemin={MIN}
     aria-valuemax={MAX}
     aria-valunow={percent.toFixed()}
     />
    </div>
  )
}

export default ProgressBar
