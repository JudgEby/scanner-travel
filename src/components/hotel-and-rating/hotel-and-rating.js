import React from 'react';
import { nanoid } from 'nanoid';
import './hotel-and-rating.css';

const HotelAndRating = ({ rating }) => {
	const getStars = (ratingNum) => {
		let arr = [];
		const star = (marked) =>
			marked ? (
				<img key={nanoid()} src='./img/star-marked.svg' alt='star' />
			) : (
				<img key={nanoid()} src='./img/star.svg' alt='star' />
			);

		for (let i = 1; i <= 5; i++) {
			arr.push(i <= ratingNum ? star('marked') : star());
		}
		return arr;
	};

	return (
		<div className='hotel-and-rating'>
			<div className='hotel-and-rating-contennt'>
				<div className='hotel-name'>
					Shangri La Barr Jissah Resort & Spa - Al Bandar Hotel
					<span>{` (ex. Hotel Horoshiy)`}</span>
				</div>
				<div className='rating'>{getStars(rating)}</div>
			</div>
			<img className='reviews' src='./img/reviews.png' alt='reviews' />
		</div>
	);
};

export default HotelAndRating;
