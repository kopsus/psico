"use client"

import WrapperHome from "@/components/Wrapper/WrapperHome/WrapperHome"
import SectionHome from "./SectionHome"
import Edukasi from "@/components/Carousel/CarouselEdukasi"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import { useEffect, useState } from "react"
import SideBar from "@/components/Docter/SideBar/SideBar"
import Dashboard from "@/components/Docter/Dashboard/Dashboard"
import Loading from "./loading"
import Cookies from "js-cookie"

export default function Home() {
  const [userLogin, setUserLogin] = useState("")

  useEffect(() => {
    const roleLogin = Cookies.get("role")
    setUserLogin(roleLogin)
  }, [])

  if (userLogin === "") {
    return <Loading />
  }

  if (userLogin === "dokter") {
    return (
      <>
        <SideBar />
        <Dashboard />
      </>
    )
  } else {
    return (
      <>
        <Navbar />
        <WrapperHome />
        <SectionHome />
        <Edukasi />
        <Footer />
      </>
    )
  }
}
