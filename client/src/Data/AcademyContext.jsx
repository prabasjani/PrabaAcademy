import React, { createContext, useState } from "react"

export const AppContext = createContext(null)
const AcademyContextProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(true)

  const contextValues = {
    isAuthenticate,
    setIsAuthenticate,
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export default AcademyContextProvider
