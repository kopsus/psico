import React from "react"
import Image from "next/image"

// css
import "./dashboard.css"

// assets
import iconKonsultasi from "@/../public/assets/icon_konsultasi.svg"
import { GoDatabase } from "react-icons/go"
// import { GoHistory } from "react-icons/go"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <p>Dashboard</p>
      <p>
        Hallo <span className="text-[#066283]"> Dr John Cena</span> , Selamat
        datang diforum <span className="text-[#066283]">PsikoCare</span>
        {""} Berinteraksi dengan nyaman demi kesehatan mental yang baik
      </p>
      <div className="dashboard_content">
        <div className="dashboard_content_item">
          <p>Total Konsultasi</p>
          <p>01</p>
          <div className="dashboard_content_item_konsultasi">
            <Image
              src={iconKonsultasi}
              alt="icon konsultasi"
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="dashboard_content_item">
          <p>Total Data Pasien</p>
          <p>01</p>
          <div className="dashboard_content_item_dataPasien">
            <GoDatabase size={70} color="black" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
