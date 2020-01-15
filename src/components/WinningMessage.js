import React from 'react'

const WinningMessage = (props) => (
    <div className={`winning-message ${props.show && 'show'}`} id="winningMessage">
        <div>{props.draw ? 'Imbang!' : `${props.circleTurn ? 'X' : 'O'} menang!`} </div>
        <button id="restartButton" onClick={props.restart}>Restart</button>
        <button id="resetButton" onClick={props.reset}>Reset</button>
    </div>
)

export default WinningMessage