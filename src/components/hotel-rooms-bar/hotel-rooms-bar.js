import React from 'react'
import styled from 'styled-components'
import HotelDescrFeatureItem from '../hotel-descr-feature-item'
import HotelCard from '../hotel-card'

const MaimWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 48px;
  height: 484px;
  background: #ffffff;
  box-shadow: 0 1px 28px rgba(161, 195, 224, 0.25);
  border-radius: 20px;
`
const LeftSection = styled.div`
  width: 438px;
`
const RoomPhoto = styled.div`
  margin-bottom: 24px;
  height: 228px;
  background: url('./img/room-photo-test.jpg') no-repeat;
  background-size: cover;
  border-radius: 20px 0;
`
const RoomType = styled.div`
  margin: 0 0 20px 32px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #005faf;
`

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 32px;
  div {
    margin-bottom: 12px;
  }
`
const RightSection = styled.div`
  width: 1247px;
  padding-top: 32px;
`

const HotelRoomsBar = () => {
  return (
    <MaimWrapper>
      <LeftSection>
        <RoomPhoto />
        <RoomType>Стандарт</RoomType>
        <Features>
          <HotelDescrFeatureItem
            imgSrc={'./img/icons/room-area-icon.svg'}
            descrMarginBottom={0}
            descrMarginLeft={8}
            flexDirection={'row'}
            descrTop={'20 м2'}
            wrapperWidth={90}
            wrapperHeight={40}
          />
          <HotelDescrFeatureItem
            imgSrc={'./img/icons/room-area-icon.svg'}
            descrMarginBottom={0}
            descrMarginLeft={8}
            flexDirection={'row'}
            descrTop={'Кондиционер'}
            wrapperWidth={143}
            wrapperHeight={40}
          />
          <HotelDescrFeatureItem
            imgSrc={'./img/icons/room-area-icon.svg'}
            descrMarginBottom={0}
            descrMarginLeft={8}
            flexDirection={'row'}
            descrTop={'Телевизор'}
            wrapperWidth={125}
            wrapperHeight={40}
          />
          <HotelDescrFeatureItem
            imgSrc={'./img/icons/room-area-icon.svg'}
            descrMarginBottom={0}
            descrMarginLeft={8}
            flexDirection={'row'}
            descrTop={'Балкон'}
            wrapperWidth={97}
            wrapperHeight={40}
          />
        </Features>
      </LeftSection>
      <RightSection>
        <HotelCard />
      </RightSection>
    </MaimWrapper>
  )
}

export default HotelRoomsBar
