import React from "react"
import Image from "next/image"
import imgSectionEdukasi from "@/../public/assets/sectionHome.svg"
import imgSectionEdukasi2 from "@/../public/assets/sectionEdukasi2.svg"
import "./edukasi.css"

const SectionEdukasi = () => {
  return (
    <div className="seection_edukasi">
      <div className="sectionEdukasi1">
        <div className="sectionEdukasi1_img">
          <Image
            src={imgSectionEdukasi}
            alt="img section home"
            width={0}
            height={0}
          />
        </div>
        <div className="sectionEdukasi1_desc">
          <p>
            Mari Berkenalan dengan <span>“Mental Health”</span>
          </p>
          <p>Hai, Sobat Psiko</p>
          <p>
            Kesehatan mental adalah komponen penting dalam kesejahteraan
            individu. Ini mencakup kondisi emosional, psikologis, dan sosial
            seseorang, yang memengaruhi cara mereka merasa, berpikir, dan
            berinteraksi dengan dunia sekitar. Mempertahankan kesehatan mental
            yang baik memiliki dampak positif pada produktivitas, hubungan, dan
            kualitas hidup secara keseluruhan.
          </p>
          <p>
            Penting untuk mengakui bahwa gangguan mental adalah hal yang umum
            dan dapat memengaruhi siapa saja. Oleh karena itu, mendukung dan
            merawat kesehatan mental adalah langkah penting dalam menjaga
            kesejahteraan diri dan orang lain di sekitar kita.
          </p>
        </div>
      </div>

      <div className="sectionEdukasi2">
        <div className="sectionEdukasi2_desc">
          <p>
            Edukasi <span> Mental Health</span> bersama <span>PsikoCare</span>
          </p>
          <p>
            Kesehatan mental adalah komponen penting dalam kesejahteraan
            individu. Ini mencakup kondisi emosional, psikologis, dan sosial
            seseorang, yang memengaruhi cara mereka merasa, berpikir, dan
            berinteraksi dengan dunia sekitar. Mempertahankan kesehatan mental
            yang baik memiliki dampak positif pada produktivitas, hubungan, dan
            kualitas hidup secara keseluruhan.
          </p>
          <p>
            Penting untuk mengakui bahwa gangguan mental adalah hal yang umum
            dan dapat memengaruhi siapa saja. Oleh karena itu, mendukung dan
            merawat kesehatan mental adalah langkah penting dalam menjaga
            kesejahteraan diri dan orang lain di sekitar kita.
          </p>
        </div>
        <div className="sectionEdukasi2_img">
          <Image
            src={imgSectionEdukasi2}
            alt="img section home"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionEdukasi
