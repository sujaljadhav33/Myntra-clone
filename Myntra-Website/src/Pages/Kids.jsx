import Footer from './Footer'
import React, { useContext } from "react";
import Appdata from "../../src/DataProvider.jsx";
import { useCart } from '../CartProvider.jsx';


const Kids = () => {
  const { kidsdata } = useContext(Appdata);
    const { addToCart } = useCart();
  

    return (
    <div className="flex flex-col items-center">
      
      {/* Products Section */}
      <div className="flex flex-wrap justify-center gap-5 mt-10 p-5">
        {kidsdata.map((item) => (
          <div
            key={kidsdata.id}
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
                  className="border px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer"
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
      </div><br />

      {/* Footer */}
      <Footer />
    </div>
  );
  
}

export default Kids