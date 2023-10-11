import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import MenuPc from './components/MenuPc'
import '../src/index.css'
import Contact from './pages/Contact/Contact'
import MenuMobileBars from './assets/bars-solid.svg'
import { useState } from 'react'
import MenuMobile from './components/Menus/MenuMobile.jsx'

function App() {

  const [menuOn, setMenuOn] = useState(false);


  return (
    <div>
      {!menuOn && <p className='w-[50px] invert	 z-10 p-[10px] md:hidden' onClick={() => setMenuOn(true)}><img src={MenuMobileBars} alt="menuMobile" /></p>}
      {menuOn && <MenuMobile setMenuOn={setMenuOn} />}
      <div className='flex mt-[4%] max-sm:p-[10px] ml-[10%]'>
        <div className='max-sm:hidden '>
          <MenuPc />
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Projects' element={<Projects />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
