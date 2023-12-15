import React from "react"
import "./editProfile.css"
import docter from "@/../public/assets/docter.svg"
import Image from "next/image"

const EditProfile = () => {
  return (
    <div className="editProfile">
      <div className="editProfile_img">
        <Image src={docter} alt="docter" width={0} height={0} />
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>
      <form className="w-[45%] mx-auto my-10 flex flex-col gap-5">
        <div className=" w-full">
          <label>Nama</label>
          <input
            type="text"
            placeholder="nama"
            className="input  input-bordered w-full"
          />
        </div>
        <div className=" w-full">
          <label>Email</label>
          <input
            type="email"
            placeholder="nama"
            className="input  input-bordered w-full"
          />
        </div>
        <div className=" w-full">
          <label>Alamat</label>
          <input
            type="text"
            placeholder="nama"
            className="input  input-bordered w-full"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <p>Tanggal Lahir</p>
          <div className="flex gap-2">
            <select className="select select-bordered w-full">
              <option>01</option>
              <option>02</option>
            </select>
            <select className="select select-bordered w-full">
              <option>January</option>
              <option>February</option>
            </select>
            <select className="select select-bordered w-full">
              <option>2001</option>
              <option>2002</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Jenis Kelamin</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <input type="radio" id="" name="jk" value="Laki - laki" />
              <label>Laki - laki</label>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" id="" name="jk" value="Perempuan" />
              <label>Perempuan</label>
            </div>
          </div>
        </div>
        <button className="btn bg-[#066283] hover:bg-[#1c4553] mt-10 w-1/2 mx-auto text-white">
          Simpan
        </button>
      </form>
    </div>
  )
}

export default EditProfile
