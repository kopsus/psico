"use client"

import WraperKonsultasi from "@/components/Wrapper/WrapperKonsultasi/WraperKonsultasi"
import React, { useEffect, useState } from "react"
import RecomendasiPsikolog from "./RecomendasiPsikolog"
import TextKonsultasi from "./TextKonsultasi"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"
import Cookies from "js-cookie"
import SideBar from "@/components/Docter/SideBar/SideBar"
import { Konsultasi } from "../../components/Docter/konsultasi/Konsultasi"
import Loading from "../loading"

const PageKonsultasi = () => {
  const [userLogin, setUserLogin] = useState("")

  useEffect(() => {
    const roleLogin = Cookies.get("role")
    setUserLogin(roleLogin)
  }, [])

  if (userLogin === "") {
    // Menampilkan tampilan loading atau placeholder
    return <Loading />
  }

  if (userLogin === "dokter") {
    return (
      <>
        <SideBar />
        <Konsultasi />
      </>
    )
  } else {
    return (
      <>
        <Navbar />
        <WraperKonsultasi />
        <RecomendasiPsikolog />
        <TextKonsultasi />
        <Footer />
      </>
    )
  }
}

export default PageKonsultasi
