import React, { createContext } from 'react'
export const mensPageData =createContext();

const MensData = ({children}) => {
    const mensData=[
                    {Image:"../../public/Images/mens/mensTshirt.webp",
                      Name:"Oversize T-Shirt",
                      price:"499",
                    },
                    {Image:"../../public/Images/mens/menspant.webp",
                      Name:"Pant",
                      price:"799",
                    },
                    {Image:"../../public/Images/mens/mens-Shirt.webp",
                      Name:"Shirt",
                      price:"899"
                    },
                    {Image:"../../public/Images/mens/Hpagemen1.webp",
                      Name:"Pant",
                      price:"999",
                    },
                    {Image:"../../public/Images/mens/shoes.webp",
                      Name:"Shoes",
                      price:"999",
                    },
                    {Image:"../../public/Images/mens/Shorts.webp",
                      Name:"Shorts",
                      price:"999",
                    },
                    {Image:"../../public/Images/mens/t-sh1.webp",
                      Name:"t-Shirt",
                      price:"999",
                    },
                    {Image:"../../public/Images/mens/sh1.webp",
                      Name:"Shirt",
                      price:"999",
                    }
                  ];
  return (
    <mensPageData.Provider value={mensData}>
        {children}
    </mensPageData.Provider>
  )
}

export default MensData