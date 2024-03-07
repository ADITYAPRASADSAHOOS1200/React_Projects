import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list=[]}) => {
  return <ul className='container'>
          {
            list && list.length > 0 ?
            list.map((item,index)=><MenuItem item={item}/>) :
            null
          }
         </ul>
}

export default MenuList

