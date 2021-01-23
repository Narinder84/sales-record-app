/** @format */

import React from 'react';

import './search-input-box.styled.scss';

const SearchInput = ({ list, label, handleChange, ...other }) => {
	return (
		<div className='input-container'>
			<div className={`search-box ${list ? 'active' : null}`}>
				{list.map((val, indx) => {
					return (
						<li className='li' key={indx}>
							{val}
						</li>
					);
				})}

				<input className='oder-form' onChange={handleChange} {...other} />
			</div>
		</div>
	);
};
export default SearchInput;
