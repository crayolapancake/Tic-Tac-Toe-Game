import React, { Component } from 'react';
import GameCoordinate from "./gameCoordinate";

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCoordinates: Array(9).fill(null),
      xIsNext: true
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const gameCoordinates = this.state.gameCoordinates.slice();
    if (this.calculateWinner(gameCoordinates) || gameCoordinates[i]) {
      return;
    }
    gameCoordinates[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      gameCoordinates: gameCoordinates,
      xIsNext: !this.state.xIsNext
    });
  }

  renderGameCoordinate (i) {
    return <GameCoordinate value={this.state.gameCoordinates[i]}
      onClick={() => this.handleClick(i)}
    />
  }

  calculateWinner(gameCoordinates) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i=0; i < lines.length; i++){
      const[a, b, c] = lines[i];
      //
      // const a = lines[i][0]; //3 -> "X"
      // const b = lines[i][1]; //4 -> "X"
      // const c = lines[i][2]; //5 -> "X"

      if (gameCoordinates[a]
         && (gameCoordinates[a] === gameCoordinates[b])
         && (gameCoordinates[a] === gameCoordinates[c])) {
        return gameCoordinates[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.gameCoordinates);
    let playerStatus;
    if (winner) {
      playerStatus = 'Winner: ' + winner;
    }  else {

      playerStatus = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="player-status">{playerStatus}</div>
        <div className="grid-row">
          {this.renderGameCoordinate(0)}
          {this.renderGameCoordinate(1)}
          {this.renderGameCoordinate(2)}
        </div>
        <div className="grid-row">
          {this.renderGameCoordinate(3)}
          {this.renderGameCoordinate(4)}
          {this.renderGameCoordinate(5)}
        </div>
        <div className="grid-row">
          {this.renderGameCoordinate(6)}
          {this.renderGameCoordinate(7)}
          {this.renderGameCoordinate(8)}
        </div>
      </div>
    );

  }


}
export default GameGrid;
