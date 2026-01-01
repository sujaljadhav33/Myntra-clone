import React, { useContext } from 'react'
import { WomenCon } from '../WomenContext'
import Footer from './Footer';

const Women = () => {
  
  const {data,name,setName} = useContext(WomenCon);
  return (
    <div className='h-screen text-center relative group'>
      <p>{data.name}</p>
      <p>{data.addres}</p>
      <p>{data.surname}</p>
      <input type="text" placeholder='enter your name ' onChange={(e)=>{setName(e.target.value)}} />
      <Footer/>
      {/* main div closing  */}
    </div>
  )
}

export default Women