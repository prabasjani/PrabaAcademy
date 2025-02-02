import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Protected from "./Components/Protected"
import HomePage from "./Pages/Students/HomePage"
import AdminNavbar from "./Components/AdminNavbar"
import AdminPage from "./Pages/Admin/AdminPage"
import Courses from "./Pages/Admin/Courses"
import Notifications from "./Pages/Admin/Notifications"
import AcademyContextProvider from "./Data/AcademyContext"
const App = () => {
  return (
    <div className="px-20">
      <AcademyContextProvider>
        <Router>
          <AdminNavbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Protected />}>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/" element={<AdminPage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/notification" element={<Notifications />} />
            </Route>
          </Routes>
        </Router>
      </AcademyContextProvider>
    </div>
  )
}

export default App
