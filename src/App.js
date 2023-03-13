import React from 'react'
import Logo from './Images/Logo.png'
import Background1 from './Images/Group 2.png'
import About from './components/About'
import VisiMisi from './components/VisiMisi'
import ServiceandExp from './components/ServiceandExp'
import Portofolio from './components/Portofolio'
import Contacs from './components/Contacs'
import Footer from './components/Footer'
import Slide from './components/Slide'
import Penawaran from './components/Penawaran'
import Anggota from './components/Anggota'

import { Fade } from 'react-reveal'
import Whatsapp from './Images/whatsapp.png'

function App() {
  return (
    <div id="home">
      <div className="px-[10%] py-[1.3%] bg-white">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="" className="w-[3vw]" />
          <div className="flex items-center gap-x-10">
            <a href="#about">
              <p>Tentang Kami</p>
            </a>
            <a href="#servis">
              <p>Bidang Usaha</p>
            </a>
            <a href="#penawaran">
              <p>Penawaran</p>
            </a>
            <a href="#pengalaman">
              <p>Pengalaman</p>
            </a>
            <a href="#anggota">
              <p>Struktur Organisasi</p>
            </a>
            <a href="#portofolio">
              <p>Portofolio</p>
            </a>
            <a href="#contacs">
              <p>Hubungi Kami</p>
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={Background1} alt="" />
        <div className="absolute top-[35%] left-[11%]">
          <p className="text-white font-Roboto text-left font-bold text-[56px]">
            Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.
          </p>
          {/* <button className="text-white outline-none hover:font-bold border mt-[2%] rounded border-white w-[8vw] h-[4.4vh] hover:bg-[#EAB200] hover:border-[#EAB200] hover:text-white">Get Started</button> */}
        </div>
      </div>
      <About />
      <VisiMisi />
      <ServiceandExp />
      <Penawaran />
      <Fade>
        <div id="pengalaman" className="px-[11%] py-[2rem]">
          <div className="flex items-center mb-[3%]">
            <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh]"></div>
            <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">Pengalaman</p>
          </div>
          <Slide />
        </div>
      </Fade>
      <Anggota />
      <Portofolio />
      <Contacs />
      <Footer />
      <div className="absolute bottom-3 right-3">
        <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} className="cursor-pointer" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
