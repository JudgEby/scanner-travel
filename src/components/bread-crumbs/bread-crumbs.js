import React from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Wrap = styled.ul`
	display: flex;
	margin: 0;
	padding-left: 48px;
	li {
		list-style: none;
		margin-right: 10px;
		font-style: normal;
		font-weight: normal;
		font-size: 13px;
		line-height: 16px;
		color: #666666;
		:hover {
			text-decoration-line: underline;
			cursor: pointer;
		}
	}
`;

const BreadCrumbs = ({ crumbsArr }) => {
	const getBreadCrumbs = (arr) => {
		return arr.map((elem, i, arr) => (
			<li key={nanoid()}>{`${elem}${i < arr.length - 1 ? ' /' : ''}`}</li>
		));
	};

	return <Wrap>{getBreadCrumbs(crumbsArr)}</Wrap>;
};

export default BreadCrumbs;
