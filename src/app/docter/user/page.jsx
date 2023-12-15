"use client"

import React, { useEffect, useState } from "react"
import "./user.css"
import Image from "next/image"
import Link from "next/link"

// components
import TableRiwayatDokter from "@/components/Table/TableRiwayatDokter/TableRiwayatDokter"
import SideBar from "@/components/Docter/SideBar/SideBar"

// assets
import docter from "@/../public/assets/docter.svg"
import { CiEdit } from "react-icons/ci"
import Cookies from "js-cookie"
import NotFound from "@/app/not-found"
import Loading from "@/app/loading"

const User = () => {
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
        <div className="userDokter">
          <div className="userDokter_user">
            <div className="userDokter_parent">
              <div className="userDokter_user_img">
                <Image src={docter} alt="" width={0} height={0} />
              </div>
              <div className="userDokter_user_desc">
                <p>Tegar Setio</p>
                <p>email@gmail.com</p>
                <div className="userDokter_user_desc_address">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p>Jl. Perjuangan no. 51 Kab. Bekasi</p>
                </div>
              </div>
            </div>
            <div className="userDokter_user_action">
              <CiEdit color="white" />
              <Link href={"/docter/editUser"}>Edit Profile</Link>
            </div>
          </div>
          <div className="userDokter_riwayat">
            <TableRiwayatDokter />
          </div>
        </div>
      </>
    )
  } else {
    return <NotFound />
  }
}

export default User
