import React from 'react';
import StyleClass from './Sidedrawer.module.css';
import Auxi from '../hoc/Auxi';
import Logo from './Logo';
import SearchBox from './SearchBox';
import Backdrop from './Backdrop';

const Sidedrawer = (props) => {
    let joinedClasses=[StyleClass.Sidedrawer,StyleClass.Close];
    
    if(props.opened) {
        joinedClasses=[StyleClass.Sidedrawer,StyleClass.Open];
    }

    return(
        <Auxi>
            <Backdrop show={props.opened} offback={props.closed}/>
            <div className={joinedClasses.join(" ")}>
                <div className={StyleClass.Logo}>
                    <Logo/>
                </div>
                <SearchBox searchChange={props.searchChange}/> 
            </div>  
        </Auxi>
    );
}

export default Sidedrawer;