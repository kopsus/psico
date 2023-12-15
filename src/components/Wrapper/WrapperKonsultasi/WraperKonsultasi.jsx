import React from "react"
import "./wraperKonsultasi.css"
import Image from "next/image"
import wraperImg from "@/../public/assets/wraper_konsultasi.svg"

const WraperKonsultasi = () => {
  return (
    <>
      <div className="wraperKonsultasi">
        <div className="wraperKonsultasi_desc">
          <p>Konsultasi dengan Psikolog ahli</p>
          <p>
            Berbincang lebih dekat tentang keluhan kepada dokter / psikiater
            ahli dibidangnya
          </p>
        </div>
        <div className="wraperKonsultasi_img">
          <Image src={wraperImg} alt="" width={0} height={0} />
        </div>
      </div>
      <div className="search">
        <input type="search" placeholder="Cari Psikolog" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </>
  )
}

export default WraperKonsultasi
