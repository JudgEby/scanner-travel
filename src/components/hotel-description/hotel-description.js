import React from 'react';
import styled from 'styled-components';

import HotelDescrFeatureItem from '../hotel-descr-feature-item';

import './hotel-description.css';

const Map = styled.div`
	width: 487px;
	height: 351px;
	background: center / 100% no-repeat url('${(props) => props.url}');
	border-radius: 0px 24px 24px 0px;
`;

const HotelDescription = () => {
	return (
		<div className='hotel-description'>
			<div className='map'>
				<Map url={'./img/hotel-map.jpg'} />
			</div>
			<div className='hotel-description-contant'>
				<div className='main'>
					<div className='features'>Особенности</div>
					<div className='features-items'>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/sandal-icon.svg'}
							wrapperWidth={118}
							wrapperHeight={120}
							paddingTop={10}
							descrTop={'50 м'}
							descrBottom={'до пляжа'}
						/>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/sandal-icon.svg'}
							wrapperWidth={118}
							wrapperHeight={120}
							paddingTop={10}
							descrTop={'50 м'}
							descrBottom={'до пляжа'}
						/>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/sandal-icon.svg'}
							wrapperWidth={118}
							wrapperHeight={120}
							paddingTop={10}
							descrTop={'50 м'}
							descrBottom={'до пляжа'}
						/>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/sandal-icon.svg'}
							wrapperWidth={118}
							wrapperHeight={120}
							paddingTop={10}
							descrTop={'50 м'}
							descrBottom={'до пляжа'}
						/>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/sandal-icon.svg'}
							wrapperWidth={118}
							wrapperHeight={120}
							paddingTop={10}
							descrTop={'50 м'}
							descrBottom={'до пляжа'}
						/>
					</div>
					<div className='descr'>Описание</div>
					<div className='descr-content'>
						Отель расположен в районе Соргун, на берегу Средиземного моря, в 65
						км от аэропорта Антальи. Состоит из основного 5-ти этажного здания,
						одного 5-ти этажного здания Anex и комплекса 2-х этажных бунгало
						(Клубная часть). Состоит из основного 5-ти этажного здания, одного
						5-ти этажного здания Anex и комплекса 2-х этажных бунгало (Клубная
						часть)
					</div>
					<div className='more-detailed'>Подробнее об отеле</div>
				</div>
				<div className='price-and-share'>
					<div className='price'>от 29 330 ₽</div>
					<div className='descr'>За тур с перелётом на троих</div>
					<div className='price-and-share-btns'>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/share-icon.svg'}
							wrapperWidth={72}
							wrapperHeight={60}
						/>
						<HotelDescrFeatureItem
							imgSrc={'./img/icons/bookmark-icon.svg'}
							wrapperWidth={72}
							wrapperHeight={60}
						/>
						<HotelDescrFeatureItem
							descrTop={'Смотреть все цены'}
							withGradient={true}
							flexDirection={null}
							descrMarginBottom={0}
							wrapperWidth={263}
							wrapperHeight={60}
							textColor={'#FFFFFF'}
							fontWeight={500}
							fontSize={18}
							lineHeight={20}
							boxShadow={'0px 11px 29px rgba(255, 133, 11, 0.68)'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelDescription;
