import React from 'react'
import Fade from 'react-reveal/Fade'
import Pone from '../Images/phone-call.png'
import Email from '../Images/email.png'
import Location from '../Images/location-pin.png'
function Contacs() {
  return (
    <Fade>
      <div id="contacs" className="mt-[3%]">
        <div className="grid grid-cols-2 h-[50vh]">
          <div className="bg-[#EAB200]">
            <p className="text-[38px] text-center pt-[2%] font-Quicksand font-bold text-white">Contact Us</p>
            <p className="px-[11%] pt-[2%] text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea ex totam, possimus rem ad magnam sit, quaerat recusandae aut reiciendis reprehenderit accusantium? Odit quam ipsa tempora modi quis eum.</p>
            <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
              <div className="px-[11%] pt-[3%] flex items-center gap-x-[3%]">
                <img src={Pone} className="w-[24px]" alt="" />
                <p className="text-white text-[20px]">0813 7101 7363</p>
              </div>
            </a>
            <a href="mailto:telagass7@gmail.com" target="_blank" rel="noopener noreferrer">
              <div className="px-[11%] pt-[3%] flex items-center gap-x-[3%]">
                <img src={Email} className="w-[24px]" alt="" />
                <p className="text-white text-[20px]">telagass7@gmail.com</p>
              </div>
            </a>
            <a href="https://goo.gl/maps/BwxeQDE7ENKhfLm58" target="_blank" rel="noopener noreferrer">
              <div className="px-[11%] pt-[3%] flex items-center gap-x-[3%]">
                <img src={Location} className="w-[24px]" alt="" />
                <p className="text-white text-[20px]">Jl. Patria Sari IV, Umbansari, Rumbai Pekanbaru, Riau</p>
              </div>
            </a>
          </div>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.616966284393!2d101.41965881531496!3d0.575629563732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab6919a570b1%3A0x3bf751a98117c3e5!2sPT.%20Telaga%20Selat%20Samudera!5e0!3m2!1sen!2sid!4v1678705803464!5m2!1sen!2sid"
            width="600"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Fade>
  )
}

export default Contacs
