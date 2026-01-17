import React, { createContext } from "react";

// 1️⃣ Create Context
const Appdata = createContext();

// 2️⃣ Create Provider
export const DataProvider = ({ children }) => {

  const mensData = [
  {
    id: 1,
    Image: "/Images/mens/mensTshirt.webp",
    Name: "Oversize T-Shirt",
    price: 499,
  },
  {
    id: 2,
    Image: "/Images/mens/menspant.webp",
    Name: "Pant",
    price: 799,
  },
  {
    id: 3,
    Image: "/Images/mens/mens-Shirt.webp",
    Name: "Shirt",
    price: 899,
  },
  {
    id: 4,
    Image: "/Images/mens/Hpagemen1.webp",
    Name: "Pant",
    price: 999,
  },
  {
    id: 5,
    Image: "/Images/mens/shoes.webp",
    Name: "Shoes",
    price: 999,
  },
  {
    id: 6,
    Image: "/Images/mens/Shorts.webp",
    Name: "Shorts",
    price: 999,
  },
  {
    id: 7,
    Image: "/Images/mens/t-sh1.webp",
    Name: "T-Shirt",
    price: 999,
  },
  {
    id: 8,
    Image: "/Images/mens/sh1.webp",
    Name: "Shirt",
    price: 999,
  },
];


  const WomensData = [
  { id: 9, Image: "/Images/womenspagePic/saadi1.webp", Name: "Saadi", price: 999 },
  { id: 10, Image: "/Images/womenspagePic/saadi2.webp", Name: "Saadi", price: 999 },
  { id: 11, Image: "/Images/womenspagePic/saadi3.webp", Name: "Saadi", price: 999 },
  { id: 12, Image: "/Images/womenspagePic/saadi4.webp", Name: "Saadi", price: 999 },
  { id: 13, Image: "/Images/womenspagePic/saadi5.webp", Name: "Saadi", price: 999 },
  { id: 14, Image: "/Images/womenspagePic/saadi6.webp", Name: "Saadi", price: 999 },
  { id: 15, Image: "/Images/womenspagePic/saadi7.webp", Name: "Saadi", price: 999 },
  { id: 16, Image: "/Images/womenspagePic/saadi8.webp", Name: "Saadi", price: 999 },
  { id: 17, Image: "/Images/womenspagePic/saadi9.webp", Name: "Saadi", price: 999 },
  { id: 18, Image: "/Images/womenspagePic/saadi10.webp", Name: "Saadi", price: 999 },
];


  const kidsdata = [
  { id: 19, Image: "/Images/kids/kid1.webp", Name: "shirt pant combo ", price: 799 },
  { id: 20, Image: "/Images/kids/kid2.webp", Name: "shirt pant combo ", price: 799 },
  { id: 21, Image: "/Images/kids/kid3.webp", Name: "shirt pant combo ", price: 799 },
  { id: 22, Image: "/Images/kids/kid4.webp", Name: "shirt pant combo ", price: 799 },
  { id: 23, Image: "/Images/kids/kid5.webp", Name: "shirt pant combo ", price: 799 },
  { id: 24, Image: "/Images/kids/kid6.webp", Name: "shirt pant combo ", price: 799 },
  { id: 25, Image: "/Images/kids/kid7.webp", Name: "shirt pant combo ", price: 799 },
  { id: 26, Image: "/Images/kids/kid8.webp", Name: "shirt pant combo ", price: 799 },
];


  const beauty = [
  { id: 27, Image: "/beauty/b1.webp", Name: "face Cream", price: 1799 },
  { id: 28, Image: "/beauty/b2.webp", Name: "face Cream", price: 1799 },
  { id: 29, Image: "/beauty/b3.webp", Name: "face Cream", price: 1799 },
  { id: 30, Image: "/beauty/b4.webp", Name: "face Cream", price: 1799 },
  { id: 31, Image: "/beauty/b5.webp", Name: "face Cream", price: 1799 },
  { id: 32, Image: "/beauty/b6.webp", Name: "face Cream", price: 1799 },
  { id: 33, Image: "/beauty/b7.webp", Name: "face Cream", price: 1799 },
  { id: 34, Image: "/beauty/b8.webp", Name: "face Cream", price: 1799 },
];


  const studio = [
  { id: 35, Image: "/Studio/st1.webp", Name: " electronics", price: 1799 },
  { id: 36, Image: "/Studio/st2.webp", Name: " electronics", price: 1799 },
  { id: 37, Image: "/Studio/st3.webp", Name: " electronics", price: 1799 },
  { id: 38, Image: "/Studio/st4.webp", Name: " electronics", price: 1799 },
  { id: 39, Image: "/Studio/st5.webp", Name: " electronics", price: 1799 },
  { id: 40, Image: "/Studio/st6.webp", Name: " electronics", price: 1799 },
  { id: 41, Image: "/Studio/st7.webp", Name: " electronics", price: 1799 },
  { id: 42, Image: "/Studio/st8.webp", Name: " electronics", price: 1799 },
];


  return (
    <Appdata.Provider value={{ mensData, WomensData ,kidsdata ,beauty ,studio }}>
      {children}
    </Appdata.Provider>
  );
}

// 3️ Export Context
export default Appdata;