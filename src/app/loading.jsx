import React from "react"

const Loading = () => {
  return (
    <div className="flex gap-5 h-screen w-full justify-center items-center">
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  )
}

export default Loading
