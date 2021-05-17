import React from 'react';
import './nav-item.css';

const NavItem = ({ label, special, icon }) => {
	let classes = 'nav-item';
	if (icon) {
		classes += ' nav-item-with-icon';
	}
	if (special) {
		classes += ` ${special}`;
	}

	const getIcon = (icon) => {
		return <img src={icon} alt='icon' />;
	};

	return (
		<div className={classes}>
			{label}
			{icon ? getIcon(icon) : null}
		</div>
	);
};

export default NavItem;
