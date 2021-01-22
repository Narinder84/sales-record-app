/** @format */

import React from 'react';

import './nave-bar.scss';

function NavBar() {
	return (
		<div className='navbar-container'>
			<div className='left-navBar-items'>
				<p>Inventory</p>
				<p>Record Sales</p>
				<p>Add items</p>
			</div>
			<div className='right-navbar-items'>
				<p>Log Out</p>
			</div>
		</div>
	);
}

export default NavBar;
