import React, { useState } from 'react'
import Slider from '../slider'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 16px;
`

const Buttons = styled.div`
  display: flex;
  position: relative;
  top: -275px;
  left: 91.5%;
  :hover {
    color: blue;
  }
  img {
    margin-left: 30px;
  }
`

const SlidersWrapper = () => {
  const [changeSlideNum, setChangeSlideNum] = useState(0)
  const [firstInit, setFirstInit] = useState(true)
  const [listenedSliderCurrentSlide, setListenedSliderCurrentSlide] =
    useState(0)

  const imgArr = [
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
    './img/hotel-image.jpg',
  ]

  const handleChangeSlide = (num) => {
    setChangeSlideNum(changeSlideNum + num)
    setFirstInit(false)
  }

  const currentSlideListener = (slideNum) => {
    setListenedSliderCurrentSlide(slideNum)
  }

  return (
    <div>
      <Wrapper>
        <Slider
          sliderOrder={1}
          changeSlideNum={changeSlideNum}
          firstInit={firstInit}
          imgArr={imgArr}
          slidersToShow={5.12}
          imgWidth={347}
          imgHeight={195}
          isNumbering={true}
          currentSlideListener={currentSlideListener}
        />
      </Wrapper>
      <div>
        <Slider
          sliderOrder={2}
          changeSlideNum={changeSlideNum}
          firstInit={firstInit}
          imgArr={imgArr}
          slidersToShow={20}
          imgWidth={65}
          imgHeight={31}
          isNumbering={false}
          withMask={true}
          listenedSliderCurrentSlide={listenedSliderCurrentSlide}
          listenedSliderSlidesToShow={5}
        />
      </div>
      <Buttons>
        <img
          src="./img/icons/slider-arrow-left-icon.svg"
          alt="arrow"
          onClick={() => handleChangeSlide(-1)}
        />
        <img
          style={{ transform: `rotateY(180deg)` }}
          src="./img/icons/slider-arrow-left-icon.svg"
          alt="arrow"
          onClick={() => handleChangeSlide(1)}
        />
      </Buttons>
    </div>
  )
}

export default SlidersWrapper
