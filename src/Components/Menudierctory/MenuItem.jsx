import React, { useState } from 'react'
import MenuList from './MenuList'

const MenuItem = ({item}) => {

    const [DisplayChildren,setDisplayChildren]=useState(false)

    function handleToggleclick(getCurrentLabel){

       setDisplayChildren(!DisplayChildren)
    }
    
    console.log(DisplayChildren);

  return <li>
         <div style={{display:'flex',gap:'20px', alignItems:'center'}}>

         <p>{item.label}</p> 
         {
         item &&  item.children && item.children.length > 0 ? 
          <span onClick={handleToggleclick}> + </span>  :null 
         }
         </div>   
         {
          item && item.children && item.children.length > 0 && DisplayChildren ? (
           <MenuList list={item.children}/>
          )
         :null}

         </li>
  
}

export default MenuItem
