import React from 'react'
import './Acc.css'
import data from './Data'
import { useState } from 'react'

//single Selction
//Multiple seklection


const Accordian = () => {
    
  const[selected ,setSelected ]=useState(null)
  const[Mutltipleselection,setMultipleselection]=useState(false);
  const[multiple,setMultiple]=useState([])

  function handleSingleSelection(id){
  //   console.log(id);
  // console.log(selected);
    setSelected(id === selected ? null: id)
  } 


  function handleMultipleSelection(getCurrentid){
    let copyMulti=[...multiple];

    const findIndexId=copyMulti.indexOf(getCurrentid)
    console.log(findIndexId);
     
    if(findIndexId === -1) copyMulti.push(getCurrentid);
    else  copyMulti.splice(findIndexId,1)
    
     setMultiple(copyMulti);
     console.log(multiple);
  }


  return <div className='wrapper'>
        
          <button className='btn-2' onClick={()=>setMultipleselection(!Mutltipleselection)}>EnableMultiSelection</button>   
          <div className="accordian">
           {
              data.length > 0 && data ? data.map((item)=>{

               const {id,question,answer}=item

                return <div className='item'>

                    <div

               onClick={  Mutltipleselection ? ()=>handleMultipleSelection(id) :()=>handleSingleSelection(id) } className='title'>

                      <h3 key={id}>{question}</h3>

                      <span >+</span>

                      </div>
                      <div className='ans'>
                        {/* {
                          selected === id || multiple.indexOf(id) !== -1 ? (<p>{answer}</p>) : null 
                        } */}
                         {
                            Mutltipleselection ? multiple.includes(id) &&<p>{answer}</p> :   selected === id && <p>{answer}</p>
                         }
                      </div>
                    </div>
            }) :<div>No data Found!</div>
           }

          </div>
        </div>
}

export default Accordian
