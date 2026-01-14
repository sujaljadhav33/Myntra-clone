import React, { createContext } from "react";

// 1️⃣ Create Context
const Appdata = createContext();

// 2️⃣ Create Provider
export const DataProvider = ({ children }) => {
  const mensData = [
    {
      Image: "/Images/mens/mensTshirt.webp",
      Name: "Oversize T-Shirt",
      price: 499,
    },
    {
      Image: "/Images/mens/menspant.webp",
      Name: "Pant",
      price: 799,
    },
    {
      Image: "/Images/mens/mens-Shirt.webp",
      Name: "Shirt",
      price: 899,
    },
    {
      Image: "/Images/mens/Hpagemen1.webp",
      Name: "Pant",
      price: 999,
    },
    {
      Image: "/Images/mens/shoes.webp",
      Name: "Shoes",
      price: 999,
    },
    {
      Image: "/Images/mens/Shorts.webp",
      Name: "Shorts",
      price: 999,
    },
    {
      Image: "/Images/mens/t-sh1.webp",
      Name: "T-Shirt",
      price: 999,
    },
    {
      Image: "/Images/mens/sh1.webp",
      Name: "Shirt",
      price: 999,
    },
  ];

  const WomensData = [
    {
      Image: "/Images/womenspagePic/saadi1.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi2.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi3.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi4.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi5.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi6.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi7.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi8.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi9.webp",
      Name: "Saadi",
      price: 999,
    },
    {
      Image: "/Images/womenspagePic/saadi10.webp",
      Name: "Saadi",
      price: 999,
    },
  ];

  const kidsdata =[
    {
      Image: "/Images/kids/kid1.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid2.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid3.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid4.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid5.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid6.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid7.webp",
      Name: "shirt pant combo ",
      price: 799,
    },
    {
      Image: "/Images/kids/kid8.webp",
      Name: "shirt pant combo ",
      price: 799,
    }
  ];
  const beauty=[
    {
      Image: "/beauty/b1.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b2.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b3.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b4.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b5.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b6.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b7.webp",
      Name: "face Cream",
      price: 1799,
    },
    {
      Image: "/beauty/b8.webp",
      Name: "face Cream",
      price: 1799,
    }
  ]
  return (
    <Appdata.Provider value={{ mensData, WomensData ,kidsdata ,beauty }}>
      {children}
    </Appdata.Provider>
  );
};

// 3️⃣ Export Context (VERY IMPORTANT)
export default Appdata;
