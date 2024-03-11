import React,{useState,useEffect} from 'react'
import InputSearch from './InputSearch';

const Weather = () => {
    const[search,setSearch]=useState("");
    const[Loading,setLoading]=useState(true);
    const[Weatherdata,setWeatherdata]=useState("");
    const[error,setError]=useState(null)


   async function FetchData(params){

    try{  
       const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=84daa055c7c80dfa65e72535c4425e4a`)
        const data=await response.json();
        setWeatherdata(data)
       
        setLoading(false)
    }catch(e){
            setLoading(false)
            setError(e.message)
        }
    }

    function handleSearch(){
       FetchData(search)
    }
    console.log(Weatherdata);

    function getcurrentdate(){

      return new Date().toLocaleDateString("en-us",{
         weekday:'long',
         month:'long',
         day:'numeric',
         year:'numeric',

      })
    }

    useEffect(()=>{       
        FetchData("bangalore")
    },[])

if(Loading){

return <p>Loading....</p>

}else{

 return (
  <div style={{backgroundColor:'cyan',textAlign:'center', padding:'10px', 
  font:'sans',
  width:'50%', marginLeft:'350px' }}>
     <div className=''  >
    <InputSearch search={search} setSearch={setSearch} handlesearch={handleSearch} />
      </div>   
      <div>
      <h1 className='header'>{Weatherdata?.name},<span className='innertext'>{Weatherdata?.sys?.country}</span></h1>
      </div>
      <div className='date'>
      <span>{getcurrentdate()}</span>
      </div>
       <p>{Weatherdata?.main?.temp}<span>temp</span></p>
       <p className='description'>{
           Weatherdata.weather && Weatherdata.weather[0]? 
           Weatherdata.weather[0].description:""
          }
       </p>
       <div style={{display:'flex', alignItems:'center', 
                    justifyContent:'space-around' ,
                    fontSize:'30px',fontFamily:'sans' ,fontWeight:'700'}}>
          <div >
           <p>{Weatherdata?.wind?.speed}</p>
           <p>speed</p>
        </div>
          <div>
           <p>{Weatherdata?.main?.humidity}</p>
           <p>humidity</p>
        </div>
        </div>
    </div>
 )
}
}

export default Weather
