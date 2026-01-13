// import { Form, Link, NavLink } from "react-router-dom"
// import { Search, User, Heart, Handbag } from "lucide-react";

// const Nav = () => {
//   return (
//     <div className=" p-2 flex align-middle gap-2 justify-around shadow-md box-border fixed top-0 w-full h-18 z-50 bg-white">
//       <img src="../../public/Images/Myntra.webp" alt="" className="h-10 w-15 object-cover" />

//       <div className=" flex gap-10 font-bold text-xs items-center whitespace-nowrap">
//         <NavLink to={'men'} >MEN</NavLink>
//         <NavLink to={'women'}>WOMEN</NavLink>
//         <NavLink to={'kids'}>KID'S</NavLink>
//         <NavLink to={'genz'}>GEN-Z</NavLink>
//         <NavLink to={'beauty'}>BEAUTY</NavLink>
//         <NavLink to={'studio'}>STUDIO <sup className="text-red-500">NEW</sup></NavLink>
//       </div>

//       <div className="flex gap-0.5 text-sm items-center">
//         <button className="bg-gray-100 px-2 py-2 text-sm rounded-sm cursor-pointer "><Search /></button>
//         <input type="text" placeholder="Search for product brand or more" className=" bg-gray-100 w-[25vw] rounded-sm text-0.5xl px-2 py-2.5 placeholder:leading-0.5" />
//       </div>

//       <div className="text-sm font-medium flex gap-5 items-center content-center leading-none">

//         <div>
//           <Link to='profile' className="flex flex-col items-center">
//           <User size={20} strokeWidth={2} />
//           <p className="text-sm mt-2">Profile</p>
//           </Link>
//         </div>

//         <div>
//           <Link to='watchlist' className="flex flex-col items-center">
//           <Heart size={20} strokeWidth={2} />
//           <p className="text-sm mt-2">WatchList</p>
//           </Link>
//         </div>

//         <div>
//           <Link to='bag' className="flex flex-col items-center">
//           <Handbag size={20} strokeWidth={2} />
//           <p className="text-sm mt-2">Bag</p>
//           </Link>
//         </div>
        
//       </div>
//     </div>
//   )
// }
// export default Nav

import { Link, NavLink } from "react-router-dom";
import {
  Search,
  User,
  Heart,
  Handbag,
  Menu,
} from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <img
          src="../../public/Images/Myntra.webp"
          alt="logo"
          className="h-10 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 font-bold text-xs items-center">
          <NavLink to="men">MEN</NavLink>
          <NavLink to="women">WOMEN</NavLink>
          <NavLink to="kids">KID'S</NavLink>
          <NavLink to="genz">GEN-Z</NavLink>
          <NavLink to="beauty">BEAUTY</NavLink>
          <NavLink to="studio">
            STUDIO <sup className="text-red-500">NEW</sup>
          </NavLink>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center">
          <button className="bg-gray-100 px-2 py-2">
            <Search />
          </button>
          <input
            type="text"
            placeholder="Search for products"
            className="bg-gray-100 w-[22vw] px-3 py-2 outline-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="profile" className="flex flex-col items-center">
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </Link>

          <Link to="watchlist" className="flex flex-col items-center">
            <Heart size={20} />
            <span className="text-xs mt-1">Watchlist</span>
          </Link>

          <Link to="bag" className="flex flex-col items-center">
            <Handbag size={20} />
            <span className="text-xs mt-1">Bag</span>
          </Link>
        </div>

        {/* Mobile Right Icons */}
        <div className="flex lg:hidden items-center gap-4">
          <Search />
          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-3">
          <NavLink to="profile" className="flex items-center gap-3">
            <User /> Profile
          </NavLink>
          <NavLink to="watchlist" className="flex items-center gap-3">
            <Heart /> Watchlist
          </NavLink>
          <NavLink to="bag" className="flex items-center gap-3">
            <Handbag /> Bag
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
