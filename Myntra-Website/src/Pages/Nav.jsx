import { Form, Link, NavLink } from "react-router-dom"
import { Search, User, Heart, Handbag } from "lucide-react";

const Nav = () => {
  return (
    <div className=" p-2 flex align-middle gap-2 justify-around shadow-md box-border fixed top-0 w-full h-18 z-50 bg-white">
      <img src="../../public/Images/Myntra.webp" alt="" className="h-10 w-15 object-cover" />

      <div className=" flex gap-10 font-bold text-xs items-center whitespace-nowrap">
        <NavLink to={'men'} >MEN</NavLink>
        <NavLink to={'women'}>WOMEN</NavLink>
        <NavLink to={'kids'}>KID'S</NavLink>
        <NavLink to={'genz'}>GEN-Z</NavLink>
        <NavLink to={'beauty'}>BEAUTY</NavLink>
        <NavLink to={'studio'}>STUDIO <sup className="text-red-500">NEW</sup></NavLink>
      </div>

      <div className="flex gap-0.5 text-sm items-center">
        <button className="bg-gray-100 px-2 py-2 text-sm rounded-sm cursor-pointer "><Search /></button>
        <input type="text" placeholder="Search for product brand or more" className=" bg-gray-100 w-[25vw] rounded-sm text-0.5xl px-2 py-2.5 placeholder:leading-0.5" />
      </div>

      <div className="text-sm font-medium flex gap-5 items-center content-center leading-none">

        <div>
          <Link to='profile' className="flex flex-col items-center">
          <User size={20} strokeWidth={2} />
          <p className="text-sm mt-2">Profile</p>
          </Link>
        </div>

        <div>
          <Link to='watchlist' className="flex flex-col items-center">
          <Heart size={20} strokeWidth={2} />
          <p className="text-sm mt-2">WatchList</p>
          </Link>
        </div>

        <div>
          <Link to='bag' className="flex flex-col items-center">
          <Handbag size={20} strokeWidth={2} />
          <p className="text-sm mt-2">Bag</p>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
export default Nav