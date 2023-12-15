import React, { useState } from "react"
import Image from "next/image"
import "./liveChat.css"
import iconChat from "@/../public/assets/chat.svg"
import docter from "@/../public/assets/docter.svg"

const LiveChat = () => {
  const [openChat, setOpenChat] = useState(false)

  return (
    <>
      <div className="liveChat_icon" onClick={() => setOpenChat(!openChat)}>
        <Image src={iconChat} alt="icon Chat" width={0} height={0} />
      </div>

      <div className={`live_chat_content ${openChat ? "active" : ""}`}>
        <div className="live_chat_content_action">
          <p>Chat</p>
          <svg
            onClick={() => setOpenChat(!openChat)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="live_chat_content_user">
          <div className="live_chat_content_user_img">
            <Image src={docter} alt="icon Chat" width={0} height={0} />
          </div>
          <div className="live_chat_content_user_desc">
            <p>Dr. Jhon Cena</p>
            <p>Psikiater ahli</p>
          </div>
        </div>
        <div className="live_chat_content_user">
          <div className="live_chat_content_user_img">
            <Image src={docter} alt="icon Chat" width={0} height={0} />
          </div>
          <div className="live_chat_content_user_desc">
            <p>Dr. Jhon Cena</p>
            <p>Psikiater ahli</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveChat
