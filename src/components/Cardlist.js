import React from 'react';
import Card from './Card';

const Cardlist = (props) => {
	const cardComponent = props.robots.map((user,i) => {
		return <Card key={i} id={user.id} name={user.author} clicked={props.openModal}/>
	})
	return (
		<div>
			{cardComponent}
    	</div>
		);
}

export default Cardlist;