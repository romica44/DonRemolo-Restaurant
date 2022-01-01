import React, { Component} from 'react';
import './header.css';

const Header = ({shopDishes}) => {
	return (
		<div id='header'>
			<h1 className='headlogo'>
				<a href='#/'> </a>
			</h1>
			<a id='cart-info'>Menu
				<span> 
					<span>{shopDishes.length}</span> CARRITO
				</span>
			</a>
	
		</div>
	)
}

export default Header;