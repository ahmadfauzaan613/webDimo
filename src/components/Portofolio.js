import React, { useState } from 'react'
import Rumah from '../Images/rumah.jpg'
import Rumah1 from '../Images/IMG-8170.JPG'
import Modal from 'react-modal'
import SlideImg from './SlideImage'
import Fade from 'react-reveal/Fade'
function Portofolio() {
  const [modalIsOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Fade>
      <div id="portofolio" className="px-[11%]  mt-[3%]">
        <div className="flex items-center mb-[2rem]">
          <div className="bg-[#EAB200] mr-4 w-[0.2vw] h-[4vh]"></div>
          <p className="text-[38px] font-Quicksand font-bold text-[#031E33]">Portofolio</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <img src={Rumah1} onClick={openModal} className="h-full rounded cursor-pointer" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
          <img src={Rumah} className="h-full rounded" alt="" />
        </div>
        <Modal isOpen={modalIsOpen} className="edit2" contentLabel="Example Modal" overlayClassName="Overlay">
          <div className="flex items-center justify-between p-[1.5%]">
            <p className="text-[28px] font-bold">Judul</p>
            <div onClick={closeModal} className="cursor-pointer ">
              <span class="material-symbols-outlined text-red-600 text-[32px]">close</span>
            </div>
          </div>
          <SlideImg image1={Rumah1} image2={Rumah1} />
        </Modal>
        <div className="flex justify-center">
          <button className="w-[30vw]  h-[4vh] mt-[4%] rounded hover:bg-[#EAB200] text-[#EAB200] hover:text-white hover:font-bold border-[#EAB200] mb-[2%] border outline-none">View More</button>
        </div>
      </div>
    </Fade>
  )
}

export default Portofolio
