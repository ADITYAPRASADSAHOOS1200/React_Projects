import { useEffect, useState } from "react";



export default function useTogglebtn(key,defaultvalue){

const [value,setValue]=useState(()=>{

  let currValue;

  try{

    currValue=JSON.parse(localStorage.getItem(key) || String(defaultvalue))

  }catch(e){
    
     console.log(e.message)

     currValue=defaultvalue

  }
  return currValue;
})


useEffect(()=>{
  
localStorage.setItem(key,JSON.stringify(value))
    
},[key,value])



return [value,setValue];

}