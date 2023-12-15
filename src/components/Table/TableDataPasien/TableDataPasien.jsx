import React from "react"
import "./tableDataPasien.css"
import Image from "next/image"
import docter from "@/../public/assets/docter.svg"
import { MdDelete } from "react-icons/md"

const TableDataPasien = () => {
  return (
    <div className="dataPasien">
      <div className="dataPasien_title">
        <p>TableDataPasien</p>
        <div className="dataPasien_search">
          <input type="search" placeholder="search pasien" />
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
        </div>
      </div>

      <div className="tableDataPasien overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Profile</th>
              <th>Nama Pasien</th>
              <th>Umur</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="w-9 h-9 bg-slate-400 rounded-full mx-auto overflow-hidden">
                  <Image src={docter} alt="docter" width={0} height={0} />
                </div>
              </td>
              <td>Tegar</td>
              <td>22tahun</td>
              <td>tegarsetio02@gmail.com</td>
              <td>
                <div className="flex justify-center cursor-pointer">
                  <MdDelete color="red" size={25} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableDataPasien
