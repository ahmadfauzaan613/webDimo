import React from 'react'

function CardSlide(props) {
  return (
    <div className="bg-white rounded p-3 ">
      <img src={props.gambar} className="rounded mx-auto " alt="" />
      <div className="flex items-start mt-[3%] justify-between">
        <div>
          <p className="text-[16px] font-bold">{props.project} </p>
          {/* <p className="text-[16px]">
            Type : <span className="font-bold">{props.type}</span>
          </p> */}
        </div>
        {/* <p className="text-center text-[16px]">
          Total Unit <br /> <span className="font-bold">{props.total}</span>
        </p> */}
      </div>
      <p className="mt-2 text-[16px]">
        Project Value: <span className="font-bold">{props.value}</span>
      </p>
    </div>
  )
}

export default CardSlide
