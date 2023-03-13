import React from 'react'
import Fade from 'react-reveal/Fade'
import Background1 from '../Images/Mask2.png'

function About() {
  return (
    <Fade>
      <div id="about" className="px-[11%] py-[1.5%] mt-[3%]">
        <div className="flex items-center mb-[2rem]">
          <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh]"></div>
          <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">Tentang Kami</p>
        </div>
        <div className="grid grid-cols-2 items-center gap-x-[10%]">
          <div>
            <p className="text-[18px] font-Roboto">
              PT. Telaga Selat Samudra (TSS) secara resmi berdiri pada tahun 2016. Perusahaan kami bergerak di bidang jasa konstruksi, dan developer perumahan. Memasuki masa bakti 6 tahun, perusahaan kami selalu aktif berkarya dan berperan aktif dalam bidang pembangunan. Perusahaan kami memiliki
              pengalaman dan kompetensi, yang didukung dengan sumber daya manusia yang profesional untuk memberikan pelayanan terbaik demi menjamin kepuasan klien kami.
            </p>
          </div>
          <div className="border-2 border-[#EAB200] rounded p-3">
            <img src={Background1} className="rounded" alt="" />
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default About
