import React from "react"
import { notifications } from "../../Data/notifications"

import MaleLogo from "../../assets/male.png"
import FemaleLogo from "../../assets/female.png"

const Notifications = () => {
  return (
    <div className="p-10 my-10">
      {notifications.map((notification, i) => {
        return (
          <div
            className={`p-5 w-3/4 mb-4 rounded-lg drop-shadow-md border border-green-300 hover:scale-105 transition-all ease-in-out ${
              notification.role == "student"
                ? "float-left bg-green-100/50"
                : "float-right bg-blue-100/50"
            }`}
            key={i}
          >
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-1 flex flex-col items-center justify-start gap-2">
                <img
                  src={notification.gender == "male" ? MaleLogo : FemaleLogo}
                  alt={notification.name}
                  className={`w-14 rounded-full p-2 bg-white `}
                />
                <p className="text-[10px] text-zinc-500">11:20 am</p>
              </div>

              <div className={`col-span-11`}>
                <div className="">
                  <h3 className="!text-zinc-800">
                    {notification.name?.toUpperCase()}
                  </h3>
                  <p className="text-zinc-500 text-[12px]">
                    {notification.email}
                  </p>
                </div>
                <p className="text-zinc-600 leading-7 tracking-wider">
                  {notification.message}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Notifications
