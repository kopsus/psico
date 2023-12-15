"use client"

import Navbar from "@/components/Navbar/Navbar"
import WraperKonsultasi from "@/components/Wrapper/WrapperKonsultasi/WraperKonsultasi"
import React from "react"
import RecomendasiPsikolog from "./RecomendasiPsikolog"
import TextKonsultasi from "./TextKonsultasi"
import Footer from "@/components/Footer/Footer"

const page = () => {
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

export default page
