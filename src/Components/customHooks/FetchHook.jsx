import { useEffect, useState } from "react";


 export default function useFetchhook(url,option={}){

    const [loading,setLoading]=useState(true);
    const [data,setData]=useState('');
    const [Error,setError]=useState(null);



async function Fetch(url){
    try{

        const response=await fetch(url);
        if(!response.ok) throw new error(response.statusText)
        setLoading(false)
        const data=await response.json();
        setData(data.products)
        console.log(data);
    
    }catch(e){
      setLoading(false)
      setError(e.message)
       }
    }


    useEffect(()=>{
      Fetch(url)
    },[])


return { loading , data , Error }

 }