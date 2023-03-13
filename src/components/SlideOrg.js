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
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 10000,
    }
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <p>dsada</p>
          </div>
          <div>
            <p>dsada</p>
          </div>
        </Slider>
      </div>
    )
  }
}
