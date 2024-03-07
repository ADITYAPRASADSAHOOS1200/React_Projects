import React from 'react'
import './Product.css'

const Products = ({product}) => {

return <>
        {
        product.map((item)=>{

     const {title,thumbnail,description,id,price}=item

      return <div className='card' key={id}>
             <div className='image'>
             <img src={thumbnail} alt={title} />
              <h1 className='head'>{title}{''}<span>price:₹{price}</span></h1>
             <p className='desc'>{description}</p>
             </div>
             </div>
         })   
       }  
    </>  
}

export default Products
