import React from 'react'
import Legal from '../Images/Legal.png'

function CompaniLegality() {
  return (
    <div className="px-[11%] py-[1.5%] mt-[3%]">
      <div className="flex items-center justify-end mb-[2rem]">
        <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">LEGALITAS PERUSAHAAN</p>
        <div className="bg-[#EAB200] ml-4 w-[0.2vw] h-[4vh]"></div>
      </div>
      <div className="grid grid-cols-2 items-center gap-x-[10%] mt-[4%]">
        <div className="border-2 border-[#EAB200] rounded p-3">
          <img src={Legal} className="rounded" alt="" />
        </div>
        <div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">Notary</p>
          </div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">SK.Menkunham No. AHU-0096844.AH.01.11</p>
          </div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">SIUP 1954/M.04.01/BPTPM/X/2016</p>
          </div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">NPWP 80.301.434.9-211.000</p>
          </div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">APERSI 15.18.0236</p>
          </div>
          <div className="flex items-start">
            <li></li>
            <p className="text-[18px]">TDP 04.01.1.46.11483</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompaniLegality
