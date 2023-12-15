"use client"

import React, { useState } from "react"
import "./konsultasi.css"
import Image from "next/image"
import docter from "@/../public/assets/docter.svg"
import ChatKonsultasiDokter from "./ChatKonsultasiDokter"

export const Konsultasi = () => {
  const [openChat, setOpenChat] = useState(false)

  const handleOpenChat = () => {
    setOpenChat(!openChat)
  }

  return (
    <div className="konsultasi">
      <p>Chat</p>
      <div className="konsultasi_search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input type="search" placeholder="search or start a new chat" />
      </div>
      <div className="konsultasi_content">
        <div className="konsultasi_content_left">
          <div
            className="konsultasi_content_left_user"
            onClick={handleOpenChat}
          >
            <div className="konsultasi_content_left_user_img">
              <Image src={docter} alt="" width={0} height={0} />
            </div>
            <div className="konsultasi_content_left_user_desc">
              <p>Dr.Jhone Cena</p>
              <p>Psikiater ahli</p>
            </div>
          </div>
          <div
            className="konsultasi_content_left_user"
            onClick={handleOpenChat}
          >
            <div className="konsultasi_content_left_user_img">
              <Image src={docter} alt="" width={0} height={0} />
            </div>
            <div className="konsultasi_content_left_user_desc">
              <p>Dr.Jhone Cena</p>
              <p>Psikiater ahli</p>
            </div>
          </div>
        </div>
        <div className="konsultasi_content_right">
          <ChatKonsultasiDokter openChat={openChat} />
        </div>
      </div>
    </div>
  )
}
