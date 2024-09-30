import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'

function App() {
 
  return (
   
    <div className="bg-[#dcdcdc] p-6 rounded-lg shadow-lg">

   <Header/>
   <Home/>
   <About/>
   <Projects/>
   <Contacts/>
    </div>
  
  )
}

export default App
