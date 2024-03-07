import React from 'react'
import MenuList from './MenuList'

export default function Index({menus=[]}) {
  return  <div style={{
         height:'100vh',
         width:'20vw',
         backgroundColor:'blue',
         color:'White',
        fontFamily:'sans-serif',
 }}>
      <MenuList list={menus}/>
    </div>
}
