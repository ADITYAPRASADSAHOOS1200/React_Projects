import React, { useEffect, useState } from 'react'


const RandomColor = () => {
  const [typeofColor,settypeofColor]=useState("hex");
  const [color,Setcolor]=useState("#000000");



function RandomUtility(length){
  
return Math.floor(Math.random() * length)

}

function handleColor(){
    let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E']
    let HexCode="#"
    for(let i=0 ;i<6;i++){
      HexCode += hex[RandomUtility(hex.length)]
    }
    console.log(HexCode);
    Setcolor(HexCode)
}

function handleRgb(){
   const r = RandomUtility(255);
   const g = RandomUtility(255);
   const b=RandomUtility(255)

   Setcolor(`rgb(${r},${g},${b})`)
}

//  useEffect(()=>{
  
//   if (typeofColor === "hex") handleColor()
//    else handleRgb()
//   },[typeofColor])


  return (
    <div style={{
        height:'100vh',
        width:'100vw',
        backgroundColor:color,
        textAlign:'center',
    }}>
     
       <button  onClick={typeofColor === "hex" ? handleColor : handleRgb}>Generate Random color</button>
       <button  onClick={()=>settypeofColor("rgb")}>create Rgb color</button>
       <button  onClick={()=>settypeofColor("hex")}>create Hex color</button>
     
     <div 
     style={
        {
          display:'flex',
          alignItems:"center",
          justifyContent:"center",
          fontFamily:"sans-serif",
          fontSize:"25px",
          color:"white",
          flexDirection:'column'
        }
     }

     >

        <h3>{typeofColor === "hex" ? "HEX" : "RGB"}</h3>
        <h1>{color}</h1>
        </div>

    </div>

  )
}

export default RandomColor
