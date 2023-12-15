"use client"

import React, { useEffect, useState } from "react"
import SideBar from "@/components/Docter/SideBar/SideBar"
import TableDataPasien from "@/components/Table/TableDataPasien/TableDataPasien"
import Cookies from "js-cookie"
import NotFound from "@/app/not-found"
import Loading from "@/app/loading"

const DataPasien = () => {
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
        <TableDataPasien />
      </>
    )
  } else {
    return <NotFound />
  }
}

export default DataPasien
