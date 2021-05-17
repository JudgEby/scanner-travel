import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'

/* withMask */

const Wrapper = styled.div.attrs((props) => ({
  [`data-slider-wrapper-${props.sliderOrder}`]: true,
}))`
  max-width: 100%;
  height: ${(props) => props.imgHeight}px;
  ${(props) => (props.withMask ? 'margin-right: 54px;' : 'margin: auto;')}
  overflow: hidden;
`
const Sliders = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.slidersWidth}px;
  height: 100%;
  ${(props) => props.transition}
  transform: translateX(${(props) => props.itemWidth * -props.count}px);
`

const Slide = styled.div.attrs((props) => ({
  [`data-slide-${props.sliderOrder}`]: true,
}))`
  background: url('${(props) => props.src}') no-repeat;
  background-size: cover;
  width: ${(props) => props.imgWidth}px;
  height: 100%;
  transition: opacity 3s;
  ${(props) => (props.withMask ? `opacity: 0.3;` : `opacity: 1;`)}
`

const Numbering = styled.div`
  position: relative;
  top: 80%;
  left: 3%;
`

const NumberingSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.fontSize || 14}px;
  line-height: ${(props) => props.lineHeight || 17}px;
  color: #ffffff;
`
/* listenedSliderCurentSlide */
const Border = styled.div`
  position: relative;
  top: -${({ imgHeight, borderWidth }) => imgHeight + borderWidth}px;
  width: ${({ borderWidth, imgWidth, itemWidth, listenedSliderSlidesToShow }) =>
    itemWidth * listenedSliderSlidesToShow -
    (itemWidth - imgWidth) -
    borderWidth}px;
  height: ${({ imgHeight }) => imgHeight}px;
  border: ${({ borderWidth }) => borderWidth}px solid blue;
  border-radius: 5px;
  transition: translateX 1s;
  transform: translateX(
    ${({ listenedSliderCurrentSlide, itemWidth, currentSlide }) =>
      currentSlide < listenedSliderCurrentSlide &&
      itemWidth * (listenedSliderCurrentSlide - currentSlide)}px
  );
`

const Slider = ({
  sliderOrder,
  changeSlideNum = 0,
  firstInit,
  imgArr,
  slidersToShow = 1,
  imgWidth,
  imgHeight,
  isNumbering = false,
  withMask = false,
  currentSlideListener = false,
  listenedSliderCurrentSlide = 0,
  listenedSliderSlidesToShow = 0,
}) => {
  const [itemWidth, setItemWidth] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSideNum, setPrevSideNum] = useState(0)
  const [slidersWidth, setSlidersWidth] = useState(0)

  if (prevSideNum !== changeSlideNum) {
    const diff = changeSlideNum - prevSideNum
    setPrevSideNum(changeSlideNum)
    if (
      (diff !== -1 || currentSlide !== 0) &&
      (diff !== 1 || currentSlide !== imgArr.length - Math.floor(slidersToShow))
    ) {
      setCurrentSlide(currentSlide + diff)
    }
  }

  useEffect(() => {
    if (currentSlideListener) {
      currentSlideListener(currentSlide)
    }
  })

  const transition = !firstInit && `transition: all 1s;`

  useEffect(() => {
    let wrapWidth
    const numberOfAllSliders =
      document.querySelectorAll(
        `[data-slider-wrapper-${sliderOrder}] [data-slide-${sliderOrder}]`
      ).length - 1
    wrapWidth = document.querySelector(
      `[data-slider-wrapper-${sliderOrder}]`
    ).offsetWidth
    const oneItemWidth =
      (wrapWidth - slidersToShow * imgWidth) / (slidersToShow - 1) + imgWidth
    setSlidersWidth(oneItemWidth * numberOfAllSliders + imgWidth)
    setItemWidth(oneItemWidth)
  }, [sliderOrder, slidersToShow, imgArr, imgWidth])

  const normalizeOfNumbering = (num) => (num < 10 ? `0${num}` : num)

  const getNumberingSpans = (slideNum, allSlidersNum) => {
    return (
      <Numbering>
        <NumberingSpan fontSize={28} lineHeight={34}>
          {normalizeOfNumbering(slideNum)}
        </NumberingSpan>
        <NumberingSpan>/{allSlidersNum}</NumberingSpan>
      </Numbering>
    )
  }

  const sliders = imgArr.map((img, index, arr) => {
    return (
      <Slide
        key={nanoid()}
        src={img}
        imgWidth={imgWidth}
        sliderOrder={sliderOrder}
        withMask={
          withMask &&
          (index < listenedSliderCurrentSlide ||
            index >= listenedSliderCurrentSlide + listenedSliderSlidesToShow)
            ? true
            : false
        }
      >
        {isNumbering && getNumberingSpans(index + 1, arr.length)}
      </Slide>
    )
  })

  const border = withMask && (
    <Border
      imgHeight={imgHeight}
      borderWidth={3}
      itemWidth={itemWidth}
      listenedSliderSlidesToShow={listenedSliderSlidesToShow}
      imgWidth={imgWidth}
      listenedSliderCurrentSlide={listenedSliderCurrentSlide}
      currentSlide={currentSlide}
    />
  )

  return (
    <>
      <Wrapper
        withMask={withMask}
        imgHeight={imgHeight}
        sliderOrder={sliderOrder}
      >
        <Sliders
          transition={transition}
          count={currentSlide}
          slidersWidth={slidersWidth}
          itemWidth={itemWidth}
        >
          {sliders}
        </Sliders>
      </Wrapper>
      {border}
    </>
  )
}

export default Slider
