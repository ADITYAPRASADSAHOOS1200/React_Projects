import React, { useEffect, useState } from 'react'
import Products from './Products.jsx'
import './Product.css'


const Loadmorebutton = () => {

   const [Loading,setLoading]=useState(true)
   const [product,setProduct]=useState([])
   const [index,setIndex]=useState(0);
  




 

async function FetchProducts(){

 try{
    const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${index === 0 ? 0: index * 20 }`);
    const data=await response.json()
   
    if( data && data.products && data.products.length){
        setProduct((prevdata)=>[...prevdata,...data.products])
        setLoading(false)
    }
   
 }catch(e){
   setProduct(e.message)
   setLoading(false)
  }
}

useEffect(()=>{
    
FetchProducts()
    
},[index])


if(Loading){

  return <p>Loading......please wait!</p>

}else{
  
return < div className='Conatiner'>
        <div className='Cont'>
        <Products  product={product} />
        </div>
    
        <button className="btn-cont"
          onClick={()=>setIndex(index+1)} 
          disabled={index <= product.length}
        >load Products</button>
      </div>
   }
}

export default Loadmorebutton
