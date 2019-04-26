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
        star: 4,
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
            <div className="tabItems" id="fitness">
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
            
        </div>

      </div>
    )
  }
}

export default App;