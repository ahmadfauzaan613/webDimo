import React from 'react'
import { Fade } from 'react-reveal'
import Rumah from '../Images/IMG-8172.JPG'
import Land from '../Images/Land3.png'

function Penawaran() {
  return (
    <Fade>
      <div id="penawaran" className="px-[11%] py-[1.5%] mt-[1.5%] mb-[4%]">
        <div className="flex items-center mb-[2rem]">
          <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh]"></div>
          <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">Penawaran</p>
        </div>
        <div className="grid grid-cols-2 gap-x-[5%]">
          <div className="bg-white rounded shadow p-4">
            <img src={Rumah} className="rounded mb-3" alt="" />
            <div>
              <p className="pb-[2%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem tempora</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem tempora, qui dolorem cupiditate eligendi. Dolor et recusandae nam corrupti nulla quisquam sequi repudiandae reiciendis, asperiores deserunt repellat molestias dolorum.</p>
              <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#EAB200] font-bold p-2 mt-[3%] rounded text-white">Hubungi Admin</button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded shadow p-4">
            <img src={Land} className="rounded mb-3" alt="" />
            <div>
              <p className="pb-[2%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem tempora</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex rem tempora, qui dolorem cupiditate eligendi. Dolor et recusandae nam corrupti nulla quisquam sequi repudiandae reiciendis, asperiores deserunt repellat molestias dolorum.</p>
              <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#EAB200] font-bold p-2 mt-[3%] rounded text-white">Hubungi Admin</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Penawaran
