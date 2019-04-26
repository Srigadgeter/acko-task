import React from 'react';
import './Star.css';
import star from './images/star.svg';

const Star = ({fillRatio}) => {
    return (
        <div id="starbg1">
            <div id="starbg2" style={{ width: `${fillRatio}px` }}>
                <img src={star} alt="star" id="starImg" />
            </div>
        </div>
    )
}

export default Star;