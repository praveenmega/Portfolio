import React from 'react';
import Styleclass from './Modal.module.css';
import Auxi from '../hoc/Auxi';
import Backdrop from './Backdrop';

const Modal = (props) => {
    return (
        <Auxi>
            <Backdrop show={props.show} offback={props.closed}/>
            <div className={Styleclass.Modal} 
            style={{transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
            opacity: props.show ? '1': '0'}}>
                {props.children}
            </div>
        </Auxi>
    );
}

export default Modal;