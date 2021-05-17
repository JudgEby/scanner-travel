import React from 'react';
import './scanner-travel-banner.css';

const ScannerTravelBanner = ({ bannerSrc, description }) => {
	return (
		<div className='scanner-travel-banner'>
			<img src={bannerSrc} alt='Scanner Travel Banner' />
			<span>{description}</span>
		</div>
	);
};

export default ScannerTravelBanner;
