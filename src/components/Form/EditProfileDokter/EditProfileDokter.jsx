import React from "react"
import "./editProfileDokter.css"
import docter from "@/../public/assets/docter.svg"
import Image from "next/image"

const EditProfileDokter = () => {
  return (
    <form className="ediDokter">
      <div className="ediDokter_img">
        <Image src={docter} alt="docter" width={0} height={0} />
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="form_item">
          <label>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Tegar Setio"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form_item">
          <label>Alamat</label>
          <input
            type="text"
            placeholder="Jl. jalan"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form_item">
          <label>Email</label>
          <input
            type="text"
            placeholder="email@gmail.com"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form_item_select">
          <p>Tanggal Lahir</p>
          <div className="form_item_select_content flex gap-2">
            <select className="select select-bordered">
              <option>01</option>
              <option>02</option>
            </select>
            <select className="select select-bordered">
              <option>January</option>
              <option>February</option>
            </select>
            <select className="select select-bordered">
              <option>2001</option>
              <option>2002</option>
            </select>
          </div>
        </div>
        <div className="form_item_select">
          <p>Jenis Kelamin</p>
          <div className="form_item_select_content flex items-center gap-10">
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
        <button className="btn_edit">Simpan</button>
      </div>
    </form>
  )
}

export default EditProfileDokter
