import React from 'react';
import './header.css';

const Header = ({shopDishes}) => {
	return (
		<div id='header'>
			<h1 className='headlogo'>
				<a href='#/'></a>
			</h1>
			<a href='#/' id='cart-info'>Menu
				<span> 
					<span>{shopDishes.length}</span> items
				</span>
			</a>
			<h2>
			¡Bienvenido! 
			¿Acaso tienes hambre?
			</h2>
	
		</div>
	)
}

export default Header;