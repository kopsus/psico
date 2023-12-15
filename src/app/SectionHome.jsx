"use client"

import React, { useRef, useState } from "react"

import Image from "next/image"
import imgSectionHome from "@/../public/assets/sectionHome.svg"
import imgCarousel from "@/../public/assets/img_carousel.svg"
import "./page.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"

const SectionHome = () => {
  return (
    <>
      <div className="sectionHome1_title">
        <p>Mari Berkenalan dengan</p>
        <p>“Mental Health”</p>
      </div>
      <div className="sectionHome1">
        <div className="sectionHome1_desc">
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
            kualitas hidup secara keseluruhan. Penting untuk mengakui bahwa
            gangguan mental adalah hal yang umum dan dapat memengaruhi siapa
            saja. Oleh karena itu, mendukung dan merawat kesehatan mental adalah
            langkah penting dalam menjaga kesejahteraan diri dan orang lain di
            sekitar kita.
          </p>
        </div>
        <div className="sectionHome1_img">
          <Image
            src={imgSectionHome}
            alt="img section home"
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="sectionHome2">
        <div className="sectionHome2_desc">
          <p>Mengapa Harus di PsikoCare?</p>
          <div className="sectionHome2_desc_item">
            <div className="sectionHome2_desc_item_img">
              {/* <Image src={logo} alt="logo" width={0} height={0} /> */}
            </div>
            <p>
              Satu aplikasi untuk berbagai kebutuhan - periksa dokter dalam
              permasalahan mental anda
            </p>
          </div>
          <div className="sectionHome2_desc_item">
            <div className="sectionHome2_desc_item_img">
              {/* <Image src={} alt="" width={} height={} /> */}
            </div>
            <p>
              Satu aplikasi untuk berbagai kebutuhan - periksa dokter dalam
              permasalahan mental anda
            </p>
          </div>
          <div className="sectionHome2_desc_item">
            <div className="sectionHome2_desc_item_img">
              {/* <Image src={} alt="" width={} height={} /> */}
            </div>
            <p>
              Satu aplikasi untuk berbagai kebutuhan - periksa dokter dalam
              permasalahan mental anda
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sectionHome2_carousel">
              <div className="sectionHome2_carousel_content">
                <div className="sectionHome2_carousel_content_img">
                  <Image
                    src={imgCarousel}
                    alt="icon docter"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="sectionHome2_carousel_desc">
                <p>
                  Pilih dari ratusan dokter berpengalaman dan chat online
                  sekarang
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sectionHome2_carousel">
              <div className="sectionHome2_carousel_content">
                <div className="sectionHome2_carousel_content_img">
                  <Image
                    src={imgCarousel}
                    alt="icon docter"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="sectionHome2_carousel_desc">
                <p>
                  Pilih dari ratusan dokter berpengalaman dan chat online
                  sekarang
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sectionHome2_carousel">
              <div className="sectionHome2_carousel_content">
                <div className="sectionHome2_carousel_content_img">
                  <Image
                    src={imgCarousel}
                    alt="icon docter"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
              <div className="sectionHome2_carousel_desc">
                <p>
                  Pilih dari ratusan dokter berpengalaman dan chat online
                  sekarang
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default SectionHome
