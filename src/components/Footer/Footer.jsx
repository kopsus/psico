import React from "react"
import "./footer.css"
import Image from "next/image"

// assets
import logo from "@/../public/assets/logo.svg"
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoWhatsapp } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <Image src={logo} alt="logo" width={0} height={0} />
      </div>
      <div className="footer_content">
        <div className="footer_content_left">
          <p>Tentang Kami</p>
          <p>
            Situs kami adalah sumber informasi kesehatan yang dipercayai dan
            tempat Anda dapat langsung berkonsultasi dengan psikolog berlisensi.
            Kami hadir untuk membantu Anda dalam perjalanan kesehatan mental
            Anda, memberikan pengetahuan dan akses langsung untuk mendapatkan
            dukungan dari para profesional kami.{" "}
          </p>
        </div>
        <div className="footer_content_mid">
          <p>Layanan Pengaduan Konsumen</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer_content_right">
          <div className="footer_content_right_link">
            <p>Link Terkait</p>
            <p>Edukasi</p>
            <p>Psikologi</p>
            <p>Konsultasi kesehatan mental</p>
          </div>
          <div className="footer_content_right_sosmed">
            <p>Contact</p>
            <div className="footer_content_right_sosmed_icon">
              <FaFacebook size={25} />
              <FaSquareXTwitter size={25} />
              <AiFillInstagram size={25} />
              <IoLogoWhatsapp size={25} />
            </div>
          </div>
        </div>
      </div>
      <p className="copyRight">Copyright © 2023 PsikoHeatlh</p>
    </div>
  )
}

export default Footer
