
import React, {useState,useEffect } from 'react'

const Profile = () => {

    const [Loading,setLoading]=useState(true);
    const [data,setData]=useState([])
    const [user,setUser]=useState("")

  async function fetchData(){
   try{
    const response=await fetch(`https://api.github.com/users/${user}`)
    const data=await response.json()
     setData(data)
     console.log(data);
   }catch(e){
    console.log(e.message);
    
   }

    }



function  handleClick(){ 
   fetchData()
}



 return  <div>
             <input
              type="text"
              value={user}
              onChange={e=> setUser(e.target.value)} 
             />
             <button onClick={handleClick}>Search</button>
             </div>
}

export default Profile
