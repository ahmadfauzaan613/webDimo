import React, { Component } from 'react'
import Slider from 'react-slick'

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
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    }
    return (
      <div className="px-[5%]">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="px-[10%]">
            <img src={this.props.image1} className="" alt="" />
          </div>
          <div className="px-[10%]">
            <img src={this.props.image1} className="" alt="" />
          </div>
          <div className="px-[10%]">
            <img src={this.props.image1} className="" alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}
