"use client"

import Image from "next/image"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// import required modules
import { Autoplay } from "swiper/modules"

// css
import "./carouselEduksai.css"

// assets
import edukasiCarousel from "@/../public/assets/carousel_edukasi.svg"

const CarouselEdukasi = () => {
  return (
    <div className="edukasi">
      <div className="edukasi_title">
        <p>Edukasi</p>
      </div>
      <div className="edukasi_carousel">
        <p>Beragam Edukasi Untuk kita</p>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          breakpoints={{
            1280: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div> */}
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
              {/* </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div> */}
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
              {/* </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div> */}
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
              {/* </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div> */}
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
              {/* </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="edukasi_carousel_content">
              <div className="edukasi_carousel_content_img">
                <Image
                  src={edukasiCarousel}
                  alt="edukasi carousel"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div> */}
              <p>Pentingnya Mental Health</p>
              <p>psikocare.com - 20 Juli 2023</p>
              {/* </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CarouselEdukasi
