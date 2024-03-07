import React from 'react'
import useTogglebtn from './UseTogglebtn'
import './Theme.css'

const Togglebutton = () => {

const [theme,setTheme]=useTogglebtn('theme','dark')

  
function handleTogglebtn(){

setTheme(theme === 'light' ? 'dark' : 'light')

}

console.log(theme);

  return (
  
    <div className='light-dark-mode' data-theme={theme} >
    <div className='container'>
        <h1>Hello!</h1>
        <button onClick={handleTogglebtn} className='btn'>Changetheme</button>
    </div>
    


    </div>
  )
}

export default Togglebutton
