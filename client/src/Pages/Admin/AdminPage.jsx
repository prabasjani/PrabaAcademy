// Icons
import { FaGraduationCap } from "react-icons/fa"
import { PiStudentBold } from "react-icons/pi"
import { FaChartLine } from "react-icons/fa"
import { RiBarChart2Fill } from "react-icons/ri"
// Files
import TrendingCourseCard from "../../Components/TrendingCourseCard"
import DashboardCard from "../../Components/DashboardCard"
// Assets
import Python from "../../assets/python.png"
import ReactImg from "../../assets/react.png"
import JavaScript from "../../assets/javascript.png"

const AdminPage = () => {
  return (
    <div className="h-screen">
      <div className="px-10 py-5 mt-10 bg-white rounded-2xl">
        <div className="">
          <h2 className="!tracking-wider text-zinc-600">
            Welcome{" "}
            <span className="text-zinc-800 uppercase font-bold">
              Mr.Prabanjan
            </span>
          </h2>
          <div className="flex items-center justify-between gap-8 my-5">
            <DashboardCard
              title="Courses"
              icon={<FaGraduationCap size={60} />}
              count="# 8"
              mainColor="text-fuchsia-500"
              bgColor="bg-fuchsia-100"
            />
            <DashboardCard
              title="Students"
              icon={<PiStudentBold size={60} />}
              count="# 50"
              mainColor="text-orange-500"
              bgColor="bg-orange-100/50"
            />
            <DashboardCard
              title="Feb Income"
              icon={<RiBarChart2Fill size={60} />}
              count="₹.12500"
              mainColor="text-blue-500"
              bgColor="bg-blue-100/50"
            />
            <DashboardCard
              title="Total Income"
              icon={<FaChartLine size={60} />}
              count="₹.50000"
              mainColor="text-green-500"
              bgColor="bg-green-100/50"
            />
          </div>

          <div className="">
            <h2>Trending Courses</h2>
            <div className="flex flex-col gap-4 my-5">
              <TrendingCourseCard
                bgColor="bg-green-100/50"
                mainColor="!text-green-500"
                course="Python Full Course"
                price={2499}
                banner={Python}
                enrolled={12}
              />
              <TrendingCourseCard
                bgColor="bg-cyan-100/50"
                mainColor="!text-cyan-500"
                course="React Full Course"
                price={1999}
                banner={ReactImg}
                enrolled={9}
              />
              <TrendingCourseCard
                bgColor="bg-lime-100/50"
                mainColor="!text-lime-500"
                course="JavaScript Full Course"
                price={1499}
                banner={JavaScript}
                enrolled={7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
