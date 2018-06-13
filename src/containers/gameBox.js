import React, { Component } from 'react';
import GameGrid from "../components/gameGrid";

class GameBox extends Component {

  render() {
    return (
    <div className="game-box">
      <div className="game-grid">
      <GameGrid />
      </div>
    </div>
    )
  }
}

export default GameBox;
