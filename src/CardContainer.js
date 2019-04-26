import React from 'react';
import './CardContainer.css';

import fitness from './images/fitness.png';
import reviewImg from './images/profile.jpg';

const CardContainer = (props) => {
    return (
        <div className="card">
            <img src={fitness} alt="fitness" id="logo" />
            <div className="cardSubContainer">
                <div className="cardTitle med">{props.title}</div>
                <div className="author reg gray">by <span className="med">{props.author}</span></div>
                <div className="cardContent reg gray">{props.content}</div>
            </div>
            <div className="floatLeft">
                <div className="club med">Club: <span className="reg gray">{props.club}</span></div>
                <div className="partners med">Partners: <span className="reg gray">{props.partners}</span></div>
                <div className="members med">Members: <span className="reg gray">{props.members}</span></div>
                <div className="reviewImgContainer">
                    <img src={reviewImg} alt="reviewImg" className="reviewImg" id="reviewImg1" />
                    <img src={reviewImg} alt="reviewImg" className="reviewImg closer" id="reviewImg2" />
                    <img src={reviewImg} alt="reviewImg" className="reviewImg closer" id="reviewImg3" />
                    <img src={reviewImg} alt="reviewImg" className="reviewImg closer" id="reviewImg4" />
                    <div id="reviewImgMore">+{props.more}</div>
                </div>
            </div>
            <div className="floatRight">
                <div className="starContainer">{props.star}</div>
                <div className="reviews reg gray">({props.reviews} Reviews)</div>
                <button className="schedule">SCHEDULE</button>
            </div>
        </div>
    )
}

export default CardContainer;