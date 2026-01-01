import React from 'react'
import notfound from '../../public/Images/product-images/pagenot-found.gif'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="h-[90vh] w-full bg-[url('/Images/product-images/pagenot-found.gif')] bg-contain bg-no-repeat bg-center bg-black text-center p-10">
            <Link to={'/'} className=' m-10 bg-white p-2 rounded-sm font-bold text-black w-fit'>BACK HOME</Link>
        </div>
    )
}
export default PageNotFound