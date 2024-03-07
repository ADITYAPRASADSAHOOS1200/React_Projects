import React, { useEffect, useState } from 'react'
import './Scroll.css'

const ScrollTop = () => {
   
    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);
    const[Error,setError]=useState("");
     const[Scrollpercentage,setScrollPercentage]=useState(0)

  async function fetchdata({geturl}){

  try{
     const response=await fetch(geturl)
     const data=await response.json()
     setData(data.products)
     setLoading(false)
  }catch(e){
    console.log(e.message);
    setError(e.message)
  }
 }


 useEffect(()=>{
    fetchdata({geturl:'https://dummyjson.com/products?limit=100'})
 },[])



 function handleScroll(){

//   console.log(
//     document.body.scrollTop,
//     document.documentElement.scrollTop,
//     document.documentElement.scrollHeight,
//     document.documentElement.clientHeight,
//     );

 const howMuchScrolled=document.body.scrollTop || document.documentElement.scrollTop;

 const height=document.documentElement.scrollHeight- document.documentElement.clientHeight;
  setScrollPercentage((howMuchScrolled/height)*100)
 }

 console.log(Scrollpercentage);

 useEffect(()=>{

    window.addEventListener('scroll',handleScroll);
    
    return ()=>{

        window.removeEventListener('scroll',handleScroll)
    }
 })








 if(loading){
    return <p>Loading.....</p>
 }else{
    return (
        <div>
            <div className="top-container">
            <h1>Custom Scroll Api</h1>
            <div className='Scroll-progress-tracking-container'>
            <div className='current-progress-bar' style={{width:`${Scrollpercentage}%`}}></div>
            </div>
            </div>
           <div className='data-container'>
            {
               data &&  data.map((item)=>{
                return <p>{item.title}</p>  
               }) 
            }
           </div>

         </div>
        )
 }





}

export default ScrollTop
