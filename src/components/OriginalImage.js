import React from 'react';
import Auxi from '../hoc/Auxi';

const OriginalImage = (props) => {

    return (
        <Auxi>
            <img className="tc" src={`https://picsum.photos/id/${props.imgid}/900/500.jpg`} alt="robot"/>
        </Auxi>
    );
} 

export default OriginalImage;