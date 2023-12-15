"use client"

import React from "react"
import "./sideBar.css"
import Image from "next/image"
import Link from "next/link"

// assets
import docter from "@/../public/assets/docter.svg"
import logo from "@/../public/assets/logo_dashboard.svg"
import { MdDashboard } from "react-icons/md"
import { IoLogoWechat } from "react-icons/io5"
import { FaDatabase } from "react-icons/fa"
import { usePathname } from "next/navigation"

const SideBar = () => {
  const pathname = usePathname()

  return (
    <>
      <div className="sideBar">
        <div className="sideBar_logo">
          <Image src={logo} alt="logo" width={0} height={0} />
        </div>
        <div className="sideBar_content">
          <div className="sideBar_content_item">
            <div
              className={`${
                pathname === "/" ? "active" : ""
              } sideBar_content_item_dashboard`}
            >
              <MdDashboard size={24} />
              <Link href={"/"}>Dashboard</Link>
            </div>
            <div
              className={`${
                pathname === "/konsultasiDokter" ? "active" : ""
              } sideBar_content_item_konsultasi`}
            >
              <IoLogoWechat size={24} />
              <Link href={"/konsultasiDokter"}>Konsultasi</Link>
            </div>
            <div
              className={`${
                pathname === "/dataPasien" ? "active" : ""
              } sideBar_content_item_data`}
            >
              <FaDatabase size={24} />
              <Link href={"/dataPasien"}>Data</Link>
            </div>
          </div>
          <Link href={"/dokter"} className="sideBar_content_user">
            <div className="sideBar_content_user_img">
              <Image src={docter} alt="logo" width={0} height={0} />
            </div>
            <p>Dr.John Cena</p>
            <p>Psikolog</p>
          </Link>
        </div>
      </div>
      <div className="navbar_dokter">
        <button className="btn btn-sm">Log out</button>
      </div>
    </>
  )
}

export default SideBar
