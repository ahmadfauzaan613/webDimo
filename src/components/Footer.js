import React from 'react'
import Logo from '../Images/Logo.png'

function Footer() {
  return (
    <div className="px-[10%] py-[1.3%] bg-[#031E33]">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="" className="w-[3vw]" />
        <div>
          <p className="text-white font-bold">PT Telaga Selat Samudra</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
