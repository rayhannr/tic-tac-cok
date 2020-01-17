import React from 'react'

const Board = (props) => (
    <main>
        <div className="title">
            <h2>TIC-TAC-COK</h2>
            <p>Pemenangnya adalah yang pertama kali menghasilkan <br/> 5 simbolnya (X atau O) secara berurutan baik <br/>horizontal, vertikal, maupun diagonal.</p>
        </div>
        <div className="score">
            <div className="score__item">
                <p>X : {props.xScore}</p>
                <span className={!props.circleTurn ? 'show' : undefined}>Giliran</span>
            </div>
            <div className="score__item">
                <p>O : {props.oScore}</p>
                <span className={props.circleTurn ? 'show' : undefined}>Giliran</span>
            </div>
        </div>
        <div className={`board ${props.circleTurn ? 'o' : 'x'}`} id="board">
            {props.children}
        </div>
    </main>
)

export default Board