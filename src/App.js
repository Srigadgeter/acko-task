import React, { Component } from 'react';
import './App.css';
import HeadContainer from './HeadContainer';
import CardContainer from './CardContainer';

import yoga from './images/yoga.svg';
import fitness from './images/fitness.svg';
import dance from './images/dance.svg';
import pilates from './images/pilates.svg';
import arrow from './images/arrow.svg'; 
import acko from './images/acko.png';


class App extends Component {
  state = {
    cards: [
      {
        img: 'fitness',
        title: 'Perfect Body System',
        author: 'John Taylor',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Gold Gym Ohlo',
        partners: 'BeActive, Multisport',
        members: '7/14',
        star: 4.5,
        reviews: 12,
        more: 3
      },
      {
        img: 'fitness',
        title: 'Power Pump',
        author: 'Alicia Reed',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Fit Life',
        partners: 'Multisport',
        members: '8/14',
        star: 4,
        reviews: 134,
        more: 4
      },
      {
        img: 'fitness',
        title: 'Body & Soul',
        author: 'John Taylor',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Gold Gym Ohlo',
        partners: 'BeActive, Multisport',
        members: '7/14',
        star: 5,
        reviews: 12,
        more: 3
      },
      {
        img: 'fitness',
        title: 'Rapid Fat Burning',
        author: 'Alicia Reed',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Fit Life',
        partners: 'Multisport',
        members: '8/14',
        star: 4.5,
        reviews: 134,
        more: 4
      },
      {
        img: 'fitness',
        title: 'Perfect Body System',
        author: 'John Taylor',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Gold Gym Ohlo',
        partners: 'BeActive, Multisport',
        members: '7/14',
        star: 3.5,
        reviews: 12,
        more: 3
      },
      {
        img: 'fitness',
        title: 'Power Pump',
        author: 'Alicia Reed',
        content: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups',
        club: 'Fit Life',
        partners: 'Multisport',
        members: '8/14',
        star: 4.5,
        reviews: 134,
        more: 4
      }
    ]
  }

  render() {
    return (
      <div className="App">
        
        <HeadContainer />

        <div className="bodyContainer">
          <div className="tabs">
            <div className="tabItems" id="yoga">
              <img src={yoga} alt="yoga" />
              <div className="tabItemTexts">Yoga</div>
            </div>
            <div className="tabSelected tabItems" id="fitness">
              <img src={fitness} alt="yoga" />
              <div className="tabItemTexts">Fitness</div>
            </div>
            <div className="tabItems" id="dance">
              <img src={dance} alt="yoga" />
              <div className="tabItemTexts">Dance</div>
            </div>
            <div className="tabItems" id="pilates">
              <img src={pilates} alt="yoga" />
              <div className="tabItemTexts">Pilates</div>
            </div>
          </div>

          <div className="sort">Sort by: <span>Closest distance</span> <img src={arrow} alt="downArrow" /></div>

          <div className="cards">
            {
              this.state.cards.map((card, index) => {
                return <CardContainer 
                          img={card.img} 
                          title={card.title} 
                          author={card.author} 
                          content={card.content} 
                          club={card.club} 
                          partners={card.partners} 
                          members={card.members}
                          star={card.star}
                          reviews={card.reviews} 
                          more={card.more} />
              })
            }
          </div>
        </div>
        
        <div className="footer">
            <div className="fCont1 reg">
              <img src={acko} alt="acko_logo" id="companyLogo" />
              <div id="companyName" className="med">Acko General Insurance Ltd.</div>
              <div id="companyAddress">Unit No. 301 & 302, 3rd Floor, F wing, Lotus Corporate Park, Off Western Express Highway, Jay Coach, Goregaon East, Mumbai 400063.</div>
              <div id="Email">Email: hello@acko.com</div>
              <div id="Phone">Phone: 1860 266 2256</div>
            </div>
            <div className="fCont2 reg">
              <div className="fTitle med">COMPANY</div>
              <ul className="fItems">
                <li>About Us</li>
                <li>Board Of Directors</li>
                <li>Careers</li>
                <li>Articles</li>
                <li>Partnerships</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="fCont3 reg">
            <div className="fTitle med">SUPPORT</div>
              <ul className="fItems">
                <li>Consumer Buying Process</li>
                <li>Cancellations & Refunds</li>
                <li>Customer Service</li>
                <li>Downloads</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="fCont4 reg">
            <div className="fTitle med">LEGAL</div>
              <ul className="fItems">
                <li>Whistleblower Policy</li>
                <li>Public Disclosure</li>
                <li>Financials & Disclosures</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Stewardship Code</li>
              </ul>
            </div>
        </div>

      </div>
    )
  }
}

export default App;