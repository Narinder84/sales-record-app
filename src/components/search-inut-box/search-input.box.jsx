/** @format */

import React from 'react';

import './search-input-box.styled.scss';

const SearchInput = ({
	list,
	label,
	cursor,
	keyDown,
	handleChange,
	inputRef,
	...other
}) => {
	return (
		<div className='d'>
			<div className='input-container'>
				<label htmlFor='Id'></label>
				<div className={`search-box ${list === undefined ? null : 'active'}`}>
					{list !== undefined
						? list.map((val, indx) => {
								return (
									<li
										className={`li ${indx === cursor ? 'pick' : null}`}
										key={indx}>
										{val}
									</li>
								);
						  })
						: null}

					<input
						className='oder-form'
						onChange={handleChange}
						onKeyDown={keyDown}
						{...other}
						ref={inputRef}
					/>
				</div>
			</div>
		</div>
	);
};
export default SearchInput;
