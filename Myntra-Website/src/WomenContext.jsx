import React, { createContext, useState } from 'react'
export const WomenCon = createContext();

const WomenContext = ({children}) => {

  const [name,setName]=useState('sujal')
    const data ={
        name:name,
        surname:'jadhav',
        addres:'thane 400604 shiv tekdi'
    }

    
  return (
    <WomenCon.Provider value={{data,name,setName}} >
        {children}
    </WomenCon.Provider>
  )
}

export default WomenContext