import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AppContext } from "../Data/AcademyContext"

const Protected = () => {
  const { isAuthenticate } = useContext(AppContext)
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />
}

export default Protected
