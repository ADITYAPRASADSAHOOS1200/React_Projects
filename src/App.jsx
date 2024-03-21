import { useState } from 'react'
import './App.css'
import Accordian from './Components/Accordian/Accordian'
import RandomColor from './Components/Random-color/RandomColor'
import Infos from './Components/Menudierctory/Info.js'
import Index from './Components/Menudierctory/Index.jsx'
import QRCode from 'react-qr-code'
import Togglebutton from './Components/ToggleButton/Togglebutton.jsx'
import ScrollTop from './Components/Scroll-indicator/ScrollTop.jsx'
import Modal from './Components/Modelpopup/Modal.jsx'
import Profile from './Components/GithubProfileFinder/Profile.jsx'
import Autosearch from './Components/AutoSearch/Autosearch.jsx'
import Stars from './Components/Starhover/Stars.jsx'
import TicTacToe from './Components/Tic Tac Toe/TicTacToe.jsx'
import Testhook from './Components/customHooks/Testhook.jsx'
import Onclick from './Components/UseOnclickOutside/Onclick.jsx'
import Scrolltop from './Components/Scrolltoptobottom/Scrolltop.jsx'
import Particilarsection from './Components/useParticularSection/Particilarsection.jsx'
import Weather from './Components/WeatherApi/Weather.jsx'
import Progress from './Components/ProgressBar/Progress.jsx'


function App() {
 
  return (
    <>
       {/* <Stars/>
      <Accordian/>
      <RandomColor/>
      <Index menus={Infos}/>
      {/* <QRCode/> */}
      {/* {/* <Togglebutton/> */}
      {/* <ScrollTop/>
      <Modal/>
      <Profile/>
      <Autosearch/>
      <TicTacToe/>
      <Testhook/>
      <Onclick/> 
      <Scrolltop/>
       <Particilarsection/>
        <Weather/> */} 
       {/* <Progress/>  */}
    </>
  )
}

export default App
