import React, { useRef } from 'react'
import { data } from './DataSEC'


const Particilarsection = () => {

    const ref=useRef()

function handleClick(){
    console.log('click');
 
    let pos=ref.current.getBoundingClientRect().top;
    window.scrollTo({
        top:pos,
        behavior:"smooth"
    })
      
}


  return (
    <div>
      
    <h1 style={{textAlign:'center'}}>Scroll to a particular sections</h1>
    <button style={{marginLeft:'550px'}} onClick={handleClick}> click to scroll</button>  
    {
         data.map( (dataitem,index) => <div key={index}  ref={index === 2 ? ref:null }style={dataitem.style}>
          <h1>{dataitem.label}</h1>

         </div>)
      }
   </div>  
  )
}

export default Particilarsection
