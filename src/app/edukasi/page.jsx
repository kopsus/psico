import WraperEdukasi from "@/components/Wrapper/WrapperEdukasi/WraperEdukasi"
import React from "react"
import SectionEdukasi from "./SectionEdukasi"
import CarouselEdukasi from "@/components/Carousel/CarouselEdukasi"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

const page = () => {
  return (
    <>
      <Navbar />
      <WraperEdukasi />
      <SectionEdukasi />
      <CarouselEdukasi />
      <Footer />
    </>
  )
}

export default page
