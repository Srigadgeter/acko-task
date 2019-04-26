import React, { Component } from 'react';
import './App.css';
import HeadContainer from './HeadContainer';



class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        
        <HeadContainer />

        <div className="bodyContainer">
        </div>
        <div className="footer">
        </div>

      </div>
    )
  }
}

export default App;