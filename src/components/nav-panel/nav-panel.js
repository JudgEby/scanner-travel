import React from 'react';
import NavItem from '../nav-item';
import './nav-panel.css';

const NavPanel = () => {
	return (
		<nav className='nav-panel'>
			<div className='nav-panel-left'>
				<NavItem label='Главная' />
				<NavItem label='Направления отдыха' />
				<NavItem label='Отзывы' />
				<NavItem label='О нас' />
				<NavItem label='Друзья' />
				<NavItem label='Контакты' />
			</div>
			<div className='nav-panel-right'>
				<NavItem label='Избранное' icon='./img/icons/flag.svg' />
				<NavItem label='Личный кабинет' icon='./img/icons/user-icon.svg' />
				<NavItem label='Получить скидку' />
				<NavItem label='Подберите тур' special={'special-nav-panel'} />
			</div>
		</nav>
	);
};

export default NavPanel;
