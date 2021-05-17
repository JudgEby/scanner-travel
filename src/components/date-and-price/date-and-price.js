import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: ${({ inFocus }) => (inFocus ? 174 : 250)}px;
  ${({ inFocus }) =>
    inFocus &&
    'background: #FFFFFF; box-shadow: 0px 1px 28px rgba(161, 195, 224, 0.25); border-radius: 6px; height: 100%; display: flex;justify-content: center; align-items: center; flex-direction: column;'}
`

const Date = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ inFocus }) => (inFocus ? '#FF8008' : '#ffffff')};
`
const Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ inFocus }) => (inFocus ? '#FF8008' : '#ffffff')};
`

const DateAndPrice = ({ date, price, inFocus }) => {
  return (
    <Wrap inFocus={inFocus}>
      <Date inFocus={inFocus}>{date}</Date>
      <Price inFocus={inFocus}>{price}</Price>
    </Wrap>
  )
}

export default DateAndPrice
