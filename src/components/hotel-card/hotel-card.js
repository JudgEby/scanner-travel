import React from 'react'
import styled from 'styled-components'

const Eating = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
  margin-bottom: 24px;
  width: 323px;
  height: 40px;
  background: #ffffff;
  box-shadow: inset 0px 1px 28px rgba(161, 195, 224, 0.25);
  border-radius: 12px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #005faf;
`

const HotelCard = () => {
  return <Eating>Завтрак</Eating>
}

export default HotelCard
