import React from 'react'
import useFetchhook from './FetchHook'

const Testhook = () => {

   const { loading , data , Error }=useFetchhook('https://dummyjson.com/products',{})

   console.log(loading,data,Error);

  return (
    <div style={{textAlign:'center'}}>
    <h1 style={{textAlign:'center'}}>useFetchHook</h1>  
    <div style={{listStyle:'none'}}>
      { 
         loading && <p>Loading please wait!!!....</p>
      }

        {
            data && data.length > -1 ? data.map((item)=>{
              return <li>{item.title}</li>
            }):null
        }
    </div>
    </div>
  )
}

export default Testhook
