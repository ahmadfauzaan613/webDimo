import React, { Component } from 'react'
import Slider from 'react-slick'
import Rumah from '../Images/rumah.jpg'
import CardSlide from './CardSlide'

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 10000,
    }
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Residence I" total="16" value="Rp. 6.160.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Residence II & Shophouses" total="18:10" value="Rp. 10.550.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Residence III & Shophouses" total="18:10" value="Rp. 24.360.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="Rukos (Ruko & Kos) Patria Sari" total="18:10" value="Rp. 6.000.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Residence IV" total="18:10" value="Rp. 14.260.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Syakinah Shophouses" total="18:10" value="Rp. 3.900.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="Rumah Petak Kurnia" total="18:10" value="Rp. 1.200.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="Grha Amal Mulya Residence" total="18:10" value="Rp. 9.900.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Limbungan Shophouses" total="18:10" value="Rp. 3.300.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="RH Residence IV" total="18:10" value="Rp. 29.915.000.000" />
          </div>
          <div className="pr-3">
            <CardSlide gambar={Rumah} project="KBI Office Renovation" total="18:10" value="Rp. 650.000.000" />
          </div>
        </Slider>
      </div>
    )
  }
}
