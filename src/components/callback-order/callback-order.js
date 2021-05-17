import React from 'react';
import styled from 'styled-components';

const Order = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 202px;
	height: 40px;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 17px;
	background: linear-gradient(
		90.34deg,
		#e2ebf3 0%,
		rgba(226, 235, 243, 0.31) 100%
	);
	box-shadow: 0px 1px 28px rgba(161, 195, 224, 0.25);
	border-radius: 9px 0 0 9px;
	:hover {
		text-decoration-line: underline;
		cursor: pointer;
	}
`;

const CallbackOrder = () => {
	return <Order>Заказать звонок</Order>;
};
export default CallbackOrder;
