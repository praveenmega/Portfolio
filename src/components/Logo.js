import React from 'react';
import Imageadd from '../assets/image/logo.png';
import StyleClass from './Logo.module.css';

const Logo = (props) => (
    <img className={[StyleClass.Logo,StyleClass.imgclick].join(" ")} src={Imageadd} alt="Logo" onClick={props.openedSD}/>
);

export default Logo;