import React from 'react';
import './Card.css';

const Card=(props) => {
	return(
		<div className="tc bgcolor dib br3 pa3 ma2 grow bw2 shadow-3"> 
			<img className="tc" src={`https://picsum.photos/id/${props.id}/300/300.jpg`} alt={props.name} onClick={props.clicked} id={props.id}/>
			<div className="tc">
				<h3>{props.name}</h3>
			</div>
		</div>
		);
}

export default Card;