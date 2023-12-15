"use client"

import Loading from "@/app/loading"
import NotFound from "@/app/not-found"
import SideBar from "@/components/Docter/SideBar/SideBar"
import EditProfileDokter from "@/components/Form/EditProfileDokter/EditProfileDokter"
import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"

const EditUser = () => {
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
        <EditProfileDokter />
      </>
    )
  } else {
    return (
      <>
        <NotFound />
      </>
    )
  }
}

export default EditUser
