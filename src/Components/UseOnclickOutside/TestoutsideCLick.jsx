import { useEffect } from "react"

 export default function useoutsideCLick({ref,handler}){
    
    
    useEffect(()=>{

        function Listener(event){
           if(!ref.current || ref.current.contains(event.target)) return
           else handler(event)
        }

        document.addEventListener('mousedown',Listener)
        document.addEventListener('touchstart',Listener)

    return ()=>{
        document.removeEventListener('mousedown',Listener)
        document.removeEventListener('touchstart',Listener)
    }
    
    },[ref,handler])


}






