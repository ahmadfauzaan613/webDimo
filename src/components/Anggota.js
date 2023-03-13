import React from 'react'
import Josep from '../Images/josep.jpg'
import Fade from 'react-reveal/Fade'
function Anggota() {
  return (
    <Fade>
      <div id="anggota" className="px-[11%] py-[1.5%] mt-[3%]">
        <div className="flex items-center mb-[2rem]">
          <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh]"></div>
          <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">Struktur Organisasi</p>
        </div>
        <div className="grid grid-cols-5 gap-x-5">
          <div className="bg-[#031E33] rounded p-[20px]">
            <img src={Josep} className="mb-[20px] rounded" alt="" />
            <p className="text-white text-[20px] font-bold">Nama</p>
            <p className="text-white text-[18px] ">Commisioner</p>
          </div>
          <div className="bg-[#031E33] rounded p-[20px]">
            <img src={Josep} className="mb-[20px] rounded" alt="" />
            <p className="text-white text-[20px] font-bold">Nama</p>
            <p className="text-white text-[18px] ">Director</p>
          </div>
          <div className="bg-[#031E33] rounded p-[20px]">
            <img src={Josep} className="mb-[20px] rounded" alt="" />
            <p className="text-white text-[20px] font-bold">Nama</p>
            <p className="text-white text-[18px]">Project Manager</p>
          </div>
          <div className="bg-[#031E33] rounded p-[20px]">
            <img src={Josep} className="mb-[20px] rounded" alt="" />
            <p className="text-white text-[20px] font-bold">Nama</p>
            <p className="text-white text-[18px]">Administration & Marketing</p>
          </div>
          <div className="bg-[#031E33] rounded p-[20px]">
            <img src={Josep} className="mb-[20px] rounded" alt="" />
            <p className="text-white text-[20px] font-bold">Nama</p>
            <p className="text-white text-[18px]">Site Supervisor</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Anggota
