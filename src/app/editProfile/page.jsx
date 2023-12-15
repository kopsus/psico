import Footer from "@/components/Footer/Footer"
import EditProfile from "@/components/Form/EditProfile/EditProfile"
import Navbar from "@/components/Navbar/Navbar"
import React from "react"

const page = () => {
  return (
    <>
      <Navbar />
      <EditProfile />
      <Footer />
    </>
  )
}

export default page
