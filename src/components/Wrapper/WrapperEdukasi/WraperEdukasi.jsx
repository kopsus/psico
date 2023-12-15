import React from "react"
import "./wraperEdukasi.css"
import Image from "next/image"
import wraperImg from "@/../public/assets/wraper_edukasi.svg"
import logoEdukasi from "@/../public/assets/logo_edukasi.svg"

const WraperEdukasi = () => {
  return (
    <>
      <div className="wraperEdukasi">
        <div className="wraperEdukasi_desc">
          <p>Pengetahuan Kesehatan Mental</p>
          <p>
            Pentingnya pengetahuan kesehatan mental untuk diri sendiri, serta
            lingkungan yang kita tempati
          </p>
        </div>
        <div className="wraperEdukasi_img">
          <Image src={wraperImg} alt="" width={0} height={0} />
        </div>
      </div>
      <div className="slogan">
        <p>Belajar Kesehatan Mental Anda Bersama</p>
        <div className="slogan_img">
          <Image src={logoEdukasi} alt="logo edukasi" width={0} height={0} />
        </div>
      </div>
    </>
  )
}

export default WraperEdukasi
