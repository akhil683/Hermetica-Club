import { createContext, useState } from "react";

export const ClubContext = createContext();
 

const ClubProvider = ({ children }) => {
  const [ data, setData ] = useState({});

  const value = {
    data, 
    setData
  }
  return (
    <ClubContext.Provider value={value}>
      {children}
    </ClubContext.Provider>
  )
}
export default ClubProvider;