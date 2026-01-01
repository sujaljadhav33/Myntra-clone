import React, { createContext } from 'react'
export const mensPageData =createContext();

const MensData = ({children}) => {
    const mensData=[{num:1},{num:2},{num:3}];
  return (
    <mensPageData.Provider value={mensData}>
        {children}
    </mensPageData.Provider>
  )
}

export default MensData