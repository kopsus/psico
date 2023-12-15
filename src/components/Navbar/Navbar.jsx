"use client"

import "./navbar.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// components
import FormLogin from "../Form/FormLogin/FormLogin"
import ModalUser from "../modal/ModalUser/ModalUser"
import LiveChat from "../LiveChat/LiveChat"

// assets
import docter from "@/../public/assets/docter.svg"
import logo from "@/../public/assets/logo.svg"
import { usePathname } from "next/navigation"
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = () => {
  const pathname = usePathname()
  const [isLogin, setIsLogin] = useState(false)
  const [modalUser, setModalUser] = useState(false)
  const [openHamburger, setOpenHamburger] = useState(false)

  const handleLogin = () => {
    setIsLogin(!isLogin)
  }

  const handleOpenHamburger = () => {
    setOpenHamburger(!openHamburger)
  }

  return (
    <div className="">
      <div className="navbar">
        <div className="navbar_item_hamburger" onClick={handleOpenHamburger}>
          <RxHamburgerMenu size={25} />
        </div>
        <div className="navbar_item">
          <div className="navbar_item_logo">
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>
          <div className={`navbar_item_list ${openHamburger ? "active" : ""}`}>
            <Link className={`${pathname === "/" ? "active" : ""}`} href={"/"}>
              Beranda
            </Link>
            <Link
              className={
                pathname && pathname.startsWith("/edukasi") ? "active" : ""
              }
              href={"/edukasi"}
            >
              Edukasi
            </Link>
            <Link
              className={
                pathname && pathname.startsWith("/konsultasiPasien")
                  ? "active"
                  : ""
              }
              href={"/konsultasiPasien"}
            >
              Konsultasi
            </Link>
          </div>
        </div>
        {isLogin ? (
          <>
            <div
              onClick={() => setModalUser(!modalUser)}
              className="navbar_user cursor-pointer"
            >
              <p>Tegar</p>
              <div className="navbar_user_img">
                <Image src={docter} alt="" width={0} height={0} />
              </div>
            </div>
            <LiveChat />
          </>
        ) : (
          <label htmlFor="openFormLogin" className="navbar_btn">
            Login
          </label>
        )}
      </div>
      <FormLogin openFormLogin="openFormLogin" handleLogin={handleLogin} />
      <div className="user">
        <ModalUser
          modalUser={modalUser}
          setModalUser={setModalUser}
          openFormLogin="openFormLogin"
        />
      </div>
    </div>
  )
}

export default Navbar
