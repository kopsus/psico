"use client"

import React from "react"
import "./formRegister.css"
import Image from "next/image"
import banerRegister from "@/../public/assets/baner_register.svg"

const FormRegister = () => {
  return (
    <div className="register">
      <div className="register_form shadow-md">
        <p className="register_form_title">Register</p>
        <p>Pengguna baru, Silahkan mendaftar untuk mengakses forum PsikoCare</p>
        <form>
          <select className="select select-bordered w-full ">
            <option disabled selected>
              Daftar Sebagai ?
            </option>
            <option>Dokter</option>
            <option>Pasien</option>
          </select>
          <input
            type="text"
            placeholder="nama"
            className="input  input-bordered w-full"
          />
          <input
            type="email"
            placeholder="email"
            className="input  input-bordered w-full"
          />
          <input
            type="password"
            placeholder="password"
            className="input  input-bordered w-full"
          />
          <input
            type="password"
            placeholder="confirm password"
            className="input  input-bordered w-full"
          />
          <input
            type="text"
            placeholder="alamat"
            className="input  input-bordered w-full"
          />
          <div className="flex items-center justify-between section_jk">
            <p>Jenis Kelamin</p>
            <div className="flex items-center gap-3">
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

          <div className="flex items-center justify-between section_ttl">
            <p>Tanggal Lahir</p>
            <div className="flex items-center">
              <select className="border text-sm p-1 cursor-pointer">
                <option disabled selected>
                  Tanggal
                </option>
                <option>1</option>
                <option>2</option>
              </select>
              <select className="border text-sm p-1 cursor-pointer">
                <option disabled selected>
                  Bulan
                </option>
                <option>1</option>
                <option>2</option>
              </select>
              <select className="border text-sm p-1 cursor-pointer">
                <option disabled selected>
                  Tahun
                </option>
                <option>2001</option>
                <option>2002</option>
              </select>
            </div>
          </div>
          <button type="button" className="btn btn_register">
            Register
          </button>
        </form>
      </div>
      <div className="register_img">
        <Image src={banerRegister} alt="" width={0} height={0} />
      </div>
    </div>
  )
}

export default FormRegister
