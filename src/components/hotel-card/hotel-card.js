import React from 'react'
import styled from 'styled-components'
import HotelCardItem from '../hotel-card-item'
import SlidersWrapper from '../sliders-wrapper'

const Eating = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
  margin-bottom: 24px;
  width: 323px;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 0 1px 28px rgba(161, 195, 224, 0.25);
  border-radius: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #005faf;
`

const HotelCard = ({ sliderOrder = 0 }) => {
  return (
    <div>
      <Eating>Завтрак</Eating>
      <SlidersWrapper
        sliderOrder={sliderOrder}
        slidesItemsArr={[
          <HotelCardItem highlighted={true} />,
          <HotelCardItem highlighted={false} />,
          <HotelCardItem highlighted={false} />,
          <HotelCardItem highlighted={false} />,
        ]}
      />
      {/*<HotelCardItem highlighted={true} />
      <HotelCardItem highlighted={false} />*/}
    </div>
  )
}

export default HotelCard
