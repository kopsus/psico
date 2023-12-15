import React from "react"
import docter from "@/../public/assets/docter.svg"
import Image from "next/image"

const ChatKonsultasiDokter = ({ openChat }) => {
  return (
    <>
      {openChat ? (
        <>
          <div className="chatKonsultasi_profile">
            <div className="chatKonsultasi_profile_img">
              <Image src={docter} alt="" width={0} height={0} />
            </div>
            <div className="chatKonsultasi_profile_desc">
              <p>Dr.John Cena</p>
              <p>Psikiater</p>
            </div>
          </div>
          <div className="chatKonsultasi_chat">
            <div className="chatKonsultasi_chat_text">
              <div className="chatKonsultasi_chat_text_you">
                <p>halo bro</p>
              </div>
              <div className="chatKonsultasi_chat_text_me">
                <p>halo dek</p>
              </div>
            </div>
            <div className="chatKonsultasi_chat_input">
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm input-bordered w-full"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <div className="objectChat">
          <p>Klick salah satu user</p>
        </div>
      )}
    </>
  )
}

export default ChatKonsultasiDokter
