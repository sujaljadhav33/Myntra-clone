import React, { useContext } from 'react'
import Footer from './Footer'
import MensData, { mensPageData } from '../MensData'

const Men = () => {

  const page = useContext(mensPageData);

  return (
    <div className='h-screen justify-center flex items-center flex-col'>
      {<div className='flex gap-1 justify-around w-full'>
        {console.log(typeof (page))}
        {page.map((e) => {
          return (
            <div><p>{e.num}</p></div>
          );
        })}
      </div>


      }


      <Footer />
      {/* main div closing here */}
    </div>
  )
}

export default Men