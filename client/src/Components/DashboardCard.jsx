import React from "react"

const DashboardCard = ({ icon, title, count, mainColor, bgColor }) => {
  return (
    <div
      className={`p-5 ${bgColor} rounded-xl grid grid-cols-2 items-center gap-6`}
    >
      <div className="">
        <h1 className="text-3xl text-zinc-800 font-semibold">{count}</h1>
        <p className="text-zinc-600 tracking-wide">{title}</p>
      </div>
      <div className={`${mainColor} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  )
}

export default DashboardCard
