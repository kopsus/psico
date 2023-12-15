import React from "react"
import Image from "next/image"
import imgNotFound from "@/../public/assets/not-found.svg"

const NotFound = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="overflow-hidden w-full md:w-[80%] md:mx-auto xl:w-[40%]">
          <Image src={imgNotFound} alt="not found" width={0} height={0} />
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl">Page Not found</p>
          <p className="">
            The resource requested could not be found on this server!
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFound
