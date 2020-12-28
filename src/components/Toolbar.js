import React from 'react';
import StyleClass from './Toolbar.module.css';
import SearchBox from './SearchBox';
import Logo from './Logo';

const Toolbar = (props) => (
	<header className={StyleClass.Toolbar}>
		<Logo openedSD={props.openedSide}/>
		<h1>PORTFOLIO</h1>
		<div className={StyleClass.Formobile}>
			<SearchBox searchChange={props.searchChange}/>
		</div>
		
	</header>
);

export default Toolbar;