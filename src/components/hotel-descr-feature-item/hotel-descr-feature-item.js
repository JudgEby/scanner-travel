import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ descrTop, descrBottom }) =>
    descrTop && descrBottom
      ? 'justify-content: space-between;'
      : 'justify-content: center;'}
  align-items: center;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  min-width: ${({ wrapperWidth }) => wrapperWidth}px;
  height: ${({ wrapperHeight }) => wrapperHeight}px;
  background: #ffffff;
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: ${({ borderRadius }) => borderRadius};
  ${({ withGradient }) =>
    withGradient &&
    'background: linear-gradient(92.76deg, #FF8008 -3.2%, #FFC837 157.16%);'}
`
const Descr = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ descrMarginBottom }) => descrMarginBottom}px;
  margin-left: ${({ descrMarginLeft }) => descrMarginLeft}px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  text-align: center;
  color: ${({ textColor }) => textColor};
`

const HotelDescrFeatureItem = ({
  imgSrc,
  wrapperWidth,
  wrapperHeight,
  paddingTop = 0,
  descrMarginBottom = '17',
  descrMarginLeft = '0',
  descrTop = null,
  descrBottom = null,
  withGradient = false,
  boxShadow = '0px 0px 15px rgba(161, 195, 224, 0.46);',
  borderRadius = '12px',
  flexDirection = 'column',
  textColor = '#222222',
  fontWeight = 'normal',
  fontSize = '12',
  lineHeight = '13',
}) => {
  const descr = descrTop && (
    <Descr
      descrMarginBottom={descrMarginBottom}
      descrMarginLeft={descrMarginLeft}
      textColor={textColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      <span>{descrTop}</span>
      {descrBottom ? <span>{descrBottom}</span> : null}
    </Descr>
  )

  const image = imgSrc && <img src={imgSrc} alt="sandal" />

  return (
    <Wrapper
      flexDirection={flexDirection}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      withGradient={withGradient}
      wrapperWidth={wrapperWidth}
      wrapperHeight={wrapperHeight}
      paddingTop={paddingTop}
      descrTop={descrTop}
      descrBottom={descrBottom}
    >
      {image}
      {descr}
    </Wrapper>
  )
}

export default HotelDescrFeatureItem
