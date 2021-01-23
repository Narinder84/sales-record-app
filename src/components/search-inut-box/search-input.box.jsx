/** @format */

import React from 'react';

import './search-input-box.styled.scss';

const SearchInput = ({
	list,
	label,
	cursor,
	keyDown,
	handleChange,
	...other
}) => {
	console.log(other);
	return (
		<div className='input-container'>
			<div className={`search-box ${list.length ? 'active' : null}`}>
				{list.map((val, indx) => {
					return (
						<li className={`li ${indx === cursor ? 'pick' : null}`} key={indx}>
							{val}
						</li>
					);
				})}

				<input
					className='oder-form'
					onChange={handleChange}
					onKeyDown={keyDown}
					{...other}
				/>
			</div>
		</div>
	);
};
export default SearchInput;
