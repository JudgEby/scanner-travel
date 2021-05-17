import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Wrapper = styled.div.attrs(() => ({
	'data-slider-wrapper': true,
}))`
	width: 90%;
	height: ${(props) => props.imgHeight}px;
	margin: auto;
	overflow: hidden;
`;
const Sliders = styled.div`
	display: flex;
	justify-content: space-between;
	width: ${(props) => props.slidersWidth}px;
	height: 100%;
	background-color: red;
	${(props) => props.transition}
	transform: translateX(${(props) => props.itemWidth * -props.count}px);
`;

const Slide = styled.div.attrs((props) => ({
	'data-slide': true,
}))`
	background: url('${(props) => props.src}') no-repeat;
	background-size: cover;
	width: ${(props) => props.imgWidth}px;
	height: 100%;
`;

const Numbering = styled.div`
	position: relative;
	top: 80%;
	left: 3%;
`;

const NumberingSpan = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: ${(props) => props.fontSize || 14}px;
	line-height: ${(props) => props.lineHeight || 17}px;
	color: #ffffff;
`;

const Slider = ({
	currentSlide = 0,
	firstInit,
	imgArr,
	slidersToShow = 1,
	imgWidth,
	imgHeight,
	isNumbering = false,
}) => {
	const [itemWidth, setItemWidth] = useState(0);
	const [slidersWidth, setSlidersWidth] = useState(0);

	const transition = !firstInit && `transition: all 1s;`;

	useEffect(() => {
		let wrapWidth;
		const numberOfAllSliders =
			document.querySelectorAll('[data-slider-wrapper] [data-slide]').length -
			1;
		wrapWidth = document.querySelector('[data-slider-wrapper]').offsetWidth;
		const oneItemWidth =
			(wrapWidth - slidersToShow * imgWidth) / (slidersToShow - 1) + imgWidth;
		setSlidersWidth(oneItemWidth * numberOfAllSliders + imgWidth);
		setItemWidth(oneItemWidth);
	}, [slidersToShow, imgArr, imgWidth]);

	const normalizeOfNumbering = (num) => (num < 10 ? `0${num}` : num);

	const getNumberingSpans = (slideNum, allSlidersNum) => {
		return (
			<Numbering>
				<NumberingSpan fontSize={28} lineHeight={34}>
					{normalizeOfNumbering(slideNum)}
				</NumberingSpan>
				<NumberingSpan>/{allSlidersNum}</NumberingSpan>
			</Numbering>
		);
	};

	const sliders = imgArr.map((img, index, arr) => {
		return (
			<Slide key={nanoid()} src={img} imgWidth={imgWidth}>
				{isNumbering && getNumberingSpans(index + 1, arr.length)}
			</Slide>
		);
	});

	return (
		<Wrapper imgHeight={imgHeight}>
			<Sliders
				transition={transition}
				count={currentSlide}
				slidersWidth={slidersWidth}
				itemWidth={itemWidth}
			>
				{sliders}
			</Sliders>
		</Wrapper>
	);
};

export default Slider;
