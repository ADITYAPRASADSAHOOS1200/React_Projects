import React, { useEffect, useState } from 'react'

const InputSearch = ({search,setSearch,handlesearch}) => {

    return(
        <div>
            <input 
             type="text"
             value={search}
             onChange={e=>setSearch(e.target.value)}
             />
             <button onClick={handlesearch}>handlesearch</button>
        </div>
    )
 
}


export default InputSearch



