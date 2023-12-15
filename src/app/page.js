"use client"

import WrapperHome from "@/components/Wrapper/WrapperHome/WrapperHome"
import SectionHome from "./SectionHome"
import Edukasi from "@/components/Carousel/CarouselEdukasi"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function Home() {
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
