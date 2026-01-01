import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-gray-200 pt-12 pb-8 px-4 md:px-20 text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-gray-900 font-bold text-sm tracking-widest mb-4">ONLINE SHOPPING</h3>
          <ul className="space-y-2 text-sm">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>GEN'Z</li>
            <li>Beauty</li>
            <li>Studio</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-sm tracking-widest mb-4">CUSTOMER POLICIES</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Officer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-bold text-sm tracking-widest mb-4">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <p className="text-xs mb-4">Get the latest trends and updates on our app</p>
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Google Play</p>
            <p className="font-semibold text-gray-800">App Store</p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-gray-900 font-bold text-sm tracking-widest mb-2">KEEP IN TOUCH</h3>
            <div className="flex space-x-4 text-xs">
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Youtube</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div>
              <p className="text-gray-900 font-bold text-sm">100% ORIGINAL</p>
              <p className="text-xs">guarantee for all products at myntra.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div>
              <p className="text-gray-900 font-bold text-sm">RETURN WITHIN 14 DAYS</p>
              <p className="text-xs">of receiving your order</p>
            </div>
          </div>
        </div>

      </div>

      <hr className="my-10 border-gray-200" />

      <div className="mb-8">
        <h3 className="text-gray-900 font-bold text-sm mb-4">POPULAR SEARCHES</h3>
        <p className="text-xs leading-6">
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | 
          Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | 
          Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | 
          Designer Saree | Saree | Adidas Shoes | Bags | Watches | Jewellery | Skechers | Forever 21 | 
          Adidas | Reebok | Puma | United Colors of Benetton
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-xs pt-4 border-t border-gray-200">
        <p>© 2024 www.myntra.com. All rights reserved.</p>
        <p>Registered Office: Bangalore, India</p>
      </div>
    </footer>
    
  )
}

export default Footer