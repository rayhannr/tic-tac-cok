import React from 'react'

const WinningMessage = (props) => (
    <div className={`winning-message ${props.show ? 'show' : undefined}`} id="winningMessage">
        <div>{props.draw ? 'Imbang!' : `${props.circleTurn ? 'X' : 'O'} menang!`} </div>
        <button id="restartButton" onClick={props.restart}>Main Lagi</button>
    </div>
)

export default WinningMessage