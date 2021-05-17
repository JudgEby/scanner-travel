import React from 'react';
import styled from 'styled-components';

const Phone = styled.a.attrs((props) => ({
	href: props.href,
}))`
	padding-left: 15%;
	text-decoration: none;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
	color: #0b2349;
`;

const CallbackPhone = () => {
	return <Phone href='tel: 84952411275'>8 (495) 241-12-75</Phone>;
};
export default CallbackPhone;
