import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
	display: flex;
	padding-top: 17px;
	margin-left: 35px;
`;

const Logo = styled.img.attrs((props) => ({
	src: props.srcImg,
}))`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	margin-right: 13px;
`;

const Descr = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 11px;
	line-height: 13px;
	color: #666666;
`;

const Content = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 14px;
	color: #222222;
`;

const CurrentSelectedItem = ({
	logoSrc,
	logoHeit,
	logoWidth,
	descr,
	firstContent,
	secContent,
}) => {
	let ViewContent = secContent ? (
		<>
			<Content>{firstContent}</Content>
			<Content>{secContent}</Content>
		</>
	) : (
		<Content>{firstContent}</Content>
	);

	return (
		<Main>
			<Logo srcImg={logoSrc} height={logoHeit} width={logoWidth} />
			<div>
				<Descr>{descr}</Descr>
				{ViewContent}
			</div>
		</Main>
	);
};

export default CurrentSelectedItem;
