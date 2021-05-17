import React from 'react'
import CurrentSelectedItem from '../current-selected-item'
import styled from 'styled-components'
import './bunner-current-selected.css'

import NavItem from '../nav-item'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1131px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0 1px 28px rgba(161, 195, 224, 0.25);
  border-radius: 0 0 12px 12px;
`

const WithBanners = styled.div`
  display: flex;
`

const BannerCurrentSelected = () => {
  return (
    <Main>
      <WithBanners>
        <CurrentSelectedItem
          logoSrc="./img/icons/geoloc-icon.svg"
          logoWidth={22}
          logoHeit={27}
          descr="Город вылета"
          firstContent="Минеральные воды"
        />
        <CurrentSelectedItem
          logoSrc="./img/icons/clarity_airplane-line.svg"
          logoWidth={36}
          logoHeit={28}
          descr="Направление отдыха"
          firstContent="Турция или слово длиннее"
        />
        <CurrentSelectedItem
          logoSrc="./img/icons/calendar-logo.svg"
          logoWidth={24}
          logoHeit={26}
          descr="Дата вылета"
          firstContent="10.12.2020"
          secContent="12.12.2020"
        />
        <CurrentSelectedItem
          logoSrc="./img/icons/moon-logo.svg"
          logoWidth={26}
          logoHeit={26}
          descr="Количество ночей"
          firstContent="от 2 до 5 ночей"
        />
        <CurrentSelectedItem
          logoSrc="./img/icons/people-logo.svg"
          logoWidth={32}
          logoHeit={24}
          descr="Количество гостей"
          firstContent="1 взрослый,"
          secContent="2 ребёнка"
        />
      </WithBanners>
      <NavItem
        icon="./img/icons/mdi-search.svg"
        special={'special-search-small'}
      />
    </Main>
  )
}

export default BannerCurrentSelected
