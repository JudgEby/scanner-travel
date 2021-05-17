import React from 'react'
import './app.css'
import NavPanel from '../nav-panel'
import ScannerTravelBanner from '../scanner-travel-banner'
import BannerCurrentSelected from '../bunner-current-selected'
import CallbackPhone from '../callback-phone'
import CallbackOrder from '../callback-order'
import BreadCrumbs from '../bread-crumbs'
import HotelAndRating from '../hotel-and-rating'
import HotelDescription from '../hotel-description'
import SlidersWrapper from '../sliders-wrapper'
import CurrentSelectedItem from '../current-selected-item'
import HotelDescrFeatureItem from '../hotel-descr-feature-item'
import DateAndPrice from '../date-and-price'
import HotelRoomsBar from '../hotel-rooms-bar'

const App = () => {
  return (
    <div className="container">
      <div className="hotel-info-section">
        <NavPanel />
        <section className="info-section-top">
          <ScannerTravelBanner
            description="Поиск, подбор и бронирование туров онлайн"
            bannerSrc="./img/scanner-banner.png"
          />
          <BannerCurrentSelected />
          <div className="feedback">
            <CallbackOrder />
            <CallbackPhone />
          </div>
        </section>
        <BreadCrumbs
          crumbsArr={[
            'Главная',
            'Туры из г. Москва',
            'Туры в во Вьетнам',
            'Туры в о. Фукуок из Москвы 2020',
            'Отели Дуонг-Донга',
            'Туры в Orange Resort',
          ]}
        />
        <div className="hotel-and-rating-section">
          <HotelAndRating rating={3} />
        </div>
        <div className="slider-main">
          <SlidersWrapper />
        </div>
        <div className="hotel-description-section">
          <HotelDescription />
        </div>
      </div>
      <div className="search-section">
        <div className="search-another-tours">
          Найти другие туры в этот отель
        </div>
        <div className="search-panel-top">
          <div className="search-bar">
            <div className="search-bar-options">
              <CurrentSelectedItem
                logoSrc="./img/icons/geoloc-icon.svg"
                logoWidth={22}
                logoHeit={27}
                descr="Город вылета"
                firstContent="Минеральные воды"
              />
              <CurrentSelectedItem
                logoSrc="./img/icons/calendar-logo.svg"
                logoWidth={24}
                logoHeit={26}
                descr="Дата вылета"
                firstContent="10.12.2020 - 12.12.2020"
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
            </div>
            <HotelDescrFeatureItem
              descrTop={'Искать туры'}
              withGradient={true}
              flexDirection={null}
              descrMarginBottom={0}
              wrapperWidth={210}
              wrapperHeight={60}
              textColor={'#FFFFFF'}
              fontWeight={500}
              fontSize={18}
              lineHeight={20}
              boxShadow={'0px 11px 29px rgba(255, 133, 11, 0.68)'}
            />
          </div>
          <HotelDescrFeatureItem
            descrTop={'В этот отель найдено 315 туров'}
            flexDirection={null}
            descrMarginBottom={0}
            wrapperWidth={370}
            wrapperHeight={60}
            textColor={'#005FAF'}
            fontWeight={500}
            fontSize={18}
            lineHeight={20}
            borderRadius={'12px 0 0 12px'}
            boxShadow={'0 1px 28px rgba(161, 195, 224, 0.25)'}
          />
        </div>
        <div className="buy-tour-in-current-hotel">
          Найти другие туры в этот отель
        </div>
        <div className="protect-price-panel">
          <div className="protect-bank-bar">
            <div className="protect">
              <img src="./img/icons/protect-100-icon.svg" alt="protect" />
              <span>Безопасность Вашего платежа гарантируется </span>
            </div>
            <div className="bank">
              <img src="./img/sberbank.png" alt="sberbank" />
            </div>
          </div>
          <div className="date-price-bar">
            <DateAndPrice date={'10 ноября, вт'} price={'от 12 399 ₽'} />
            <DateAndPrice date={'10 ноября, вт'} price={'от 12 399 ₽'} />
            <DateAndPrice
              inFocus={true}
              date={'10 ноября, вт'}
              price={'от 12 399 ₽'}
            />
            <DateAndPrice date={'10 ноября, вт'} price={'от 12 399 ₽'} />
            <DateAndPrice date={'10 ноября, вт'} price={'от 12 399 ₽'} />
          </div>
        </div>
        <HotelRoomsBar />
      </div>
    </div>
  )
}

export default App
