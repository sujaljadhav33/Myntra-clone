import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Pages/Nav'
import { Outlet, Route, Routes } from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Genz from './Pages/Genz'
import Beauty from './Pages/Beauty'
import Studio from './Pages/Studio'
import { Home } from 'lucide-react'
import Homee from './Pages/Homee'
import Profile from './Pages/Profile'
import Watchlist from './Pages/Watchlist'
import Bag from './Pages/Bag'
import PageNotFound from './Pages/PageNotFound'

function App() {

  return (
    <div>
      <Nav></Nav>
      <div className='mt-18 p-2'>
        <Routes>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/genz' element={<Genz/>}/>
          <Route path='/studio' element={<Studio/>}/>
          <Route path='/beauty' element={<Beauty/>}/>
          <Route path='/' element={<Homee/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>

      </div>

    </div>
  )
}
export default App
