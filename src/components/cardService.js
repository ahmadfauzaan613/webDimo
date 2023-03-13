import React from 'react'

function cardService(props) {
  return (
    <div>
      <div className="flex items-start gap-x-4">
        <div className="bg-[#EAB200]  p-[0.6rem] rounded-full">
          <img src={props.gambar} alt="" />
        </div>
        <div>
          <p className="text-[#EAB200] text-[16px] font-bold mb-1">{props.judul}</p>
          <div>
            <p className="text-white text-[16px]">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardService
