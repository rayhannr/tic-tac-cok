import React from 'react'

const Board = (props) => (
    <main>
        <div className="title">
            <h2>TIC-TAC-COK</h2>
            <p>Pemenangnya adalah yang pertama kali menghasilkan <br/> 5 simbolnya (X atau O) secara berurutan baik <br/>horizontal, vertikal, maupun diagonal.</p>
        </div>
        <div className="score">
            <p>X : {props.xScore}</p>
            <p>O : {props.oScore}</p>
        </div>
        <div className={`board ${props.circleTurn ? 'o' : 'x'}`} id="board">
            {props.children}
        </div>
    </main>
)

export default Board