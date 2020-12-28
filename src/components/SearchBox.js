import React from 'react';

const SearchBox = (props) => {
	return (
		<div>
		<input className='bg-white pa1 shadow-1' type='search' placeholder='Search here...' onChange={props.searchChange} />
		</div>
		);
}

export default SearchBox;