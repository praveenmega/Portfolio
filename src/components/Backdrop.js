import React from 'react';
import StyleClass from './Backdrop.module.css';

const backDrop = (props) => (props.show ? <div className={StyleClass.Backdrop} onClick={props.offback}></div>:null);

export default backDrop;
