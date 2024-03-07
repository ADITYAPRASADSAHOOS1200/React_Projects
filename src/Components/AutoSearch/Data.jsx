import React from 'react'


const Data = ({data,onCLick}) => {
  return <ul className='ul-list'> 
         {
            data && data.map((item,index)=> <li key={index} onClick={onCLick} className='list'>{item}</li>)
         }
        </ul>
  
}

export default Data
