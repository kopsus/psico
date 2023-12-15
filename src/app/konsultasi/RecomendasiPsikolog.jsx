"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import imgDocter from "@/../public/assets/docter.svg"
import "./konsultasi.css"
import ChatKonsultasi from "./ChatKonsultasi"
import Cookies from "js-cookie"
import Swal from "sweetalert2"

const RecomendasiPsikolog = () => {
  const [openChat, setOpenChat] = useState(false)
  const [user, setUser] = useState("")

  useEffect(() => {
    const role = Cookies.get("role")
    setUser(role)
  }, [])

  const handleOpenChat = () => {
    if (user === "pasien") {
      setOpenChat(!openChat)
    } else {
      Swal.fire({
        title: "Login Dulu Bro",
        icon: "warning",
      })
    }
  }

  return (
    <div className="psikolog">
      <p>Konsultasi online dengan dokter siaga kami</p>
      <div className="psikolog_content">
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>{" "}
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>
        <div className="psikolog_content_item">
          <div className="psikolog_content_item_img">
            <Image src={imgDocter} alt="img docter" width={0} height={0} />
          </div>
          <div className="psikolog_content_item_desc">
            <p>Dr. Alisya Maguare</p>
            <p>Psikiater Ahli</p>
            <div className="psikolog_content_item_desc_place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
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
              <p>Jakarta, Indonesia</p>
            </div>
            <div
              onClick={handleOpenChat}
              className="psikolog_content_item_desc_action"
            >
              <button>Konsultasi</button>
            </div>
          </div>
        </div>
      </div>
      <div className="join mt-10 lg:mt-20 flex justify-center">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
      <ChatKonsultasi openChat={openChat} handleOpenChat={handleOpenChat} />
    </div>
  )
}

export default RecomendasiPsikolog
