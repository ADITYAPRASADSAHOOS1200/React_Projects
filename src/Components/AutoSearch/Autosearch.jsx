import { useEffect, useState } from "react";
import Data from '../AutoSearch/Data'

import React from 'react'

const Autosearch = () => {

    const [Loading,setLoading]=useState(true); 
    const [user,setUser]=useState([]);
    const [Search,setSearch]=useState("");
    const [Filter,setFilter]=useState([]);
    const [ShowDropDown,SetShowDropDown]=useState(false);
    const [error,setError]=useState(null)


    function handleChange(event) {
        const query = event.target.value.toLowerCase(); // Fix 1: Change toLowerCase() toLowerCase()
        setSearch(query);
    
        if (query.length > 1) {

            const filteredItems = user.filter((user) =>{ 
            const item=user.toLowerCase();
            return item.indexOf(query) > -1}); // Fix ndexof to indexOf, Fix 3: Change toLowerCase() to toLowerCase()
            setFilter(filteredItems);
            SetShowDropDown(true);

        } else {

            SetShowDropDown(false); 
            
        }
    }
    

console.log(Filter,user);


  async function fetchUsers(){
    try{ 
     const response=await fetch(`https://dummyjson.com/users`)
     const data=await response.json()
     

     if(data && data.users && data.users.length >0){
         setUser(data.users.map((user)=>user.firstName))
         setLoading(false)
         
     }

    }catch(e){
      setLoading(false)
      setError(e.message)
    }

}

function handleClick(event){
    setSearch(event.target.innerText)
    SetShowDropDown(false)
}

useEffect(()=>{
    fetchUsers();
},[])

if(Loading) {

  return <p>Loading...pleasewait!</p>

}

if(error !== null){

    return <p>Error Message! {error} </p>
}else{

  return (
    <div style={{textAlign:'center'}}>
    <input type="text" value={Search}  onChange={handleChange}/>
    {
        ShowDropDown  &&   <Data data={Filter}  onCLick={handleClick} />
    }    
    </div>
  )
}

}

export default Autosearch
