import React, { useState } from "react"
import { MdAlternateEmail } from "react-icons/md"
import { TbLockPassword } from "react-icons/tb"
import { RiEyeCloseFill } from "react-icons/ri"
import { FaRegEye } from "react-icons/fa"
import { FaUnlockKeyhole } from "react-icons/fa6"
import { MdLogin } from "react-icons/md"
import { Link } from "react-router-dom"

const Login = () => {
  const [showPwd, setShowPwd] = useState(false)
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center justify-center gap-10 h-screen">
        <div className="col">
          <h1 className="text-3xl font-bold">
            Welcome Back to <span className="text-zinc-800">PrabaAcademy</span>
          </h1>
          <h2 className="text-xl font-semibold my-3">
            Continue Your Journey Toward Becoming a Software Development Expert!
          </h2>

          <p className="text-sm text-zinc-600 leading-6 tracking-wider">
            Login to access your courses, view your progress, and explore new
            opportunities in the world of Software Development
          </p>

          <div className="mt-3">
            <h2 className="text-xl font-bold mb-2 uppercase">Why Login?</h2>
            <ul className="text-sm text-zinc-600 list-disc px-5">
              <li className="mb-2">
                <b className="text-zinc-800">Access your Dashboard: </b>Stay on
                top of your learning journey with a personalized dashboard.
              </li>
              <li className="mb-2">
                <b className="text-zinc-800">Resume your Courses: </b>Pick up
                right where you left off.
              </li>
              <li className="mb-2">
                <b className="text-zinc-800">Build Your Portfolio: </b>Access
                tools and resources to showcase your work
              </li>
              <li className="mb-2">
                <b className="text-zinc-800">Earn Certificates: </b>Track your
                achievements and download your course completing certificates.
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-10 rounded-3xl bg-white drop-shadow-xl">
          <h2 className="mb-4">Login Here...</h2>
          <form className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-zinc-600 font-semibold">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Please Enter your Email Address..."
                  className="px-12 py-2 tracking-wider focus:outline-zinc-400/50 rounded-lg w-full bg-white drop-shadow-lg text-zinc-800"
                />
                <div className="absolute top-[10px] left-3 text-zinc-600">
                  <MdAlternateEmail size={20} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-zinc-600 font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  placeholder="Please Enter your Password..."
                  className="px-12 py-2 tracking-wider focus:outline-zinc-400/50 rounded-lg w-full bg-white drop-shadow-lg text-zinc-800"
                />
                <div className="absolute top-[10px] left-3 text-zinc-600">
                  <TbLockPassword size={20} />
                </div>
                <div
                  className="absolute top-[10px] right-5 text-zinc-600 cursor-pointer"
                  onClick={() => setShowPwd((prev) => !prev)}
                >
                  {showPwd ? (
                    <FaRegEye size={20} />
                  ) : (
                    <RiEyeCloseFill size={20} />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <FaUnlockKeyhole size={12} />
              <Link className="text-[12px] text-blue-500 underline">
                Forget Password
              </Link>
            </div>

            <button type="submit" className="btn bg-blue-500 hover:bg-blue-600">
              Login
            </button>

            <p className="text-sm text-zinc-700 font-medium tracking-wide">
              If you don't have an Account Please{" "}
              <Link className="text-blue-500 underline">Register here...</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
