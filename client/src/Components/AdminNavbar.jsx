import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MdDashboardCustomize } from "react-icons/md"
import { FaGraduationCap } from "react-icons/fa"
import { MdPostAdd } from "react-icons/md"
import { IoNotifications } from "react-icons/io5"
import { MdLogout } from "react-icons/md"
import { AppContext } from "../Data/AcademyContext"
import { notifications } from "../Data/notifications"

const AdminNavbar = () => {
  const { isAuthenticate, setIsAuthenticate } = useContext(AppContext)
  const notification = true

  const handleLogout = () => {
    setIsAuthenticate(false)
  }

  const notificationCount = notifications.length
  return (
    <>
      {isAuthenticate && (
        <div className="w-full px-10 py-3 bg-white rounded-4xl mt-4 drop-shadow-lg flex items-center justify-between">
          <h2>Praba_Academy</h2>
          <div className="flex items-center gap-10 font-medium tracking-wide text-zinc-500 text-sm">
            <NavLink to="/" className="flex items-center gap-1">
              <MdDashboardCustomize size={18} />
              Dashboard
            </NavLink>

            <NavLink to="/courses" className="flex items-center gap-1">
              <FaGraduationCap size={18} />
              Courses
            </NavLink>

            <NavLink to="/poster" className="flex items-center gap-1">
              <MdPostAdd size={18} />
              Poster
            </NavLink>

            <NavLink
              to="/notification"
              className="flex items-center gap-1 relative"
            >
              {notification && (
                <div className="h-4 w-4 rounded-4xl bg-green-500 absolute -top-1 -right-2 flex items-center justify-center">
                  <span className="text-white text-[12px]">
                    {notificationCount}
                  </span>
                </div>
              )}
              <IoNotifications size={20} />
            </NavLink>

            <button
              onClick={handleLogout}
              className="btn bg-red-500 hover:bg-red-600 text-[12px] !rounded-full flex items-center gap-2"
            >
              Logout <MdLogout />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminNavbar
