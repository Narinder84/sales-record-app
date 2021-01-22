/** @format */

import React from 'react';

import './search-input-box.styled.scss';

const SearchInput = ({ label, handleChange, ...other }) => {
	return (
		<div className='input-container'>
			<label htmlFor=''>{label}</label>
			<input className='oder-form' onchange={handleChange} {...other} />
		</div>
	);
};
export default SearchInput;
