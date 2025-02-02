import React from "react"

const TrendingCourseCard = ({
  bgColor,
  mainColor,
  course,
  banner,
  price,
  enrolled,
}) => {
  return (
    <div
      className={`p-4 ${bgColor} rounded-xl grid grid-cols-3 items-center justify-between`}
    >
      <div className="col-span-2 flex items-center gap-5">
        <img src={banner} alt={course} className="w-26 rounded-md" />
        <div className="place-content-center">
          <h3 className={mainColor}>{course}</h3>
          <p className="text-zinc-600 font-semibold">Price: ₹. {price}</p>
        </div>
      </div>
      <div className="col flex flex-col items-end pr-5">
        <h3 className="text-lg text-zinc-600 font-semibold">
          Enrolled Students: #<span className="text-zinc-800">{enrolled}</span>
        </h3>
        <p className="text-sm text-zinc-600">
          Total Income: ₹.
          <span
            className={`text-zinc-800 ${mainColor} font-semibold tracking-wider`}
          >
            {(enrolled * price)?.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  )
}

export default TrendingCourseCard
