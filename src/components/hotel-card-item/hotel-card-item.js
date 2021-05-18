import React from 'react'
import styled from 'styled-components'
import HotelDescrFeatureItem from '../hotel-descr-feature-item'

const Wrapper = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  width: 406px;
  height: 100px;
  background: ${({ highlighted }) =>
    highlighted
      ? 'linear-gradient(92.76deg, #ff8008 -3.2%, #ffc837 157.16%)'
      : '#FFFFFF'};
  box-shadow: ${({ highlighted }) =>
    highlighted
      ? '0 4px 28px rgba(255, 128, 8, 0.56)'
      : '0 1px 28px rgba(161, 195, 224, 0.25)'};
  border-radius: 14px;
`
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 80px;
`
const Nights = styled.span`
  margin-bottom: 7px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${({ highlighted }) => (highlighted ? '#ffffff' : '#FF8008')};
`
const Operator = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;

  text-align: center;
  color: ${({ highlighted }) => (highlighted ? '#ffffff' : '#FF8008')};
`
const Prices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const OldPrice = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-decoration-line: line-through;
  color: ${({ highlighted }) => (highlighted ? '#ffffff' : '#FF8008')};
`
const CurrentPrice = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: ${({ highlighted }) => (highlighted ? '#ffffff' : '#FF8008')};
`

const HotelCardItem = ({ highlighted = false }) => {
  return (
    <Wrapper highlighted={highlighted}>
      <Icons>
        <img
          src={
            highlighted
              ? './img/icons/flash-white-icon.svg'
              : './img/icons/flash-orange-icon.svg'
          }
          alt="flash"
        />
        <img
          src={
            highlighted
              ? './img/icons/gift-white-icon.svg'
              : './img/icons/gift-orange-icon.svg'
          }
          alt="gift"
        />
      </Icons>
      <Description>
        <Nights highlighted={highlighted}>5 ночей</Nights>
        <Operator highlighted={highlighted}>Pegas Touristik</Operator>
      </Description>
      <Prices>
        <OldPrice highlighted={highlighted}>30 000 ₽</OldPrice>
        <CurrentPrice highlighted={highlighted}>10 000 ₽</CurrentPrice>
      </Prices>
      <HotelDescrFeatureItem
        src={
          highlighted
            ? './img/icons/gift-white-icon.svg'
            : './img/icons/gift-orange-icon.svg'
        }
        imgSrc={
          highlighted
            ? './img/icons/arrow-orange-icon.svg'
            : './img/icons/arrow-white-icon.svg'
        }
        wrapperWidth={64}
        wrapperHeight={42}
        borderRadius={'12px 0 0 12px'}
        withGradient={!highlighted}
        boxShadow={''}
      />
    </Wrapper>
  )
}

export default HotelCardItem
