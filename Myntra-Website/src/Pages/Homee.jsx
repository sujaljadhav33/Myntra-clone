import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Homee = () => {
  return (
    <div className='h-fit box-border flex flex-col gap-5'>

      <div className='p-4 w-full flex justify-around items-center gap-5 h-fit bg-gray-100 mb-2 shadow-md'>
        <p className='text-start text-3xl font-bold p-2'>New here? <br /> Enjoy up to
          <span className='font-bold text-4xl text-amber-400'> 50% OFF</span> <br />on your very first order. <br />
          A perfect start to amazing shopping! <br /><br />
          <button className='text-xl bg-amber-900 p-2 rounded-sm text-white cursor-pointer transform active:bg-amber-700 duration-100'>Shop Now</button>
        </p>
        <Link><img src="../../public/images/product-images/heroimage.png" alt="head image"
          className='h-[60vh] w-[35vw] object-cover rounded-xl transform hover:scale-95 duration-300 border-2 hidden sm:block' /></Link>
      </div>

      <div className='font-bold flex justify-around flex-wrap h-fit w-full gap-1 m-2 text-center'>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/product-images/menspant.webp")] m-1 rounded-xl'></Link>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/product-images/mensTshirt.webp")] m-1 rounded-xl'></Link>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/Watch1.webp")] m-1 rounded-xl'></Link>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/mens-Shirt.webp")] m-1 rounded-xl'></Link>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/Shorts.webp")] m-1 rounded-xl'></Link>
        <Link className='min-w-[120px] lg:w-[180px] hover:scale-110 min-h-[180px] bg-no-repeat bg-cover bg-center bg-[url("../../public/Images/shoes.webp")] m-1 rounded-xl'></Link>
      </div><br />

      {/* <div className='flex w-full h-fit text-center flex-wrap justify-center align-middle'>
        
        <div className=' w-full font-bold p-2 flex flex-col min-w-[310px] max-w-[600px]'>
          <p>Most loved Products</p>

          <div className='text-center w-full flex flex-wrap gap-2 justify-center align-middle p-2 '>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/Hpage1.jpg" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/Hpagemen1.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/Hshooes.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/mensTshirt.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

          </div>

        </div>

        <div className=' w-full font-bold p-2 flex flex-col min-w-[310px] max-w-[600px]'>
          <p>Most loved Products</p>

          <div className='text-center w-full flex flex-wrap gap-2 justify-center align-middle p-2'>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/womensTshirt.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/Hpage1.jpg" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/product-images/Hpagemen1.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>

              <div className='h-1/3 w-1/3 bg-amber-50 p-1 overflow-hidden'>
                <img src="../../public/Images/Watch1.webp" alt="" className='object-cover h-full w-full rounded-xl' />
              </div>


          </div>

        </div>
      </div> */}

      <Footer/>
      
    {/* main div closing here */}
    </div>
  )
}
export default Homee