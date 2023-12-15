import Image from "next/image"
import "./wraperHome.css"
import wraperHome from "@/../public/assets/wraper_home.svg"

const WrapperHome = () => {
  return (
    <div className="wraperHome">
      <div className="wraperHome_desc">
        <p>Your Partner in Health and Wellness</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="wraperHome_img">
        <Image src={wraperHome} alt="wraper home" width={0} height={0} />
      </div>
    </div>
  )
}

export default WrapperHome
