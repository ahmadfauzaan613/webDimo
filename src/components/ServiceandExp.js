import React from 'react'
import kontruksi from '../Images/Icon/supprtx2.png'
import buePrint from '../Images/Icon/blueprintx.png'
import administrator from '../Images/Icon/administratorx.png'
import listrik from '../Images/Icon/outletx.png'
import air from '../Images/Icon/dropx2.png'
import towel from '../Images/Icon/trowelx.png'
import waterproof from '../Images/Icon/waterproofx.png'
import window from '../Images/Icon/windowx.png'
import interiorDesign from '../Images/Icon/interior-designx.png'
import material from '../Images/Icon/materiaok.png'
import CardService from './cardService'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Fade from 'react-reveal/Fade'

function ServiceandExp() {
  return (
    <Fade>
      <div id="servis" className="bg-[#031E33] px-[11%] py-[2rem]  mt-[3%]">
        <div className="flex items-center my-[1,4rem]">
          <div className="bg-white mr-4 w-[0.2vw] h-[4vh]"></div>
          <p className="text-[38px] font-Quicksand font-bold text-[#EAB200]">Bidang Usaha</p>
        </div>
        <div className="grid grid-cols-4 pt-[5%] gap-10 pb-[2%]">
          <CardService gambar={kontruksi} judul="Kontruksi Bangunan" text="Melayani jasa konstruksi dan jasa renovasi bangunan, meliputi rumah tinggal, ruko, kios, gedung kantor, dsb" />
          <CardService gambar={buePrint} judul="Arsitektural & Design" text="Melayani jasa gambar, modeling, render,dan penyusunan RAB proyek" />
          <CardService gambar={administrator} judul="Administrasi Perizinan" text="Melayani jasa pengurusan perizinan seperti IMB/PBG, Site Plan, dsb" />
          <CardService gambar={listrik} judul="Instalasi Listrik" text="Melayani jasa pemasangan dan instalasi listrik pada bangunan" />
          <CardService gambar={waterproof} judul="Instalasi Waterproofing Membran" text="Melayani jasa pemasangan membran anti air (waterproofing) pada bangunan" />
          <CardService gambar={window} judul="Instalasi Kaca & Teralis" text="Melayani jasa pemasangan kaca dan teralis pada jendela, pintu, dsb" />
          <CardService gambar={interiorDesign} judul="Jasa Interior" text="Melayani jasa perancangan dan pemasangan interior berbahan HPL seperti Pintu, Backdrop TV, Partisi, dsb" />
          <CardService gambar={material} judul="Pengadaan Material Sirtu" text="Melayani jasa pengadaan material pasir dan batu kerikil" />
          <CardService gambar={air} judul="Pembuatan Sumur Bor" text="Melayani jasa pembuatan sumur bor" />
          <CardService gambar={towel} judul="Partisi dan Moulding Gypsum" text="Melayani jasa pemasangan partisi dan moulding gypsum" />
        </div>
      </div>
    </Fade>
  )
}

export default ServiceandExp
