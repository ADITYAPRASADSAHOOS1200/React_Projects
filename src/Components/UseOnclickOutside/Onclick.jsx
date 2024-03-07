import React,{useEffect, useRef, useState} from 'react'
import useoutsideCLick from './TestoutsideCLick'

const Onclick = () => {

  
    const [Content,setContent]=useState(false)

    const ref=useRef()

    useoutsideCLick({ref,handler:()=>setContent(false)})


    return (
      <div ref={ref}>
        <button onClick={()=>setContent(!Content)}>showModal</button>  
        {
          Content ? <div>this is a randomCOntent
            <p>click outSide to close</p>
          </div> : null
        }
      </div>
    )
}

export default Onclick
