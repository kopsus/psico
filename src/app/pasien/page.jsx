import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import TableRiwayatUser from "@/components/Table/TableRiwayatUser/TableRiwayatUser"
import WraperProfil from "@/components/Wrapper/WrapperProfil/WraperProfil"
import React from "react"

const page = () => {
  return (
    <>
      <Navbar />
      <WraperProfil />
      <TableRiwayatUser />
      <Footer />
    </>
  )
}

export default page
