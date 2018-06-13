import React from 'react';

function GameCoordinate(props) {

    return (
        <button className="coordinate" onClick={props.onClick}>
          {props.value}
        </button>
    );
  }

export default GameCoordinate;
