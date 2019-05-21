import React, { Component } from 'react';

class Motivation extends Component {
  state = {
    motivation: ["Strength", "Joy", "Wealth", "Health"]
  }


  render() {
    return (
      <div>
        <p>I am {this.state.motivation[Math.floor(Math.random() * this.state.motivation.length)]}.</p>
      </div>
    );
  }
}

export default Motivation;