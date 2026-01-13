import React, { useContext } from 'react'
import Footer from './Footer'
import MensData, { mensPageData } from '../MensData'

const Men = () => {

  const page = useContext(mensPageData);

  return (
    <div className='justify-center flex items-center flex-col '>
      {<div className='flex gap-1 justify-around w-full'>
        
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {page.map((e) => {
          return (
            <div className='flex flex-col justify-center items-center m-5 p-5 border-2 border-gray-200 rounded-lg hover:shadow-lg'>

              {/* image div start */}
              <div className='h-60 w-60 flex justify-center items-center mb-3 overflow-hidden'>
                <img src={e.Image} alt={e.Name} className='' />
              </div>
              <div className='text-center'>
                <p>{e.Name}</p>
                <p>{e.price}</p>
                <button className='border px-1 py-1 cursor-pointer bg-blue-500 text-white rounded-sm'>Add Cart</button>
              </div>
            </div>
          );
        })}
        </div>


      </div>
      }

      <Footer />
      {/* main div closing here */}
    </div>
  )
}

export default Men