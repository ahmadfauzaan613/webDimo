import React from 'react'
import Logo from './Images/Logo.png'
import Background1 from './Images/Group 2.png'
import About from './components/About'
import VisiMisi from './components/VisiMisi'
import ServiceandExp from './components/ServiceandExp'
import Contacs from './components/Contacs'
import Footer from './components/Footer'
import Penawaran from './components/Penawaran'
import Whatsapp from './Images/whatsapp.png'

function App() {
  return (
    <div>
      <div className="bg-white">
        <div className="phone:relative tablet:relative laptop:relative">
          <div class="px-[10%] phone:px-[7%] tablet:px-[7%] laptop:px-[7%] desktop:px-[3%] desktop2:px-[3%] py-[1.3%] bg-white shadow">
            <div class="flex items-center justify-between  phone:py-[10px] tablet:py-[10px] laptop:py-[10px]">
              <img src={Logo} alt="" class="w-[3vw]  phone:w-[12vw] tablet:w-[10vw] desktop:w-[5vw] desktop2:w-[3vw] laptop:w-[6vw]" />
              <div class="flex items-center gap-x-8 desktop:gap-x-6 phone:hidden tablet:hidden laptop:hidden ">
                <a href="#about" class="cursor-pointer desktop:text-[14px] hover:font-bold">
                  <p>Tentang Kami</p>
                </a>
                <a href="#servis" class="cursor-pointer desktop:text-[14px]  hover:font-bold">
                  <p>Bidang Usaha</p>
                </a>
                <a href="#penawaran" class="cursor-pointer desktop:text-[14px]  hover:font-bold">
                  <p>Penawaran</p>
                </a>
                <p class="cursor-pointer desktop:text-[14px]   hover:font-bold">Pengalaman Kami</p>
                <p class="cursor-pointer desktop:text-[14px]   hover:font-bold">Struktur Organisasi</p>
                <p class="cursor-pointer desktop:text-[14px]   hover:font-bold">Portofolio</p>
                <a href="#contacs" class="cursor-pointer desktop:text-[14px]  hover:font-bold">
                  <p>Hubungi Kami</p>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute phone:top-[80px] tablet:top-[95px] laptop:top-[90px] w-full h-full z-[99] desktop3:hidden desktop2:hidden desktop:hidden"></div>
        </div>
        <div class="relative">
          <img src={Background1} alt="" class="phone:h-[18vh] tablet:h-[20vh] tablet:w-full laptop:h-full laptop:w-full  desktop:h-full" />
          <div class="absolute desktop3:top-[35%] phone:top-[35%]  tablet:top-[30%] laptop:top-[30%] desktop:top-[30%] desktop2:top-[30%] left-[11%]">
            <p class="text-white font-Roboto text-left font-bold text-[56px] phone:text-[20px] tablet:text-[28px] laptop:text-[35px] desktop:text-[44px] desktop2:text-[44px]">PT. Telaga Selat Samudra</p>
          </div>
        </div>
      </div>
      <About />
      <VisiMisi />
      <ServiceandExp />
      <Penawaran />
      <Contacs />
      <Footer />
      <div class="absolute desktop3:bottom-3 right-3 phone:bottom-2 desktop:bottom-3 desktop2:bottom-3 laptop:bottom-2 tablet:bottom-2 ">
        <a href="https://wa.me/+6281371017363" target="_blank" rel="noopener noreferrer">
          <img src={Whatsapp} class="cursor-pointer phone:w-[13vw] tablet:w-[8vw] laptop:w-[5vw] desktop:w-[5vw] desktop2:w-[5vw]" alt="" />
        </a>
      </div>
    </div>
  )
}

export default App
