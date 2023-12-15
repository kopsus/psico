import React from "react"
import Image from "next/image"
import docter from "@/../public/assets/docter.svg"
import "./wraperProfil.css"
import Link from "next/link"

const WraperProfil = () => {
  return (
    <div className="wraperProfil">
      <div className="wraperProfil_user">
        <div className="wraperProfil_user_img">
          <Image src={docter} alt="docter" width={0} height={0} />
        </div>
        <div className="wraperProfil_user_desc">
          <div className="wraperProfil_user_desc_user">
            <p>Tegar Setio</p>
            <p>email@gmail.com</p>
          </div>
          <div className="wraperProfil_user_desc_place">
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
      <div className="wraperProfil_user_action">
        <Link href={"editProfile"} className="btn">
          Edit Profile
        </Link>
        <button className="btn">Delete Account</button>
      </div>
    </div>
  )
}

export default WraperProfil
