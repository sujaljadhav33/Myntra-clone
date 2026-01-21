import Footer from './Footer'
import Appdata from "../../src/DataProvider.jsx";
import { useContext } from 'react';
import { useCart } from '../CartProvider.jsx';
import { NavLink } from 'react-router-dom';


const Genz = () => {
  const { mensData ,WomensData } = useContext(Appdata);
    const { addToCart } = useCart();
  
  return (
    <div className="flex flex-col items-center">

      <div className="flex lg:hidden justify-around font-bold gap-5 w-full text-xs py-3 bg-white shadow-sm text-[10px] sm:text-xs md:text-sm">
        <NavLink to="men">MEN</NavLink>
        <NavLink to="women">WOMEN</NavLink>
        <NavLink to="kids">KID'S</NavLink>
        <NavLink to="genz">GEN-Z</NavLink>
        <NavLink to="beauty">BEAUTY</NavLink>
        <NavLink to="studio">
          STUDIO <sup className="text-red-500">NEW</sup>
        </NavLink>
      </div>
      
      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 p-5">
        {mensData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-5 border-2 border-gray-200 rounded-lg hover:shadow-lg"
          >
            {/* Image */}
            <div className="h-60 w-60 flex justify-center items-center overflow-hidden mb-3">
              <img src={item.Image} alt={item.Name} />
            </div>

            {/* Info */}
            <div className="text-center">
              <p className="font-semibold">{item.Name}</p>
              <p>₹{item.price}</p>

              <div className="mt-2">
                <button
                  className="border px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer active:bg-amber-500"
                  onClick={() => addToCart(item)}
                >
                  Add Cart
                </button>

                &nbsp;

                <button className="border px-3 py-1 bg-emerald-700 text-white rounded-sm">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* womens data start here */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 p-5">
        {WomensData.map((item) => (
          <div
            key={WomensData.id}
            className="flex flex-col items-center p-5 border-2 border-gray-200 rounded-lg hover:shadow-lg"
          >
            {/* Image */}
            <div className="h-60 w-60 flex justify-center items-center overflow-hidden mb-3">
              <img src={item.Image} alt={item.Name} />
            </div>

            {/* Info */}
            <div className="text-center">
              <p className="font-semibold">{item.Name}</p>
              <p>₹{item.price}</p>
              <div className="mt-2">
                <button
                  className="border px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer active:bg-amber-400"
                  onClick={() => addToCart(item)}
                >
                  Add Cart
                </button>

                &nbsp;

                <button className="border px-3 py-1 bg-emerald-700 text-white rounded-sm active:bg-amber-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div><br />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Genz