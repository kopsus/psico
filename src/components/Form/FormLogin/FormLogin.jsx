import React from "react"
import "./formLogin.css"
import Image from "next/image"
import logo from "@/../public/assets/logo.svg"
import iconGoogle from "@/../public/assets/icon_google.svg"

const FormLogin = ({ openFormLogin, handleLogin }) => {
  return (
    <div className="login">
      <input type="checkbox" id={openFormLogin} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label
            htmlFor={openFormLogin}
            className="absolute top-5 right-5 cursor-pointer"
          >
            x
          </label>
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            className="img_logo"
          />
          <p className="text-center">
            We’ll sign you in or create a new account if you don’t have one yet
          </p>
          <form>
            <div className="login_google">
              <Image src={iconGoogle} alt="" width={0} height={0} />
              <p>Continue with google</p>
            </div>
            <p className="text-center">or</p>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full shadow-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full shadow-md "
            />
            <label
              htmlFor={openFormLogin}
              type="btn"
              onClick={handleLogin}
              className="btn my-3 shadow-md bg-[#23435C] hover:bg-[#1b3346] text-white border-none"
            >
              Masuk
            </label>
            <p className="text-sm">
              Belum Punya Akun?{" "}
              <label
                className="font-bold cursor-pointer"
                htmlFor={openFormLogin}
              >
                <a href="/register">Daftar</a>
              </label>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormLogin
