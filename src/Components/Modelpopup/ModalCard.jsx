import React from 'react'

const ModalCard = ({id,header,body,Footer,onClick}) => {



  return (
    <div id={id || "Modal"} className='container' style={{height:'200px', width:'300px',border:'2px solid black',textAlign:'center',position:'relative' }}>
        <div className='Content'>
         <div className='header'>
            <span className='Close Modal Up' style={{position:'absolute',top:'-20px',right:'-14px'}}
            onClick={onClick}
            >&times;</span>
            {
                header ? header : <h1>This is our header</h1>
            }
         </div>
         <div className='body'>
            {
                body ? body : <p>This is our body</p>
            }
         </div>
         <div className='Footer'>
           {
              Footer ? Footer :<h4>this is our footer</h4>
           }
          </div>
       </div>
  </div>
  )
}

export default ModalCard
