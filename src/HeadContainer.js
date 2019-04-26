import React from 'react';
import './HeadContainer.css';

import fitme from './images/fitme.svg';
import inbox from './images/inbox.svg';
import profile from './images/profile.jpg';

const HeadContainer = () => {
    return (
        <div className="headContainer">

          <div className="bg"></div>
          <div className="overlay"></div>
          

          <div className="container">
            <div className="subcontainer">
              <img src={fitme} alt="fitme_logo" id="fitmeLogo" />
              <div className="title">FIT<span>ME</span></div>
                <ul className="nav">
                  <li className="selected" id="schedule">Schedule</li>
                  <li id="overwiew">Overwiew</li>
                  <li id="articles">Articles</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                </ul>
                <img src={inbox} alt="inbox" id="inboxImg" />
                <img src={profile} alt="profile" id="profileImg" />
                <div id="profileName">Lauren Williams</div>
            </div>

            <div className="quote">Let us find your perfect <span>fitness</span> classes!</div>

            <div className="searchDiv">
              <input type="text" placeholder="Enter your location" id="searchBar" />
              <button id="searchBtn">SEARCH</button>
            </div>
          </div>
          
        </div>
    )
}


export default HeadContainer;