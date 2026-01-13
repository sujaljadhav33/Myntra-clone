import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Footer from './Footer'

const Homee = () => {
  return (
    <div className="h-fit box-border flex flex-col gap-5">

      {/* Mobile Nav Links ONLY */}
      <div className="flex lg:hidden justify-around font-bold text-xs py-3 bg-white shadow-sm text-[10px] sm:text-xs md:text-sm">
        <NavLink to="men">MEN</NavLink>
        <NavLink to="women">WOMEN</NavLink>
        <NavLink to="kids">KID'S</NavLink>
        <NavLink to="genz">GEN-Z</NavLink>
        <NavLink to="beauty">BEAUTY</NavLink>
        <NavLink to="studio">
          STUDIO <sup className="text-red-500">NEW</sup>
        </NavLink>
      </div>

      {/* Hero Section */}
      <div className="p-4 w-full flex justify-around items-center gap-5 bg-gray-100 shadow-md">
        <p className="text-start text-3xl font-bold p-2">
          New here? <br />
          Enjoy up to
          <span className="font-bold text-4xl text-amber-400"> 50% OFF</span>
          <br />
          on your very first order.
          <br /><br />
          <button className="text-xl bg-amber-900 p-2 rounded-sm text-white active:bg-amber-700">
            Shop Now
          </button>
        </p>

        <Link>
          <img
            src="/Images/product-images/heroimage.png"
            alt="hero"
            className="h-[60vh] w-[35vw] object-cover rounded-xl hidden sm:block"
          />
        </Link>
      </div>

      {/* Categories */}
      <div className="font-bold flex justify-around flex-wrap gap-2 text-center">
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/product-images/menspant.webp')] bg-cover bg-center rounded-xl"></Link>
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/product-images/mensTshirt.webp')] bg-cover bg-center rounded-xl"></Link>
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/Watch1.webp')] bg-cover bg-center rounded-xl"></Link>
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/mens-Shirt.webp')] bg-cover bg-center rounded-xl"></Link>
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/Shorts.webp')] bg-cover bg-center rounded-xl"></Link>
        <Link className="min-w-[120px] lg:w-[180px] min-h-[180px] bg-[url('/Images/shoes.webp')] bg-cover bg-center rounded-xl"></Link>
      </div>

      <Footer />
    </div>
  )
}

export default Homee
